---

layout: page
title: "1. Fundamentos de Solidity"
nav_order: 1
parent: "Módulo 3: Programando en Solidity"

---

# 🧱 Solidity Fundamentals

Welcome to your first deep dive into Solidity, the primary programming language used to build smart contracts on Ethereum. Since you’ve completed Modules 1 and 2, you already understand the foundations of blockchain and Ethereum. Now it’s time to learn how to express logic directly on-chain.

This section is all about understanding the **language fundamentals** that power decentralized applications (dApps). We’ll explore:

- What Solidity is and why it was created
- Basic syntax and structure
- Core data types and functions
- How to read and write your first smart contract

By the end of this section, you’ll be able to explain what Solidity is, recognize its key components, and start modifying simple contracts using Remix.

Let’s begin!

---

## ❓ What is Solidity and Why It Matters

Solidity is a high-level, statically-typed, contract-oriented programming language designed specifically for building smart contracts on Ethereum. Created in 2014 by Gavin Wood, it is the most widely adopted language in the Ethereum ecosystem. 

Solidity is inspired by several familiar languages such as **C++**, **JavaScript**, and **Python**, making it easier for developers with prior experience in those languages to get started. However, unlike general-purpose programming, Solidity is tightly coupled to Ethereum’s **execution model**, **gas mechanics**, and **security assumptions**, which makes it a unique domain-specific language.

Solidity is:

- 🛠️ **Statically typed** : every variable must declare its type
- 💻 **Contract-oriented** : each file defines a smart contract (like a mini backend)
- 🧱 **Storage-aware** : managing memory and storage explicitly matters
- 🔒 **Security-focused** : mistakes are irreversible, so code must be precise

It compiles into **EVM bytecode**, low-level instructions executed by the Ethereum Virtual Machine.

---

### 🧠 Why learn Solidity?

Because Solidity is:
- The **standard** for building on Ethereum (and compatible chains)
- A **gateway** to building Web3 applications (DeFi, NFTs, DAOs, etc.)
- In-demand across the blockchain ecosystem
- A bridge between traditional coding and decentralized infrastructure

---

### 🔁 How is it different from other languages?

| Feature         | Solidity                  | JavaScript / Python              |
|----------------|---------------------------|----------------------------------|
| Execution       | On-chain (Ethereum)       | On browser or server             |
| Visibility      | Must declare (`public`, `private`) | Implicit                         |
| Data Storage    | `storage`, `memory`, `calldata` | Mostly abstracted                |
| Gas & Cost      | Every operation costs ETH | Free computation                 |
| Errors          | `require`, `revert`, `assert` | `throw`, `try-catch`             |

---

> 🧪 Solidity is **not** beginner-friendly like Python, but it’s focused, powerful, and domain-specific.  

---

## 🧠 Language Philosophy

Solidity was designed for a very specific and unforgiving environment: the **blockchain**.  
Unlike traditional apps, smart contracts are:

- 🧱 **Immutable** : once deployed, their code cannot be changed
- 🕒 **Permanent** : the state they write remains forever on-chain
- ⚖️ **Transparent** : all users can inspect and interact with them
- 💸 **Cost-sensitive** : every operation consumes gas (ETH)

This changes everything about how we program:

- There’s no backend server, **the contract is the backend**
- There’s no database, **state is stored on the blockchain**
- Bugs can’t be patched, **you must get it right the first time**

---

### 🔐 Solidity prioritizes:

- **Security** over convenience
- **Explicitness** over automation
- **Minimalism** over abstraction

If you've used high-level languages like JavaScript or Python, Solidity might feel strict or verbose, but that’s intentional.

> 💡 Smart contracts handle money. Solidity helps you make that safe by design.

---

## 🧱 Basic Solidity File Structure

Every Solidity contract file follows a clear and rigid structure.  
Let’s break down the essential components you’ll see in almost every contract:

---

