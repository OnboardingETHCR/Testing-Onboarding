---
layout: page
title: "3.3 Tipos, Funciones y Flujo de Control"
nav_order: 3
parent: "Módulo 3: Programando en Solidity"
---

## 🧮 3.3 Types, Functions and Control Flow

Understanding how Solidity manages data, defines behavior, and controls execution flow is essential to writing robust and efficient smart contracts.

This section will guide you through:

- The core data types used in Solidity
- The different locations where data can be stored and passed
- Function definitions, visibility, and mutability
- Control structures such as conditionals, loops, and validation

Whether you're structuring a DAO, minting NFTs, or building a DeFi protocol, these building blocks are critical for secure and effective smart contract design.

## 🔢 Types in Solidity

Solidity provides a rich set of **data types** to represent values in a secure and gas-efficient way. Choosing the right type is essential for writing readable, optimized, and safe contracts.

Below is an overview of the most commonly used types:

---

### 📌 Elementary Types

| Type       | Description                             | Example                           |
|------------|-----------------------------------------|------------------------------------|
| `uint`     | Unsigned integer (default: 256 bits)    | `uint age = 30;`                   |
| `int`      | Signed integer                          | `int balance = -100;`              |
| `bool`     | Boolean value                           | `bool isActive = true;`            |
| `address`  | Ethereum wallet or contract address     | `address owner = msg.sender;`      |
| `string`   | UTF-8 encoded dynamic text              | `string name = "Alice";`           |
| `bytes`    | Dynamic sequence of bytes               | `bytes data = hex"1234";`          |
| `bytesN`   | Fixed-size byte array (`bytes1` to `bytes32`) | `bytes32 id = keccak256(...);` |

> ⚠️ Solidity does not support floating point numbers (e.g., `float`, `double`).  
> All decimals must be handled manually using integers (e.g., `amount * 10**18`).

---

### 📦 Arrays

Arrays can be:
- **Fixed-size**: `uint[3]` (size must be known at compile time)
- **Dynamic**: `string[]`, `uint[]`

```solidity
uint[] public numbers;
string[2] public names = ["Alice", "Bob"];
```

---

### 🎛️ Enums

Enums define a set of named states or options.

```solidity
enum Status { Pending, Shipped, Delivered }

Status public currentStatus;

function markShipped() external {
    currentStatus = Status.Shipped;
}
```

---

### 🧱 Structs

Structs allow grouping related data into a custom type.

```solidity
struct Product {
    string name;
    uint price;
    bool available;
}

Product public item;

function createProduct(string memory _name, uint _price) external {
    item = Product(_name, _price, true);
}
```

> 📌 Structs can be nested, used in arrays, or passed to functions.  
> However, they increase gas usage, so use them judiciously.

---

### ✅ Best Practices

- Use the **smallest integer size** possible (`uint8`, `uint16`, etc.) when optimizing for storage — especially in structs.
- Prefer `uint256` and `int256` when consistency and readability are more important than minimal storage.
- Always initialize variables explicitly to avoid unexpected `default` values.
- Avoid using `string` and `bytes` in conditions or loops — they are expensive to process.

---

## 🗂️ Data Locations: storage, memory, and calldata

In Solidity, variables can live in different parts of the Ethereum Virtual Machine — this affects how data is accessed, stored, and how much gas is used.

There are **three main data locations** you need to understand:

| Location   | Persistent? | Readable? | Writable? | Typical Use                     |
|------------|-------------|-----------|-----------|----------------------------------|
| `storage`  | ✅ Yes       | ✅ Yes     | ✅ Yes     | State variables on-chain         |
| `memory`   | ❌ No        | ✅ Yes     | ✅ Yes     | Temporary variables in functions |
| `calldata` | ❌ No        | ✅ Yes     | ❌ No      | External function parameters     |

---

### 🏛️ `storage` – On-chain, persistent state

Data stored in `storage` lives **permanently on the blockchain**. It is the most expensive location in terms of gas, and it’s used for all state variables.

```solidity
string public greeting; // lives in storage
```

---

### 🧠 `memory` – Temporary data

Data in `memory` only exists **during the function call**. It is cheaper than `storage`, and it's the default for most reference types in internal functions.

```solidity
function upperCase(string memory _input) public pure returns (string memory) {
    // _input and result live in memory
}
```

---

### 📨 `calldata` – External read-only input

Used only for **function arguments** in external functions. It is non-modifiable, which makes it **very gas-efficient**.

```solidity
function processData(string calldata _input) external {
    // _input is read-only and uses calldata
}
```

> 🔍 `calldata` is required for external functions that take dynamic data types like `string` or arrays.

---

### 🚫 Common Pitfalls

- Forgetting to specify a data location for complex types (e.g., `string`, `struct`, arrays) will cause a compilation error.
- Trying to modify a `calldata` variable will cause an error — it’s read-only.
- Copying data from `storage` to `memory` is cheap to read, but **writing back to `storage` costs gas**.

