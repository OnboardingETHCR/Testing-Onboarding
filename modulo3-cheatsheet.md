---
layout: page
title: "Solidity Cheatsheet"
nav_order: 7
parent: "Módulo 3: Programando en Solidity"
---

## 🧾 Solidity Cheatsheet

## 📂 File Structure & Syntax

Every Solidity file has a structured format and must begin with a license and compiler version declaration.

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract MyContract {
    // Contract logic goes here
}
```

| Element              | Purpose                                                  |
|----------------------|----------------------------------------------------------|
| `SPDX-License`       | Declares the software license (MIT, GPL-3.0, etc.)       |
| `pragma solidity`    | Compiler version directive — avoids incompatibility      |
| `contract`           | Defines the contract scope                               |

> 🧠 Always use a fixed version (`^0.8.20`) to avoid unexpected behavior from compiler updates.

### ✍️ Function Structure

```solidity
function myFunction(uint a) public view returns (uint) {
    return a * 2;
}
```

| Component     | Description                                |
|---------------|--------------------------------------------|
| `function`    | Keyword to declare a function              |
| `uint a`      | Input parameter                            |
| `public`      | Visibility modifier                        |
| `view`        | Mutability modifier (does not modify state)|
| `returns`     | Return type(s) declaration                 |

---

## 📌 Types & Literals

Solidity supports a variety of types. Here's a summary of the most commonly used ones:

### 🔢 Value Types

| Type       | Description                             | Example                    |
|------------|-----------------------------------------|----------------------------|
| `uint256`  | Unsigned integer (default 256 bits)     | `uint256 count = 5;`       |
| `int256`   | Signed integer                          | `int256 temp = -42;`       |
| `bool`     | Boolean                                 | `bool active = true;`      |
| `address`  | Ethereum address                        | `address user = msg.sender;` |
| `bytes32`  | 32-byte fixed array                     | `bytes32 id = keccak256(...)` |

### 🧵 Reference Types

| Type     | Description                        | Example                           |
|----------|------------------------------------|-----------------------------------|
| `string` | UTF-8 text                         | `string name = "Alice";`          |
| `bytes`  | Dynamic byte array                 | `bytes data = hex"1234";`         |
| `array`  | Ordered list of elements           | `uint[] scores;`                  |
| `mapping`| Key-value storage                  | `mapping(address => uint) balances;` |
| `struct` | Custom grouped variables           | `struct Task { string text; bool done; }` |
| `enum`   | Named constants (state machines)   | `enum Status { Pending, Done }`   |

> ⚠️ Solidity has **no floats**. Use integers and scale manually (e.g., `amount * 10**18` for ETH).

### 🔣 Literals

| Literal       | Example             |
|---------------|---------------------|
| Decimal       | `123`, `42`         |
| Hexadecimal   | `0x2A`, `hex"abcd"` |
| Boolean       | `true`, `false`     |
| Address       | `0xAbC...123`       |
| String        | `"Hello"`           |

---

## 🔐 Visibility & Mutability

Solidity functions and state variables must declare visibility and optionally, mutability.

### 🔎 Visibility Modifiers

| Modifier     | Applies to        | Who can access it?                          |
|--------------|-------------------|----------------------------------------------|
| `public`     | functions, vars   | Everyone – external & internal access        |
| `private`    | functions, vars   | Only this contract                          |
| `internal`   | functions, vars   | This + derived contracts                    |
| `external`   | functions only    | Only external callers (not from self)       |

> 🧠 Best practice: always declare visibility explicitly. Compiler will warn otherwise.

### 🔁 Mutability Modifiers

| Modifier     | Applies to  | Behavior                                |
|--------------|-------------|------------------------------------------|
| `view`       | functions   | Can read state but not modify it         |
| `pure`       | functions   | Cannot read or modify state              |
| `payable`    | functions   | Allows receiving ETH                     |
| `constant`   | variables   | Cannot be modified after deployment      |
| `immutable`  | variables   | Can be set once in constructor           |

> ⚠️ `view` and `pure` functions don’t consume gas **when called externally**.

## 🔧 Functions & Modifiers

Functions define behavior in contracts. Modifiers allow code reuse and access control.

### 🧱 Function Declaration

```solidity
function transfer(address to, uint amount) public returns (bool) {
    // logic here
}
```

| Keyword        | Description                                |
|----------------|--------------------------------------------|
| `function`     | Declares a function                        |
| `returns`      | Output values                              |
| `public`/etc.  | Visibility                                 |
| `view`, `pure` | Mutability                                |
| `payable`      | Accepts ETH                               |

### 🛡️ Custom Modifiers

```solidity
modifier onlyOwner() {
    require(msg.sender == owner, "Not owner");
    _;
}
```

Use modifiers to enforce reusable conditions on functions.

```solidity
function withdraw() public onlyOwner {
    // Restricted logic
}
```

| Symbol | Meaning                                |
|--------|----------------------------------------|
| `_`    | Placeholder for the function body      |

---

### 💡 Special Functions

| Function     | Purpose                                  |
|--------------|------------------------------------------|
| `constructor`| Runs once on contract deployment         |
| `fallback()` | Handles unknown calls or data            |
| `receive()`  | Handles plain ETH transfers (no calldata)|

> ⚠️ You can define both `receive()` and `fallback()` if needed.

---

## 🔁 Control Structures

Control structures define the logic and branching in your smart contracts.

### 🧩 Conditionals

```solidity
if (x > 10) {
    doSomething();
} else {
    revert("Invalid value");
}
```

| Keyword     | Purpose                           |
|-------------|------------------------------------|
| `if`        | Conditional execution              |
| `else`      | Alternate branch                   |
| `require()` | Validate input or state            |
| `revert()`  | Revert state, return error message |
| `assert()`  | Internal consistency checks        |

> Use `require` for user input, `assert` for internal invariants.

### 🔄 Loops

```solidity
for (uint i = 0; i < 10; i++) {
    doSomething(i);
}