### 📂 Minimum structure

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract HelloWorld {
    string public message = "Hello Web3!";
}
```

---

### 🧩 Line by line explained

| Line                                | Purpose                                                                 |
|-------------------------------------|-------------------------------------------------------------------------|
| `// SPDX-License-Identifier`        | Declares the open-source license. Required by many compilers.          |
| `pragma solidity ^0.8.20;`          | Sets the version of Solidity this code is compatible with.             |
| `contract HelloWorld { ... }`      | Defines a smart contract named `HelloWorld`.                           |
| `string public message = ...;`     | Declares a public variable stored on-chain.                            |

> 📌 `public` automatically generates a getter function in Solidity.

---

### ⚠️ Versioning with `pragma`

Solidity evolves fast. The line `^0.8.20` means:
- ✅ Compatible with version 0.8.20 and above
- ❌ But NOT 0.9.0 or higher (major versions are breaking)

Always check the current version on [soliditylang.org](https://docs.soliditylang.org).

---

### 📁 A typical file layout may include:

| Block               | Role                                         |
|---------------------|----------------------------------------------|
| SPDX License        | Legal declaration                            |
| Pragma              | Version guard                                |
| Contract declaration| Where your logic lives                       |
| State variables     | Persistent data stored on-chain              |
| Constructor         | One-time setup logic                         |
| Functions           | Behavior and interaction                     |
| Events              | Logging and frontend triggers                |
| Errors              | Custom, gas-efficient error handling         |

---

## 🧪 Your First Contract – HelloWorld.sol

Let’s walk through a complete smart contract, one that stores and updates a message on the blockchain.

---

### ✅ The contract

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract HelloWorld {
    string private message;

    constructor(string memory _message) {
        message = _message;
    }

    function readMessage() public view returns (string memory) {
        return message;
    }

    function updateMessage(string calldata _newMessage) public {
        message = _newMessage;
    }
}
```

You can deploy and test this contract in Remix, the web-based IDE for Ethereum smart contracts.

[👉 Open in Remix](https://remix.ethereum.org/#url=https://onboardingethcr.github.io/Testing-Onboarding/contracts/HelloWorld.sol){:target="_blank" .btn}

---

### 🧩 Explanation

| Component                  | What it does                                                                 |
|---------------------------|-------------------------------------------------------------------------------|
| `string private message;` | Stores the message (not directly accessible from outside)                     |
| `constructor(...)`        | Runs once when the contract is deployed; initializes the message              |
| `readMessage()`           | Public read-only function that returns the message                            |
| `updateMessage()`         | Public write function that updates the message                               |
| `string memory / calldata`| Specifies data location (we'll cover this more deeply soon)                   |

> 💡 Every function you call uses gas (ETH), even if you’re just updating a string!

---

## 🔢 Common Types in Solidity

Solidity supports a variety of types, both simple (like `uint` and `bool`) and complex (like `arrays`, `structs`, and `mappings`).  
For now, let’s focus on the **core types** you’ll use in almost every contract.

---

### 📌 Basic Types

| Type        | Description                               | Example                        |
|-------------|-------------------------------------------|--------------------------------|
| `uint`      | Unsigned integer (default: 256 bits)      | `uint age = 30;`               |
| `bool`      | Boolean value                             | `bool isActive = true;`        |
| `address`   | Ethereum address (wallet or contract)     | `address owner = msg.sender;`  |
| `string`    | Dynamic UTF-8 encoded text                | `string name = "Alice";`       |
| `bytes32`   | Fixed-size byte array (32 bytes)          | `bytes32 id = keccak256(...);` |

> 🧠 Solidity has no floating point numbers (`float`, `double`). Use integers and scale manually (e.g. `amount * 10**18`).

---

### 🔄 Data Types in Action

```solidity
address public admin;
uint public counter = 1;
bool public isActive = true;
string public greeting = "Hello!";
```

These variables will be stored **on-chain** and are readable by anyone, thanks to the `public` keyword.

Later, we’ll explore more complex types like `arrays`, `enums`, `structs`, and `mapping`, but this is enough to get started.

---

## 🧠 Reflective Questions

> Try to answer each question yourself before expanding the answer. These reflections are meant to reinforce your understanding and uncover any confusion.

---

### 1. Why does Solidity require explicit data types like `string memory`?

<details markdown="1">
<summary>💡 Reveal Answer</summary>

Solidity runs in a low-level environment (the EVM), where memory management is manual and explicit.  
Types like `string`, `array`, or `struct` need a **data location** (`memory`, `storage`, or `calldata`) to tell the compiler where the data lives and how it should be handled.

If omitted, the compiler throws an error, this prevents bugs and improves gas efficiency.

</details>

---

### 2. What’s the difference between `public` and `private` in Solidity?

<details markdown="1">
<summary>💡 Reveal Answer</summary>

- `public` variables and functions can be accessed from **anywhere**, including external users and other contracts.  
- `private` members are only accessible **within the contract itself**, not even by derived contracts.

Marking visibility explicitly helps secure your logic and control who can read or change data.

</details>

---

### 3. Why is `constructor()` important in a smart contract?

<details markdown="1">
<summary>💡 Reveal Answer</summary>

The constructor runs **only once**, when the contract is deployed.  
It’s the ideal place to set initial values, such as assigning the `owner`, setting a message, or configuring access control.

After deployment, it can never be called again.

</details>

---

### 4. What’s the purpose of `view` and `pure` functions?

<details markdown="1">
<summary>💡 Reveal Answer</summary>

- `view` functions can **read** state variables but cannot modify them.  
- `pure` functions **cannot read or write** any state, they work only with inputs and internal logic.

These modifiers signal intent to the compiler and to users, and they don’t cost gas when called externally.

</details>

---

### 5. Why are contracts in Solidity often short and modular?

<details markdown="1">
<summary>💡 Reveal Answer</summary>

Because **each operation costs gas**, and **upgradability is limited**.  
Short, focused contracts reduce cost, risk, and make auditing easier.  
Modular design also enables reuse via libraries or inheritance, improving maintainability.

</details>

---

<div class="module-progress"
     role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"
     data-scopes='["mod3-fundamentos","mod3-anatomia","mod3-tipos","mod3-librerias","mod3-avanzado","mod3-cheatsheet","mod3-actividad"]

'>
  <div class="mp-header">
    <strong>Módulo 3: Progreso</strong>
    <span class="mp-percent" aria-live="polite">0%</span>
  </div>
  <div class="mp-bar"><div class="mp-bar-fill" style="width:0%"></div></div>
</div>

<div class="page-done" data-scope="mod3-fundamentos" style="margin:.75rem 0 1.25rem">
  <label class="pd-label">
    <input type="checkbox">
    <span class="pd-text">Marcar esta página como completada</span>
  </label>
</div>

<style>
  .module-progress{background:#fff;border:1px solid #e5e7eb;border-radius:12px;padding:1rem;margin:1rem 0;box-shadow:0 1px 2px rgba(0,0,0,.04)}
  .mp-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:.5rem;color:#374151;font-weight:600}
  .mp-percent{color:#6b7280;font-weight:600}
  .mp-bar{height:12px;background:#e5e7eb;border-radius:999px;overflow:hidden}
  .mp-bar-fill{height:100%;width:0;transition:width .25s ease;background:#22c55e}
  .pd-label{font-weight:600;color:#374151}
  .pd-help{color:#6b7280;font-size:.875rem;display:block;margin-top:.25rem}
</style>

<script defer src="{{ '/assets/js/progreso.js?v=1.2' | relative_url }}"></script>

---

### 🔁 Navegación

<div style="display: flex; justify-content: flex-end; margin-top: 2em;">
  <a class="btn" href="/Testing-Onboarding/modulo3/modulo3-2">Siguiente ➡️</a>
</div>
