---
layout: page
title: "1. Introducción a las dApps"
parent: "Módulo 4: Desarrollo de Aplicaciones Web3"
nav_order: 1
---

# Introduction to dApps

Before writing a single line of code, it's essential to understand what you're about to build and why.

Decentralized Applications, or **dApps**, are the heart of Web3. They combine smart contracts deployed on a blockchain with frontend interfaces that allow users to interact with those contracts in a secure, transparent, and permissionless way.

In this section, you'll explore the core concepts behind dApps, how they differ from traditional web apps, and what their architecture looks like. This foundational knowledge will guide your thinking as you begin to build.

---

## 🌐 What is a dApp?

A **decentralized application (dApp)** is a software application that runs on a blockchain network instead of a centralized server. While the frontend may look and behave like any modern web app, the backend logic, the core business rules and data, are handled by smart contracts on a decentralized network.

**Key characteristics:**

- ✅ Backend logic executed by **smart contracts** on Ethereum.
- ✅ Data is transparent and stored **on-chain** or through decentralized storage.
- ✅ Users **authenticate via wallets** (e.g., MetaMask), not passwords.
- ✅ No central authority can modify or shut down the application.

---

## 🔄 Web2 vs Web3: What's Different?

| Aspect                | Web2 Application                      | Web3 dApp                                   |
|-----------------------|----------------------------------------|---------------------------------------------|
| **Authentication**    | Email + Password                       | Wallet signature (e.g., MetaMask)           |
| **Backend**           | Hosted API or database                 | Smart contracts on Ethereum                 |
| **Infrastructure**    | Centralized (AWS, Heroku, etc.)        | Decentralized (EVM + IPFS/Swarm/etc.)      |
| **Data Ownership**    | Company owns the data                  | User controls and owns their data           |
| **Updates**           | Server-side updates                    | On-chain logic is immutable (upgradeable via proxy patterns) |

---

## 🏗 dApp Architecture Overview

A typical Ethereum dApp consists of the following components:

```
+-------------------+        +-------------------------+
|    Frontend App   | <--->  |  Wallet (e.g. MetaMask) |
+-------------------+        +-------------------------+
        |                             |
        |    JSON-RPC / Ethers.js     |
        v                             v
+---------------------------------------------+
|     Ethereum Smart Contracts (EVM)          |
+---------------------------------------------+
```

- **Frontend**: Built using React, Vue, or similar. Deployed via IPFS or hosted server.
- **Wallet**: Connects the user to the blockchain. Signs transactions.
- **Ethers.js**: JavaScript library to connect frontend to smart contracts.
- **Smart Contracts**: Contain core business logic. Immutable once deployed.

---

## 🔍 Real Example: How Does a dApp Work in Practice?

Let’s take a simplified version of a token swap app like **Uniswap**:

- The **frontend** displays the UI where the user selects tokens to swap.
- The **wallet** (e.g., MetaMask) connects and signs the swap transaction.
- The frontend uses **Ethers.js** to call the `swap()` function of a smart contract.
- The smart contract executes the trade logic and emits an event.

Each layer is crucial and has its own responsibilities, as a Web3 developer, you’ll be working across all of them.

---

## ❌ Common Misconceptions

- "Everything is stored on the blockchain" → ❌ Most dApps store only essential data on-chain.
- "There is no backend in Web3" → ❌ dApps often use off-chain services (indexers, APIs, etc.).
- "You can't upgrade smart contracts" → ✅ You can use proxy patterns (but with care).

Understanding these early will help you avoid bad design decisions later.

---

## 🧠 Reflect

**1. How is user identity managed differently in dApps?**
<details>
<summary>💡 Show answer</summary>
In dApps, identity is tied to the wallet address, and authentication occurs through digital signatures. There are no usernames or passwords stored on a centralized server.
</details>

**2. What trade-offs do we face when designing decentralized systems?**
<details>
<summary>💡 Show answer</summary>
Decentralized systems offer security and transparency but come with higher complexity, limited upgradeability, potential performance issues, and reliance on blockchain fees.
</details>

**3. Which components would you need to build a basic voting dApp?**
<details>
<summary>💡 Show answer</summary>
You’d need: (1) a frontend (e.g., React), (2) a smart contract to manage proposals and votes, (3) wallet integration for user authentication and transactions, and (4) a testnet or mainnet to deploy the contract.
</details>

---

## 🚀 What’s Next?

Now that you understand how dApps work, it's time to start building your own. In the next section, you’ll create the foundation of your frontend with React and Vite.

---

### 🔁 Navegación

<div style="display: flex; justify-content: flex-end; margin-top: 2em;">
  <a class="btn" href="/Testing-Onboarding/modulo4/modulo4-2">Siguiente ➡️</a>
</div>