while (condition) {
    ...
}
```

| Keyword      | Use Case               |
|--------------|------------------------|
| `for`        | Loop with counter      |
| `while`      | Loop while condition   |
| `do while`   | Execute before check   |
| `break`      | Exit loop early        |
| `continue`   | Skip to next iteration |

> ⚠️ Avoid unbounded loops — they risk running out of gas.

### 🔙 Returns

```solidity
return result;
```

Used to return values from functions.

---

## 📦 Storage & Constants

Solidity requires explicit data locations for complex types in functions.

### 🧠 Data Locations

| Keyword      | Description                                         | Use Case                             |
|--------------|-----------------------------------------------------|---------------------------------------|
| `storage`    | Persistent state on blockchain                      | State variables                       |
| `memory`     | Temporary, erased between external calls            | Function arguments, local copies      |
| `calldata`   | Read-only, external input data (cheapest)           | `external` function parameters        |

```solidity
function setName(string memory _name) public {
    name = _name;
}
```

> 🧪 `calldata` is cheaper than `memory` and should be preferred for `external` inputs.

---

### 🔒 Constants

| Keyword       | Applies To      | Behavior                                 |
|---------------|------------------|-------------------------------------------|
| `constant`    | Variables        | Fixed at compile time                     |
| `immutable`   | Variables        | Assigned once in constructor              |

```solidity
uint256 public constant MAX_SUPPLY = 1000;
address public immutable deployer;

constructor() {
    deployer = msg.sender;
}
```

---

## 📣 Events & Errors

Events help log data for external tools (like frontends).  
Custom errors are gas-efficient alternatives to revert strings.

### 📤 Events

```solidity
event Transfer(address indexed from, address indexed to, uint256 amount);

emit Transfer(msg.sender, recipient, amount);
````

| Keyword   | Use Case                  |
| --------- | ------------------------- |
| `event`   | Declares an event         |
| `emit`    | Triggers/logs the event   |
| `indexed` | Enables filtering in logs |

> Events don’t affect contract logic — they’re for off-chain observers (e.g., UIs, indexers).

---

### 🚨 Custom Errors

```solidity
error NotOwner();
error InsufficientBalance(uint256 available, uint256 required);

if (msg.sender != owner) revert NotOwner();
```

| Statement   | Use Case                                  |
| ----------- | ----------------------------------------- |
| `require()` | Input validation, fail early              |
| `revert()`  | Manual rollback with optional error       |
| `assert()`  | Internal logic checks (consumes all gas)  |
| `error`     | Custom error types (cheaper than strings) |

---

## 🏗️ Inheritance & Interfaces

Solidity supports inheritance between contracts and the use of interfaces for abstraction.

### 🧬 Inheritance

```solidity
contract Base {
    function greet() public pure virtual returns (string memory) {
        return "Hello";
    }
}

contract Derived is Base {
    function greet() public pure override returns (string memory) {
        return "Hi";
    }
}
```

| Keyword      | Purpose                                 |
|--------------|------------------------------------------|
| `is`         | Inherit from another contract            |
| `virtual`    | Allows function to be overridden         |
| `override`   | Required when overriding inherited logic |

> 🔁 Multiple inheritance is supported, but must be linearized explicitly.

---

### 🧩 Interfaces

```solidity
interface ICounter {
    function count() external view returns (uint);
    function increment() external;
}
```

| Feature        | Notes                                      |
|----------------|--------------------------------------------|
| `interface`    | Defines external-only function signatures  |
| No constructor | Interfaces cannot have constructors        |
| External only  | Functions must be `external`               |

Interfaces are commonly used with token standards (ERC20, ERC721, etc).

---

## 📚 Import & Library Use

Solidity allows importing external files and attaching helper libraries to types.

### 📦 Importing Files

```solidity
import "./Math.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
```

