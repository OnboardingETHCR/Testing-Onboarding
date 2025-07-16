---

layout: page
title: "Anatomía de un Contrato"
nav_order: 2
parent: "Módulo 3: Programando en Solidity"

---

## 🧬 Anatomy of a Smart Contract

Now that you've seen what Solidity looks like, it's time to understand **how a complete smart contract is structured** and why each part matters.

In this section, we’ll break down a contract into its fundamental components: state variables, constructor, functions, events, and custom errors. These are not just code elements — they represent the way your contract stores information, reacts to users, and communicates with the outside world.

---

## 🧱 What makes a smart contract complete?

A well-designed contract is clean, explicit, and modular. Let's begin with a practical example and analyze it piece by piece.

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

error Unauthorized();
error EmptyMessage();

contract MessageBoard {
    address public owner;
    string private message;

    event MessageUpdated(address indexed sender, string newMessage);

    constructor(string memory _initialMessage) {
        if (bytes(_initialMessage).length == 0) revert EmptyMessage();
        owner = msg.sender;
        message = _initialMessage;
    }

    function updateMessage(string calldata _newMessage) external {
        if (bytes(_newMessage).length == 0) revert EmptyMessage();
        message = _newMessage;
        emit MessageUpdated(msg.sender, _newMessage);
    }

    function readMessage() external view returns (string memory) {
        return message;
    }

    function deleteMessage() external {
        if (msg.sender != owner) revert Unauthorized();
        message = "";
    }
}
```

---

### 🔍 Key Highlights from the Contract

| Section              | Description |
|----------------------|-------------|
| `SPDX + pragma`      | Declares license and compiler version |
| `error` definitions  | Custom error types for efficient reverts |
| `state variables`    | `owner` and `message`, with different visibility levels |
| `event`              | Emitted when the message is updated |
| `constructor`        | Initializes contract with validation |
| `updateMessage()`    | Publicly callable write function with validation and event |
| `readMessage()`      | View function for external reads |
| `deleteMessage()`    | Restricted to owner, reverts otherwise |

---

In the following sections, we'll analyze each of these parts in more depth: starting with **state variables** and why they matter in the context of gas, visibility, and security.

```

---

## 🧾 State Variables: Scope, Cost and Control

State variables are the foundation of your contract's persistent data. They are stored **directly on the blockchain**, and their values remain consistent across function calls and transactions.

Unlike local variables, **state variables consume storage**, which is **one of the most expensive operations in Solidity**. Therefore, it’s essential to define them efficiently and explicitly.

### 🔐 Visibility

Solidity uses visibility keywords to define **who can access a variable**. If not declared explicitly, the compiler applies a default (`internal`).

| Keyword     | Who can read/write it?                            |
|-------------|----------------------------------------------------|
| `public`    | Anyone — auto-generates a getter function         |
| `private`   | Only this contract can access it                  |
| `internal`  | This contract and derived contracts               |

**Example:**

```solidity
address public owner;       // Visible to all, generates a getter
string private message;     // Only accessible inside this contract
```

> ✅ Avoid leaving visibility undefined. Solidity does not default to `private` — it defaults to `internal`.

---

### 💰 Storage Cost: Gas Implications

Each state variable occupies **one storage slot (256 bits)**, unless optimized through **packing**. Updates to storage are expensive (around 20,000 gas per write). Reading from storage is cheaper but still non-trivial.

Keep this in mind:
- Use `memory` for temporary variables inside functions
- Consider using `calldata` for input arguments in external functions (especially strings and arrays)

---

### 🔒 `constant` and `immutable`

These are special modifiers that reduce gas costs and improve clarity.

| Modifier     | When is the value set? | Is it stored on-chain? | Gas cost |
|--------------|-------------------------|--------------------------|----------|
| `constant`   | At compile time         | No (hardcoded in bytecode)| Very low |
| `immutable`  | At deployment (via constructor) | Yes (once)        | Low |

**Example:**

