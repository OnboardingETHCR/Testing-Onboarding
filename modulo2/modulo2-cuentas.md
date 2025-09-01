---
layout: page
title: "3.1. Cuentas en Ethereum"
parent: "Módulo 2: Ethereum, Ecosistema y Herramientas"
nav_order: 3
---

# Ethereum Accounts

Everything on Ethereum, from sending ETH, deploying a contract and interacting with a dApp requires an **account**. Accounts are the foundation of identity and interaction on the network.

---

## 🧍 Types of Accounts

There are two types of accounts in Ethereum:

### 1. Externally Owned Accounts (EOAs)
- 🔐 Controlled by a **private key**
- 🧠 Owned by a **user** (like you)
- 💸 Can **initiate transactions**
- 💬 Used with wallets like MetaMask

> 💡 EOAs are the most common type of account. If you’ve created a wallet, you already have an EOA.

### 2. Contract Accounts
- 🤖 Controlled by **smart contract code**
- 🚫 **Cannot initiate** transactions
- ✅ Can **execute code** when triggered
- 🧱 Used for dApps, tokens, DAOs, and more

---

## 🔄 How do accounts interact?

- EOAs can send ETH or data to any other account (EOA or contract).
- Contract accounts can interact with other contracts but **only in response to incoming transactions**.
- EOAs pay gas for any transaction they initiate. Contract accounts **never pay gas directly**.

---

## 🔑 What does an account contain?

Both EOAs and contract accounts have:
- An **address** (e.g. `0x123...`)
- An **ETH balance**
- A **nonce** (transaction counter)

Only contract accounts contain executable code.

---

## 📦 Wallets and EOAs

Most Ethereum wallets (like MetaMask, Ledger, or mobile apps) help you create and manage EOAs. A wallet:
- Stores your private keys securely
- Lets you sign transactions
- Interfaces with dApps

> ⚠️ *If you lose access to your wallet’s private key or recovery phrase, you lose control of your account forever.*

---

### 🔐 Signature algorithm

Ethereum uses the **ECDSA (Elliptic Curve Digital Signature Algorithm)** for signing transactions. Your wallet uses this algorithm to create a cryptographic signature that proves you own the private key controlling your address.

> 🎥 Want a quick explainer on how ECDSA works?  
> [Watch this quick video](https://www.youtube.com/watch?v=GSIDS_lvRv4){:target="_blank"} (optional)

---

## ✅ What’s next?

Now that you understand how Ethereum accounts work, let’s explore **how gas fees are calculated** and why they exist.

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

<div class="page-done" data-scope="mod2-cuentas" style="margin:.75rem 0 1.25rem">
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
  <a class="btn" href="/Testing-Onboarding/modulo2/modulo2-evm">⬅️ Anterior</a>
  <a class="btn" href="/Testing-Onboarding/modulo2/modulo2-gas">Siguiente ➡️</a>
</div>


