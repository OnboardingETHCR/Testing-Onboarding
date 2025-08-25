---
layout: page
title: "3. Cuentas en Ethereum"
parent: "Módulo 2: Ethereum, Ecosistema y Herramientas"
nav_order: 3
---

# Ethereum Accounts

Everything on Ethereum — sending ETH, deploying a contract, interacting with a dApp — requires an **account**. Accounts are the foundation of identity and interaction on the network.

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
- Contract accounts can interact with other contracts — but **only in response to incoming transactions**.
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

### 🔁 Navegación

<div style="display: flex; justify-content: space-between; margin-top: 2em;">
  <a class="btn" href="/Testing-Onboarding/modulo2-evm">⬅️ Anterior</a>
  <a class="btn" href="/Testing-Onboarding/modulo2-gas">Siguiente ➡️</a>
</div>


