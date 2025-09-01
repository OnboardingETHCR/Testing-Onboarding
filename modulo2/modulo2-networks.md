---
layout: page
title: "4.2. Redes de Ethereum"
parent: "Módulo 2: Ethereum, Ecosistema y Herramientas"
nav_order: 7
---

# Redes de Ethereum

Ethereum runs on multiple networks, each with its own use case, purpose, and level of security. Understanding these networks is essential for development, testing, and interacting with Ethereum safely.

---

## 🌐 What is a network?

A **network** is a version of the Ethereum blockchain that follows the same rules but operates independently. All Ethereum networks use the same protocol, but have separate histories and data.

---

## 🔒 Mainnet

**Mainnet** is the primary Ethereum network, the one where real assets live and transactions are final.

- 🟢 Real ETH and tokens
- 🧠 Smart contracts with real value
- ⚠️ Mistakes can’t be reversed
- 📈 Highest level of decentralization and security

Most dApps and users interact with Mainnet when using Ethereum for real use cases.

---

## 🧪 Testnets

**Testnets** are Ethereum networks used for development and experimentation. They simulate the behavior of Mainnet, but use fake ETH and have no real financial value.

Common testnets include:

| Testnet   | Purpose                          | Faucet                           |
|-----------|----------------------------------|----------------------------------|
| **Sepolia** | Default testnet, most widely supported | [sepoliafaucet.com](https://sepoliafaucet.com) |
| **Holesky** | Validator testing, staking tools     | Faucet under development         |
| **Goerli**  | Being deprecated                 | N/A                              |

> 💡 Testnets let you test smart contracts and dApps safely before deploying to Mainnet.

---

## 🤝 EVM-Compatible Chains

There are also **Layer 1** blockchains that are compatible with the Ethereum Virtual Machine (EVM). Examples:

- Polygon
- Avalanche C-Chain
- BNB Chain
- Fantom
- Gnosis

These networks support Ethereum tools and languages like Solidity, but have their own validators and rules.

---

## 🧭 Switching networks in your wallet

Most wallets like MetaMask allow you to:

- 🔄 Switch between Mainnet and testnets
- ➕ Add custom RPC networks (like Arbitrum or Polygon)
- 🔐 Keep accounts while changing networks

This flexibility is essential for developers and users interacting with multiple environments.

> ⚠️ Always double-check the network you're on before sending transactions or deploying contracts.

---

## ✅ What’s next?

Next, we’ll explore **Layer 2 solutions**, which help Ethereum scale by processing transactions off-chain while preserving security.

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

<div class="page-done" data-scope="mod2-redes" style="margin:.75rem 0 1.25rem">
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
  <a class="btn" href="/Testing-Onboarding/modulo2/modulo2-nodos-clientes">⬅️ Anterior</a>
  <a class="btn" href="/Testing-Onboarding/modulo2/modulo2-layer2">Siguiente ➡️</a>
</div>

