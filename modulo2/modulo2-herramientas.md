---
layout: page
title: "5.2. Herramientas de Desarrollo"
parent: "Módulo 2: Ethereum, Ecosistema y Herramientas"
nav_order: 10
---

# Development Tools

To build on Ethereum, you need the right tools, from wallets and IDEs to testing frameworks and APIs. In this section, you'll get familiar with the essential components used to interact with and build on the Ethereum network.

---

## 🧰 Key development tools

Here are some of the most widely used tools in the Ethereum ecosystem:

### 🦊 MetaMask
- A browser extension and mobile wallet
- Connects you to dApps and allows you to sign transactions
- Used to manage your Ethereum account (EOA)

👉 Learn more: [https://metamask.io](https://metamask.io)

---

### 🛠️ Remix IDE
- Web-based integrated development environment for writing, testing, and deploying smart contracts
- Supports Solidity, unit testing, and static analysis
- No installation required, perfect for beginners

👉 [Remix IDE](https://remix.ethereum.org)

---

### ⚙️ Hardhat
- A JavaScript/TypeScript framework for building and testing smart contracts locally
- Supports plugins, forking, scripting, debugging

👉 [Hardhat](https://hardhat.org)

---

### 🧪 Foundry
- A blazing-fast, Rust-based toolchain for Ethereum development
- Popular in advanced Solidity workflows and audits
- Includes `forge`, `cast`, and `anvil`

👉 [Foundry Book](https://book.getfoundry.sh/)

---

### 📡 RPC Providers (APIs)
You can interact with Ethereum via public or private endpoints:
- [Infura](https://infura.io)
- [Alchemy](https://www.alchemy.com)
- [QuickNode](https://www.quicknode.com)

These services let your app read/write to Ethereum without running your own node.

---

### 🔗 Libraries
Libraries simplify interacting with Ethereum through code:

- **Ethers.js**: Lightweight, modular JavaScript library  
- **Web3.js**: Older library still widely used  
- **Viem**: TypeScript-first, developer-friendly API (gaining adoption)

---

## 🔍 Other useful tools

- **Ganache**: Local test blockchain
- **OpenZeppelin Contracts**: Reusable smart contract standards
- **Tenderly**: Debugging and monitoring suite
- **IPFS / Filecoin**: For decentralized file storage

> 💡 Most of these tools can be combined in your workflow to support local dev, testnets, and mainnet deployments.

---

## ✅ What’s next?

You’re now equipped with knowledge of the core tools developers use on Ethereum.  
Next, let’s explore some **real-world applications** built on Ethereum, including dApps, NFTs, DAOs, and more.

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

<div class="page-done" data-scope="mod2-devtools" style="margin:.75rem 0 1.25rem">
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
  <a class="btn" href="/Testing-Onboarding/modulo2/modulo2-exploradores">⬅️ Anterior</a>
  <a class="btn" href="/Testing-Onboarding/modulo2/modulo2-aplicaciones">Siguiente ➡️</a>
</div>
