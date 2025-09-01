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

<div class="module-progress"
     role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"
     data-scopes='["mod2-intro","mod2-evm","mod2-cuentas","mod2-gas","mod2-bloques","mod2-nodos","mod2-redes","mod2-layer2","mod2-exploradores","mod2-devtools","mod2-apps","mod2-gobernanza","mod2-staking","mod2-actividad","mod2-quiz"]
'>
  <div class="mp-header">
    <strong>Módulo 2: Progreso</strong>
    <span class="mp-percent" aria-live="polite">0%</span>
  </div>
  <div class="mp-bar"><div class="mp-bar-fill" style="width:0%"></div></div>
</div>

<div class="page-done" data-scope="mod2-evm" style="margin:.75rem 0 1.25rem">
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

<div style="display: flex; justify-content: space-between; margin-top: 2em;">
  <a class="btn" href="/Testing-Onboarding/modulo2/modulo2-intro-ethereum">⬅️ Anterior</a>
  <a class="btn" href="/Testing-Onboarding/modulo2/modulo2-cuentas">Siguiente ➡️</a>
</div>

