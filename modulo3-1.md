---

layout: page
title: "Fundamentos de Solidity"
nav_order: 1
parent: "Módulo 3: Programando en Solidity"


---

## 🧠 What is Solidity?

Solidity is a high-level, statically-typed, contract-oriented programming language designed specifically for building smart contracts on Ethereum. Created in 2014 by Gavin Wood, it is the most widely adopted language in the Ethereum ecosystem.

Solidity allows developers to encode business logic into self-executing contracts that live on the blockchain. These contracts can store data, enforce rules, and trigger actions — all without relying on a central authority.

Solidity is inspired by several familiar languages such as **C++**, **JavaScript**, and **Python**, making it easier for developers with prior experience in those languages to get started. However, unlike general-purpose programming, Solidity is tightly coupled to Ethereum’s **execution model**, **gas mechanics**, and **security assumptions**, which makes it a unique domain-specific language.

It is compiled to **EVM bytecode**, which is executed by every Ethereum node in a decentralized and deterministic manner.

Solidity is best suited for:

- Developing decentralized applications (dApps)
- Creating ERC-20 and ERC-721 tokens
- Building DAOs, DeFi protocols, and NFT marketplaces
- Writing reusable components via interfaces and libraries

## 🕰️ History and Purpose

Solidity was proposed in 2014 by **Dr. Gavin Wood**, one of Ethereum’s co-founders and the author of the Ethereum Yellow Paper. The language was developed to meet the need for a contract-oriented language capable of expressing complex program logic on a decentralized, trustless network.

The Ethereum team recognized early on that developers would need a simple, expressive way to build smart contracts — programs that execute exactly as written, without relying on centralized servers.

The Solidity language has since evolved under the stewardship of the **Solidity team at the Ethereum Foundation**, with regular updates and community contributions. It has become the **de facto standard** for building smart contracts on Ethereum and many **EVM-compatible** chains like Base, Arbitrum, Avalanche, Polygon, and Optimism.

### ✨ Why Solidity?

Solidity was designed with the following goals:

- ✅ Be familiar to developers from C-style backgrounds (e.g., JavaScript, C++, Java)
- ✅ Enable **fine-grained control** over data structures, function visibility, and access control
- ✅ Integrate tightly with the Ethereum Virtual Machine (EVM)
- ✅ Offer a modular and extensible language for rapid dApp innovation
- ✅ Support complex interactions between contracts, with event logs, function modifiers, and fallback logic

Solidity is constantly evolving, with improvements in **readability**, **security**, **gas optimization**, and **developer tooling**.

## 🔄 General Comparison with Other Languages

While Solidity is the most widely used language for writing smart contracts on Ethereum, it's not the only one. Understanding how it compares to alternatives like **Vyper**, **Yul**, or traditional languages such as **Python** or **JavaScript** can help clarify its purpose and design choices.

### Solidity vs Traditional Languages

| Feature                   | Solidity                          | JavaScript / Python / C++           |
|--------------------------|------------------------------------|--------------------------------------|
| Runtime                  | Ethereum Virtual Machine (EVM)     | Local CPU                            |
| Execution cost           | Gas fees (paid in ETH)             | Free                                 |
| State persistence        | Blockchain storage (public, costly)| Local memory or databases            |
| Determinism              | Strictly deterministic             | Often non-deterministic              |
| Concurrency              | Not allowed (single-threaded EVM)  | Multithreaded possible               |
| Security model           | Trustless, permissionless          | Centralized runtime enforcement      |
| Data visibility          | Everything on-chain is public      | Local/private unless shared          |
| Function calls           | Can trigger new transactions       | Limited to local calls               |

Solidity is **domain-specific** — it's designed specifically for programming logic that will be deployed on-chain, not for general-purpose backend or frontend applications.

### Solidity vs Other Smart Contract Languages

| Language | Highlights                                  | Status         |
|----------|---------------------------------------------|----------------|
| **Solidity** | C-style syntax, most supported, full-featured | Mainstream     |
| **Vyper**    | Python-like, focused on security and simplicity | Stable         |
| **Yul**      | Low-level intermediate language, gas efficient | Advanced users |
| **Fe**       | Rust-inspired experimental language          | In development |

💡 In this course, we’ll focus entirely on **Solidity**, as it is the most used and best supported language in the Ethereum ecosystem.


## ✍️ Basic Syntax in Solidity

Solidity uses a **curly-bracket syntax** similar to C++, JavaScript, or Java. A Solidity file is composed of several components that define the structure and logic of a smart contract.

### 🔹 File Structure Overview

A typical Solidity file contains:

- A license identifier (for open-source declarations)
- A version pragma (to enforce compiler compatibility)
- Contract definitions
- Functions and state variables
- Optional: events, errors, modifiers, structs, enums