```solidity
uint256 public constant MAX_USERS = 1000;
address public immutable deployer;

constructor() {
    deployer = msg.sender;
}
```

> 🔍 `constant` is best for values that will never change (like fees, limits).  
> `immutable` is useful when the value must be dynamic at deploy time (like the deployer address), but never updated again.

---


## 🏗️ The Constructor: One Shot Initialization

A **constructor** in Solidity is a special function that **runs only once**, immediately after the contract is deployed. It’s commonly used to initialize critical variables such as the owner, starting balances, or configuration values.

The constructor **cannot be called again** after deployment — any state it sets becomes part of the contract's initial storage.

### 🧪 Syntax

```solidity
constructor(string memory _initialMessage) {
    message = _initialMessage;
    owner = msg.sender;
}
```

No need to declare visibility (e.g., `public`) — the constructor is always internal by nature.

---

### 🔐 Common Use Cases

- Set the contract `owner`
- Assign `immutable` values
- Validate initial parameters
- Emit initial events (if needed)

---

### 🧱 Example with Error Handling

```solidity
error EmptyMessage();

constructor(string memory _initialMessage) {
    if (bytes(_initialMessage).length == 0) {
        revert EmptyMessage();
    }
    message = _initialMessage;
    owner = msg.sender;
}
```

This constructor ensures:
- The message is not empty (validated with `revert`)
- The deployer address is captured and saved
- It never runs again after deployment

---

### ⚠️ Best Practices

| Tip | Why it matters |
|-----|----------------|
| Validate inputs       | Prevent invalid state from the start |
| Use `immutable` when possible | Saves gas and improves code clarity |
| Avoid heavy logic     | Keep it simple — constructor gas is paid on deployment |
| Don’t emit sensitive data | Remember: contract creation data is public |

> 🧠 Constructors define the *initial state* — but **not access control**. Always combine with proper function restrictions like `require(msg.sender == owner)` or use modifiers.

---

## 🛠️ Functions: Logic, Visibility and Behavior

Functions are the **core units of behavior** in a smart contract. They define how your contract responds to users, modifies data, emits events, or sends Ether.

Each function must have:
- A **name**
- **Input parameters**
- (Optional) **return values**
- (Optional) **modifiers** such as `view`, `payable`, etc.
- A **visibility keyword** that defines who can call it

---

### 🔭 Visibility Keywords

| Keyword     | Who can call it?                      | Use case example |
|-------------|----------------------------------------|------------------|
| `public`    | Anyone — external or internal calls    | Most accessible functions |
| `external`  | Only external callers (e.g., users, other contracts) | Saves gas for large arguments |
| `internal`  | Only this contract or inherited ones  | For shared logic |
| `private`   | Only this contract                    | For internal use only |

```solidity
function publicFunc() public returns (bool) { ... }
function externalFunc() external view returns (uint) { ... }
function internalFunc() internal { ... }
function privateFunc() private pure { ... }
```

> 🔍 `external` functions are slightly more gas-efficient when accepting large structs or strings.

---

### 🧭 Function Modifiers

Solidity uses **modifiers** to declare function behavior:

| Modifier    | Description |
|-------------|-------------|
| `view`      | Reads state, but doesn’t modify it |
| `pure`      | Doesn’t read or modify state |
| `payable`   | Allows function to receive ETH |
| `virtual` / `override` | Used in inheritance contexts |

```solidity
function readData() public view returns (string memory) {
    return message;
}

function calculate(uint a, uint b) public pure returns (uint) {
    return a + b;
}

function donate() external payable {
    // receives ETH
}
```

---

### 💸 Receiving ETH: `payable`

Only functions marked as `payable` can receive Ether. Attempting to send ETH to a non-`payable` function will fail.

```solidity
function contribute() external payable {
    require(msg.value > 0, "Send ETH");
}
```

---

### 🔐 Access Control (Manual)

Functions often require access restrictions. You can implement it with `require()`:

```solidity
function resetMessage() public {
    require(msg.sender == owner, "Not authorized");
    message = "";
}
```

