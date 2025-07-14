---

layout: page

title: "Fundamentos de Solidity"

nav\_order: 1

parent: "Módulo 3: Programando en Solidity"

has\_toc: false

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

### 🧱 Anatomy Breakdown

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

<a class="remix-link reference external" 
   href="https://remix.ethereum.org/#code=//%20SPDX-License-Identifier%3A%20MIT%0Apragma%20solidity%20%5E0.8.20%3B%0A%0A///%20%40title%20HelloWorld%20-%20A%20simple%20message%20storage%20contract%0Acontract%20HelloWorld%20%7B%0A%0A%20%20%20%20string%20public%20message%3B%0A%0A%20%20%20%20constructor(string%20memory%20_initialMessage)%20%7B%0A%20%20%20%20%20%20%20%20message%20%3D%20_initialMessage%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20function%20getMessage()%20public%20view%20returns%20(string%20memory)%20%7B%0A%20%20%20%20%20%20%20%20return%20message%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20function%20updateMessage(string%20memory%20_newMessage)%20public%20%7B%0A%20%20%20%20%20%20%20%20message%20%3D%20_newMessage%3B%0A%20%20%20%20%7D%0A%7D&lang=en&compiler=0.8.20" 
   target="_blank">
   👉 Open in Remix
</a>


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



⬅️ \[Back to Module 3](modulo3.md) | \[Next section 