Use relative paths (`./`) for your own contracts, and NPM-style paths for libraries like OpenZeppelin.

---

### 🧰 Libraries

```solidity
library Math {
    function add(uint a, uint b) internal pure returns (uint) {
        return a + b;
    }
}
```

Libraries are stateless helper contracts that group related functions.

---

### 🔗 Using Libraries on Types

```solidity
using Math for uint;

uint result = 3.add(4); // result = 7
```

| Keyword        | Purpose                                  |
|----------------|-------------------------------------------|
| `library`      | Declares a reusable helper collection     |
| `using X for Y`| Attaches library functions to a type      |

> 💡 OpenZeppelin uses libraries heavily for security and standards compliance.

---

## ⛽ Gas & Optimization Tips

Gas is the cost of computation on Ethereum. Smart contracts should be optimized to reduce gas usage.

### ⚠️ Costly Operations

| Operation            | Notes                                         |
|----------------------|-----------------------------------------------|
| Writing to storage   | Most expensive — avoid unnecessary writes     |
| Dynamic arrays       | Growing them repeatedly costs gas             |
| Loops                | Unbounded loops can run out of gas            |
| `assert()` failure   | Consumes all gas — use sparingly              |

---

### ✅ Best Practices

- Use `uint256` over smaller types unless tightly packed.
- Favor `calldata` over `memory` for external inputs.
- Short-circuit `require` statements to fail early.
- Mark functions `view` or `pure` when applicable.
- Use `immutable` and `constant` when values don’t change.
- Avoid storing duplicate or derived data.
- Group related storage variables to optimize layout.

---

### 🚫 Avoid

- Repeating `require()` with same condition.
- Emitting unnecessary events.
- Writing to storage in loops.
- Reentrancy without proper protection.

> 🧠 Optimizing gas is important for cost and scalability — especially in dApps used by many.

---

## 🧭 Common Patterns

These patterns appear frequently in secure, modular smart contracts.

### 🔐 Ownable Access Control

```solidity
address public owner = msg.sender;

modifier onlyOwner() {
    require(msg.sender == owner, "Not owner");
    _;
}
````

Used to restrict sensitive actions (e.g., minting, withdrawing, upgrades).

---

### 💸 Withdraw Pattern

```solidity
function withdraw() public onlyOwner {
    payable(msg.sender).transfer(address(this).balance);
}
```

Avoid sending ETH automatically to users. Use **pull over push** patterns.

---

### 🪙 Receiving ETH

```solidity
receive() external payable {
    // Plain ETH transfer
}

fallback() external payable {
    // Called with unknown calldata
}
```

| Function     | Trigger Condition                            |
| ------------ | -------------------------------------------- |
| `receive()`  | Called on plain ETH transfers                |
| `fallback()` | Called on unknown calldata or empty fallback |

---

## 🔤 Solidity Keywords (A–Z)

A short alphabetical list of important Solidity keywords.

| Keyword        | Description                                       |
|----------------|---------------------------------------------------|
| `address`      | Ethereum account or contract address type         |
| `assert`       | Internal check — uses all gas on failure          |
| `break`        | Exit a loop early                                 |
| `calldata`     | External read-only data location                  |
| `constructor`  | Runs once at deployment                           |
| `constant`     | Immutable value at compile time                   |
| `emit`         | Triggers an event                                 |
| `enum`         | User-defined named constant set                   |
| `event`        | Declare a loggable event                          |
| `external`     | Callable only from outside                        |
| `fallback`     | Called when no function matches / unknown data    |
| `for`, `while` | Loop constructs                                   |
| `function`     | Defines logic and interaction                     |
| `if`, `else`   | Conditional logic                                 |
| `immutable`    | Assignable once in constructor                    |
| `import`       | Bring external code                               |
| `interface`    | Declare external-only callable contract           |
| `internal`     | Only this contract or derived contracts           |
| `is`           | Inherit from another contract                     |
| `library`      | Define stateless helper code                      |
| `mapping`      | Key-value storage                                 |
| `memory`       | Temporary variable storage in function            |
| `modifier`     | Pre-function logic gate                           |
| `msg.sender`   | Caller of the function                            |
| `override`     | Override inherited logic                          |
| `payable`      | Accept ETH in function                            |
| `pragma`       | Declare compiler version                          |
| `private`      | Internal to this contract only                    |
| `public`       | Visible and callable from anywhere                |
| `pure`         | No state reading or writing                       |
| `receive`      | Handles plain ETH transfers                       |
| `require`      | Validate condition or revert                      |
| `revert`       | Abort and return unused gas                       |
| `return`       | Exit function and return value                    |
| `storage`      | Persistent state variable location                |
| `struct`       | Custom data structure                             |
| `this`         | Address of the current contract                   |
| `uint256`      | Unsigned 256-bit integer                          |
| `view`         | Reads state but does not modify                   |
| `virtual`      | Can be overridden in child contract               |
| `override`     | Overrides a `virtual` function                    |