Example layout:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract HelloWorld {
    string public message;

    constructor(string memory _message) {
        message = _message;
    }

    function update(string memory _newMessage) public {
        message = _newMessage;
    }
}
```

### 🧱 Key Elements in a Simple Contract

| Element       | Purpose                                             |
|---------------|-----------------------------------------------------|
| `SPDX`        | Declares license for source transparency            |
| `pragma`      | Ensures compatibility with a specific compiler      |
| `contract`    | Main building block — similar to a class in OOP     |
| `state vars`  | Variables stored permanently on the blockchain      |
| `constructor` | Initialization function when contract is deployed   |
| `function`    | Encapsulates logic — can read/write contract state  |

---

### 🔠 Common Data Types

Solidity supports familiar types, but with Ethereum-specific behavior.

| Type       | Description                      | Example                       |
|------------|----------------------------------|-------------------------------|
| `uint256`  | Unsigned integer                 | `uint256 count = 1;`          |
| `bool`     | Boolean flag                     | `bool isActive = true;`       |
| `address`  | Ethereum wallet/contract         | `address owner = msg.sender;`|
| `string`   | UTF-8 encoded text               | `string name = "Alice";`      |

### 📦 Visibility Keywords

Solidity uses explicit visibility for functions and variables:

| Keyword     | Who can access it?                             |
|-------------|-------------------------------------------------|
| `public`    | Anyone — including other contracts and users    |
| `private`   | Only this contract                              |
| `internal`  | This contract and contracts inheriting it       |
| `external`  | Only external accounts or contracts             |

---

✅ Solidity is strict with types and visibility, which improves security and reduces ambiguity — but it also requires the developer to be very clear about their intent.

> ℹ️ *We’ll explore a more complete contract structure in the next section.*
---

## 🚀 Your First Smart Contract

Let’s walk through a simple yet functional smart contract in Solidity.

This contract will allow users to store and retrieve a message — a classic “Hello World” example adapted to a blockchain context.

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/// @title HelloWorld - A simple message storage contract
contract HelloWorld {
    
    // State variable — stored permanently on-chain
    string public message;

    /// Constructor runs only once when the contract is deployed
    constructor(string memory _initialMessage) {
        message = _initialMessage;
    }

    /// Read-only function — returns the stored message
    function getMessage() public view returns (string memory) {
        return message;
    }

    /// Write function — updates the message (modifies blockchain state)
    function updateMessage(string memory _newMessage) public {
        message = _newMessage;
    }
}
```
You can deploy and test this contract in Remix:

[👉 Open in Remix](https://remix.ethereum.org/#url=https://onboardingethcr.github.io/Testing-Onboarding/contracts/HelloWorld.sol){:target="_blank" .btn}

---

### 🔍 What’s happening here?

* `string public message`: Creates a public variable — Solidity automatically generates a getter.
* `constructor`: Sets the initial message upon deployment.
* `getMessage`: A **view** function, meaning it does not change state and consumes no gas when called externally.
* `updateMessage`: A **write** function that modifies the blockchain, requiring a transaction (and gas).

---

### 💡 Key Learning

Unlike traditional applications, smart contracts:

* Store state **permanently** on-chain
* Are **immutable** once deployed (unless specifically designed to be upgradeable)
* Are **transparent** and auditable by anyone

You can deploy and test this contract in [Remix IDE](https://remix.ethereum.org/) — a browser-based Solidity editor.

```

---

## 🧠 Reflective Questions

> Take a moment to reflect before revealing the answers. These are not absolute truths — but rather key insights to guide your understanding.

---

### 1. Why does Solidity require developers to explicitly declare data types and visibility?

<details>
<summary>💡 Reveal Answer</summary>

Solidity is a statically-typed language that prioritizes **clarity, security, and predictability**. Explicit types prevent ambiguity and help the compiler catch errors early. Visibility (`public`, `private`, etc.) is crucial in a decentralized environment because **accidentally exposing a function or variable could result in loss of funds or security breaches**.

</details>

---

### 2. What is the difference between a `view` and a `pure` function?

<details>
<summary>💡 Reveal Answer</summary>

- `view`: can read **state variables**, but cannot modify them.
- `pure`: **cannot read or modify** any state — it uses only input arguments and internal logic.

These distinctions help manage **gas efficiency**, security, and clarity in how contracts interact with the blockchain.

</details>

---

### 3. What does it mean for a smart contract to be *deterministic*?

<details>
<summary>💡 Reveal Answer</summary>

A deterministic contract produces the **same output given the same inputs, across all nodes**. This is vital in Ethereum because every node must **reach consensus** — all must produce the same result to validate a transaction. Non-determinism could break consensus and threaten the entire network.

</details>

---

### 4. How does your mindset change knowing your code is immutable and public?

<details>
<summary>💡 Reveal Answer</summary>

It encourages **rigorous testing, caution, and transparency**. There's no "hotfix" once deployed — every mistake costs gas and reputation. It also changes how developers handle **security, naming, and documentation**, knowing that **anyone can read and interact** with the contract indefinitely.

</details>

---

### 5. What differences between Solidity and other languages might lead to mistakes?

<details>
<summary>💡 Reveal Answer</summary>

Solidity introduces concepts like `storage` vs `memory`, gas costs, immutability, and visibility that **don't exist in most traditional languages**. Developers used to dynamic or garbage-collected languages may struggle with **manual data location handling** and the cost of each instruction. Forgetting visibility defaults or misunderstanding `msg.sender` can lead to critical vulnerabilities.

</details>

---

### 🔁 Navegación

<div style="display: flex; justify-content: flex-end; margin-top: 2em;">
  <a class="btn" href="/Testing-Onboarding/modulo3-2">Siguiente ➡️</a>
</div>