For better structure, consider **custom errors** and **modifiers**, which we'll explore later.

---

## 📣 Events: Logging On-Chain Activity

Events are a way for smart contracts to **emit logs** that can be read by external systems like UIs, backends, or analytics tools. They are not stored in contract state — instead, they’re kept in transaction logs (part of the Ethereum receipt layer).

Use events to:
- Signal a meaningful change (e.g., transfer, update, approval)
- Provide data to frontends
- Track contract activity without storing extra state

---

### 🛎️ Declaring and Emitting Events

```solidity
event MessageUpdated(address indexed sender, string newMessage);
```

- `indexed` makes the parameter searchable (up to 3 per event)
- Events are declared outside functions, like global declarations

To **emit** an event:

```solidity
emit MessageUpdated(msg.sender, _newMessage);
```

This creates a log entry with the data and topic filter (`indexed`).

---

### 🧠 Example in Context

```solidity
event MessageUpdated(address indexed sender, string newMessage);

function updateMessage(string calldata _newMessage) external {
    message = _newMessage;
    emit MessageUpdated(msg.sender, _newMessage);
}
```

---

### 📡 Why Use Events?

| Reason | Benefit |
|--------|---------|
| Gas-efficient logging | Much cheaper than storing state |
| UI triggers | Frontends listen for changes (e.g., Metamask, The Graph) |
| Transparency | Helps users and devs track what happened and when |

> 🔍 Events are not accessible *within Solidity*. You can’t read past logs on-chain. They’re for **external consumers only**.

---

### ⚠️ Best Practices

- Don’t emit too many events — keep them relevant
- Avoid storing sensitive user data
- Use `indexed` only when filtering is needed

---

## 🚫 Custom Errors: Gas-Efficient Reverts

In Solidity, it's common to use `require()` with a string message when a condition fails. However, as contracts grow and gas becomes a concern, **custom errors** offer a cheaper and cleaner alternative.

---

### ❌ Traditional `require` with string

```solidity
require(msg.sender == owner, "Not authorized");
```

- Simple and readable
- But storing long strings increases **contract size and gas**

---

### ✅ Using `error` and `revert`

Instead of writing the message directly, you can define a **custom error** at the top of the contract:

```solidity
error Unauthorized();
error EmptyMessage();
```

Then use `revert`:

```solidity
function resetMessage() external {
    if (msg.sender != owner) revert Unauthorized();
    message = "";
}
```

This approach:
- Saves **deployment and runtime gas**
- Encourages **standardized error naming**
- Makes errors more readable in tools like Hardhat, Foundry, or Remix

---

### 📊 Gas Comparison (Approximate)

| Approach | Avg. Gas Cost |
|----------|----------------|
| `require("message")` | High (string stored in bytecode) |
| `revert CustomError()` | Low (no string stored) |

---

### 🔍 When to use `require` vs `revert`?

| Use `require` when... | Use `revert CustomError` when... |
|------------------------|----------------------------------|
| Quick checks with short messages | You want to optimize for gas |
| You don’t reuse the error       | You plan to reuse the error across functions |
| Readability matters for beginners | You build large or production-grade contracts |

---

### 💡 Bonus: Error Parameters

Custom errors can also take arguments:

```solidity
error InsufficientBalance(uint256 available, uint256 required);

function withdraw(uint256 amount) external {
    if (balance[msg.sender] < amount)
        revert InsufficientBalance(balance[msg.sender], amount);
}
```

This lets you surface more useful debugging info **without storing full strings**.

---

## 🧠 Recap

In this section, you've explored the complete anatomy of a smart contract:

- State variables and their cost
- The constructor and one-time setup logic
- Functions with visibility, modifiers, and payability
- Events for external communication
- Errors for robust and gas-efficient validation

---

---

### 🔁 Navegación

<div style="display: flex; justify-content: flex-end; margin-top: 2em;">
  <a class="btn" href="/Testing-Onboarding/modulo3-3">Siguiente ➡️</a>
</div>

