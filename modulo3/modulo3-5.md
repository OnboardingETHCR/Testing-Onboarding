---
layout: page
title: "5. Solidity Avanzado"
nav_order: 5
parent: "Módulo 3: Programando en Solidity"
---

# 🚀 Advanced Solidity

This section explores intermediate and advanced features in Solidity — the tools that power more robust and reusable smart contracts.

If you've completed sections 3.1 to 3.4, you already know how to write and test simple contracts. Now, you'll deepen your understanding with more expressive patterns and data types, including:

- `enum`, `struct`, and `mapping`
- Custom modifiers for logic reuse
- Inheritance and interfaces

These features are frequently used in real-world dApps and DeFi protocols. Mastering them will help you contribute to more complex Ethereum projects.

Let’s get started.

---

## 🧱 Advanced Data Types: `enum`, `struct`, and `mapping`

Solidity supports powerful user-defined types that make your contracts more expressive and readable.

These three are often used together to manage state, define models, and map data in more advanced contracts.

---

### 📦 `struct`

A `struct` lets you group variables under a single name — perfect for modeling custom data types like users, items, or records.

```solidity
struct Task {
    string description;
    bool completed;
}

Task public exampleTask = Task("Submit homework", false);
```

You can define arrays or mappings of structs:

```solidity
Task[] public tasks;
```

---

### 🧭 `enum`

An `enum` creates a custom set of named constants, making your code more readable and type-safe.

```solidity
enum Status { Pending, Approved, Rejected }
Status public currentStatus = Status.Pending;
```

Usage:

```solidity
function approve() public {
    currentStatus = Status.Approved;
}
```

---

### 🗺️ `mapping`

Mappings are key-value data structures used to store and retrieve values efficiently. They're the most common way to represent on-chain storage.

```solidity
mapping(address => uint) public balances;
```

More complex example:

```solidity
mapping(address => Task[]) public userTasks;
```

> ⚠️ Mappings do not support iteration or length tracking. They're only useful when you already know the key.

---

## 🧰 Custom Modifiers: Reusable Access Control

Modifiers let you **encapsulate conditions** and apply them to one or more functions.  
They are especially useful for access control, validations, or pre/post conditions.

---

### 🔒 Example: Only Admin Access

```solidity
address public admin;

modifier onlyAdmin() {
    require(msg.sender == admin, "Not authorized");
    _;
}
```

The underscore `_` is a **placeholder** for the body of the function that uses the modifier.

---

### 🧪 Applying the Modifier

```solidity
function deleteData() public onlyAdmin {
    // This logic runs only if msg.sender == admin
}
```

You can combine multiple modifiers:

```solidity
function update() public onlyAdmin whenNotPaused {
    // Logic here
}
```

> 💡 Use modifiers to make your code DRY (Don't Repeat Yourself) and more readable.

---

## 🧬 Inheritance and Interfaces

Inheritance allows contracts to extend the behavior of other contracts. It's a core part of Solidity’s object-oriented design.

---

### 🧭 Inheritance

A contract can inherit variables and functions from a parent contract.

```solidity
contract Base {
    function greet() public pure returns (string memory) {
        return "Hello from Base";
    }
}

contract Child is Base {
    function greetFromChild() public pure returns (string memory) {
        return greet(); // inherited from Base
    }
}
```

You can override functions using the `override` and `virtual` keywords:

```solidity
contract A {
    function get() public pure virtual returns (string memory) {
        return "A";
    }
}

contract B is A {
    function get() public pure override returns (string memory) {
        return "B";
    }
}
```

---

### 🧩 Interfaces

An `interface` defines a contract’s expected behavior without implementation. Interfaces:

- Only contain function signatures (no logic)
- Cannot have state variables
- Are used to **interact with other contracts**

```solidity
interface IGreeter {
    function greet() external view returns (string memory);
}

contract Greeter is IGreeter {
    function greet() external pure override returns (string memory) {
        return "Hello!";
    }
}
```

> ✅ Interfaces are great for interacting with contracts you don't own, such as DeFi protocols.

---

---

## 🧠 Reflective Questions

Try to answer these before expanding the answers.  
They are designed to help you test your understanding of more advanced Solidity features.

---

### 1. When would you use a `struct` instead of multiple variables?

<details>
<summary>💡 Reveal Answer</summary>

Use a `struct` when you want to group related data into a single logical unit — for example, a `User` or `Task`.  
This makes your code cleaner and easier to manage, especially in arrays or mappings.

</details>

---

### 2. Why are `mappings` not iterable?

<details>
<summary>💡 Reveal Answer</summary>

Mappings are implemented as hash tables with no internal ordering or storage of keys.  
Solidity does not store keys in mappings, so you cannot loop through them. You must track keys separately.

</details>

---

### 3. How do modifiers improve code quality and security?

<details>
<summary>💡 Reveal Answer</summary>

Modifiers help you avoid code duplication by centralizing checks like access control or preconditions.  
They also reduce the risk of forgetting critical validations, since the logic is defined once and reused consistently.  
This improves both **readability** and **security** in your contracts.

</details>


---

### 4. What's the difference between inheritance and interfaces?

<details>
<summary>💡 Reveal Answer</summary>

Inheritance allows a contract to reuse both **code and logic** from another contract.  
Interfaces only define **function signatures** — they do not contain logic and are used for contract interoperability.

</details>

---

### 🔁 Navigation

<div style="display: flex; justify-content: space-between; margin-top: 2em;">
  <a class="btn" href="/Testing-Onboarding/modulo3/modulo3-4">⬅️ Anterior</a>
  <a class="btn" href="/Testing-Onboarding/modulo3/modulo3-cheatsheet">Siguiente ➡️</a>
</div>