---

✅ Choosing the right data location is a key optimization technique in Solidity. Use `memory` when you need temporary data, and `calldata` for external read-only arguments.

---

## 🧰 Function Behavior and Visibility

In Solidity, functions are the building blocks of smart contract logic. Understanding how to configure their **visibility**, **mutability**, and **execution context** is essential for writing secure and efficient contracts.

---

### 🔍 Visibility Keywords

Every function must declare **who is allowed to call it**:

| Keyword     | Who can call it?                   | Typical Use                        |
|-------------|------------------------------------|------------------------------------|
| `public`    | Anyone (external or internal)      | Main contract functions            |
| `external`  | Only external callers              | Optimized for external interfaces  |
| `internal`  | Only this contract or inheritance  | Shared logic, helper functions     |
| `private`   | Only this contract                 | Internal-only logic (not inherited)|

```solidity
function greet() public view returns (string memory) { ... }
function calculate() external pure returns (uint) { ... }
```

> ℹ️ External functions are slightly more gas-efficient when called from outside and when using large inputs (`string`, `array`).

---

### ⚙️ Function Modifiers (Mutability)

Modifiers describe how a function interacts with the blockchain:

| Modifier   | Meaning                            | Example Use                      |
|------------|------------------------------------|----------------------------------|
| `view`     | Reads state but does not modify it | `function get() public view`     |
| `pure`     | Does not read or modify state      | `function sum(a, b) public pure` |
| `payable`  | Allows the function to receive ETH | `function deposit() public payable` |

```solidity
function getBalance() public view returns (uint) {
    return address(this).balance;
}

function multiply(uint a, uint b) public pure returns (uint) {
    return a * b;
}

function donate() external payable {
    // Accepts ETH
}
```

---

### 🔐 Manual Access Control Example

You can protect functions using conditions like `require`:

```solidity
address public owner;

function restrictedAction() external {
    require(msg.sender == owner, "Not authorized");
    // Do something sensitive
}
```

> 🔐 In advanced contracts, reusable restrictions are implemented as **modifiers** (e.g., `onlyOwner`) — which will be covered later.

---

✅ Use visibility and mutability modifiers to **explicitly define your contract’s surface area**. It’s one of the most important security practices in Solidity.

---

## 🔄 Control Structures

Like most programming languages, Solidity supports control structures such as `if`, `else`, loops, and error handling.  
However, since every computation costs gas and security is paramount, it’s important to use them carefully.

---

### ✅ Conditional Logic: `if`, `else`, and `require`

```solidity
function withdraw(uint amount) external {
    require(balance[msg.sender] >= amount, "Insufficient funds");
    balance[msg.sender] -= amount;
    payable(msg.sender).transfer(amount);
}
```

- `require()` is used to validate conditions and **revert the transaction** if they fail.
- You can also use `if (...) { ... } else { ... }` like in most languages.

> 📌 `require()` is your first line of defense — it prevents invalid states and wasted gas.

---

### ❌ `revert()` and `assert()`

```solidity
function risky(uint value) public pure {
    if (value > 100) revert("Value too high");
    assert(value <= 100); // triggers on internal error
}
```

- `revert()` behaves like `require`, but gives you more control or lets you trigger **custom errors**.
- `assert()` should only be used to test **invariants** (conditions that should *never* fail).  
  If `assert()` fails, it indicates a bug — not just a failed condition.

---

### 🔁 Loops: `for`, `while`

```solidity
function sum(uint[] memory numbers) public pure returns (uint total) {
    for (uint i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
}
```

- Loops are supported but **must be used with extreme caution** in smart contracts.
- Unbounded loops can consume all the gas and make your contract unusable.

> ⚠️ Avoid loops over arrays stored in `storage`.  
> Prefer using loops on small, in-memory arrays or avoid them entirely.

---

### 🧭 `break` and `continue`

Just like in traditional languages:

- `break` exits the loop early
- `continue` skips the current iteration

Use them sparingly and only when they improve clarity or performance.

---

### 🔥 Best Practices

| Do | Avoid |
|----|-------|
| Use `require()` for all external inputs | Avoid unbounded `for` or `while` loops |
| Use `revert()` with custom errors for internal logic | Don’t rely on `assert()` for validation |
| Fail early and explicitly | Avoid deep nesting of control flow |

---

## ⚠️ Common Pitfalls

Even small mistakes in Solidity can lead to **costly bugs or vulnerabilities**. Below are some common pitfalls related to types, data handling, and control structures.

---

### 🔧 Forgetting Data Locations

For complex types like `string`, `bytes`, `array`, and `struct`, forgetting to specify `memory` or `calldata` will trigger a compilation error.

```solidity
// ❌ Compilation error
function greet(string name) public pure returns (string memory) {
    return name;
}

// ✅ Correct
function greet(string memory name) public pure returns (string memory) {
    return name;
}
```

