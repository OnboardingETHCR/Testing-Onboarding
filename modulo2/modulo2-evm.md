---
layout: page
title: "2. Ethereum Virtual Machine (EVM)"
parent: "Módulo 2: Ethereum, Ecosistema y Herramientas"
nav_order: 2
---

# Ethereum Virtual Machine (EVM)

The **Ethereum Virtual Machine (EVM)** is the decentralized computation engine that powers Ethereum.  
It ensures that every smart contract and transaction is executed in a consistent and secure way across all nodes in the network.  
You can think of it as the *brain of Ethereum*, where all code is processed, gas is consumed, and states are updated.

To help you visualize how it works, watch the following video:

## 📺 Video: Introduction to the EVM

<iframe width="100%" height="415" src="https://www.youtube.com/embed/sTOcqS4msoU" 
title="EVM Explained" frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[🔗 Watch on YouTube](https://www.youtube.com/watch?v=sTOcqS4msoU){:target="_blank"}


---

## 💡 What is the EVM?

The EVM is a global, deterministic computing environment that:

- 📦 Executes smart contract bytecode
- 🧮 Computes every transaction across the entire network
- 🔐 Runs in isolation (sandboxed) to protect the network

It ensures that **every Ethereum node** processes transactions the same way — regardless of where it runs.

---

## ⚙️ How does it work?

Smart contracts written in high-level languages like Solidity are **compiled into bytecode**, which is executed by the EVM.

Key technical features:

- ✅ **Deterministic execution**: Same input = same output on every node
- ⛽ **Gas metering**: Every operation has a cost, preventing abuse (e.g. infinite loops)
- 🧱 **Stack-based architecture**: Executes code via a virtual stack

All this happens under the hood, ensuring trustless computation without third-party intervention.

> 📘 Want to dive deeper into how gas works and how it affects smart contract execution?  
> We'll explore it further in the upcoming section on [Gas and Transactions](modulo2-gas.md).

---

## 🧠 Why does it matter?

The EVM is what makes Ethereum *programmable*. Without it, Ethereum would be a simple value-transfer network like Bitcoin.

Thanks to the EVM, developers can:

- Deploy smart contracts
- Create decentralized apps (dApps)
- Launch tokens, DAOs, games, marketplaces, and more

---

## 🔗 EVM compatibility

Many other blockchain networks (like Polygon, Avalanche C-Chain, Arbitrum, and Optimism) are **EVM-compatible**. This means:

- You can deploy the same smart contract on multiple chains
- You can use the same development tools (e.g., Remix, Hardhat)
- Wallets like MetaMask work across these networks

This cross-compatibility is a major reason for Ethereum’s wide adoption and thriving ecosystem.

---

## ✅ What’s next?

In the next section, you’ll learn about **Ethereum accounts**, the building blocks that users and contracts use to interact with the network.

---

### 🔁 Navegación

<div style="display: flex; justify-content: space-between; margin-top: 2em;">
  <a class="btn" href="/Testing-Onboarding/modulo2/modulo2-intro-ethereum">⬅️ Anterior</a>
  <a class="btn" href="/Testing-Onboarding/modulo2/modulo2-cuentas">Siguiente ➡️</a>
</div>