---

### 💣 Overusing `assert`

`assert()` should never be used for input validation.  
Use `require()` for all user-facing checks.

```solidity
// ❌ Misuse of assert
assert(balance[msg.sender] >= amount);

// ✅ Correct
require(balance[msg.sender] >= amount, "Insufficient balance");
```

---

### 🌀 Gas-Heavy Loops

Looping over storage arrays can make your contract **fail** due to out-of-gas errors.

```solidity
// ❌ Dangerous if users can push unlimited data
for (uint i = 0; i < users.length; i++) {
    // costly iteration
}
```

> ⚠️ Always check that loops are bounded or move logic off-chain if iteration grows unbounded.

---

### 🧩 Uninitialized Structs or Arrays

Uninitialized structs will contain default values (`0`, `false`, `""`), which can cause subtle bugs if not handled.

---

### 🤷‍♂️ Default Visibility

If you forget to declare visibility on a function or variable, Solidity will assign a default (`internal`), which may not be what you intended.

> ✅ Always **explicitly declare** visibility: `public`, `private`, `external`, or `internal`.

---

Up next: a hands-on mini challenge where you’ll apply the concepts you’ve just reviewed.

## ⚒️ Mini Challenge – Create a Simple Task Manager

Build a minimal contract that allows users to create and update tasks using enums, structs, and require-based validation.

### 🎯 Requirements:

- Define a `Task` struct with:
  - `string description`
  - `Status status` (as an `enum`)
- Enum should have values: `Pending`, `InProgress`, `Completed`
- Add a function to create a new task (only if description is not empty)
- Add a function to update a task’s status (must validate sender)

```solidity
// 🧪 Start from this base
pragma solidity ^0.8.20;

contract TaskManager {
    enum Status { Pending, InProgress, Completed }

    struct Task {
        string description;
        Status status;
    }

    Task public task;

    function createTask(string calldata _description) external {
        // Add require and logic
    }

    function updateStatus(Status _newStatus) external {
        // Add logic to update task status
    }
}
```

---

### 💡 Tips

- Use `require()` to ensure `_description` is not empty.
- Make sure state changes are valid.
- Consider adding `view` or `pure` modifiers where applicable.

---

> ✅ Bonus: Add an event like `TaskCreated` or `StatusUpdated`.

---
---

## 🧠 Reflective Questions

> Try answering these before revealing the explanations. They’re designed to reinforce key concepts and help you apply them confidently.

---

### 1. Why is explicitly declaring data locations (`memory`, `storage`, `calldata`) important in Solidity?

<details>
<summary>💡 Reveal Answer</summary>

Each location has different behavior and cost.  
For reference types like `string`, `array`, or `struct`, Solidity requires an explicit data location.  
If omitted, it causes a compilation error.

- `storage` is persistent and expensive (writes cost gas).
- `memory` is temporary and mutable.
- `calldata` is temporary and **read-only**, ideal for inputs in `external` functions.

Misusing them can lead to unintended side effects or wasted gas.

</details>

---

### 2. When would you use `require()` versus `revert()`?

<details>
<summary>💡 Reveal Answer</summary>

- Use `require()` for simple validations (e.g., user inputs, balances).
- Use `revert()` for **complex conditions**, especially when combined with custom errors (`revert Unauthorized()`).

Custom errors + `revert()` are more gas efficient and more expressive for large codebases.

</details>

---

### 3. How can using loops introduce risks in smart contracts?

<details>
<summary>💡 Reveal Answer</summary>

Loops over large or dynamic data can run out of gas, **breaking your contract**.  
They are especially dangerous when iterating over `storage` arrays.

Instead:
- Limit loop length
- Use `mapping` for lookups
- Shift heavy computation off-chain

</details>

---

### 4. What are the consequences of forgetting function visibility?

<details>
<summary>💡 Reveal Answer</summary>

If visibility is not specified, Solidity defaults to `internal`.  
This may **prevent external calls**, especially for helper functions.

It also affects inheritance, unit testing, and modularity.  
✅ Always declare visibility explicitly: `public`, `private`, `internal`, or `external`.

</details>

---

### 5. Why use `enums` and `structs` instead of just primitive types?

<details>
<summary>💡 Reveal Answer</summary>

They improve **readability, organization, and safety**.  
- `enums` give names to states, avoiding error-prone magic numbers.
- `structs` group related data (e.g., a `User` with name, age, active status).

Useful in projects like task managers, auctions, voting systems, etc.

</details>

---


### 🔁 Navegación

<div style="display: flex; justify-content: space-between; margin-top: 2em;">
  <a class="btn" href="/Testing-Onboarding/modulo3-2">⬅️ Anterior</a>
  <a class="btn" href="/Testing-Onboarding/modulo3-4">Siguiente ➡️</a>
</div>

