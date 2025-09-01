---
layout: page
title: "4.1. Nodos y Clientes"
parent: "Módulo 2: Ethereum, Ecosistema y Herramientas"
nav_order: 6
---

# Ethereum Nodes and Clients

Ethereum is a decentralized network maintained by thousands of computers known as **nodes**. These nodes work together to verify transactions, store blockchain data, and execute smart contracts.

---

## 🖧 What is a node?

A **node** is a device running Ethereum client software that connects to the peer-to-peer network. Every node helps:

- 🧾 Store a copy of the blockchain
- 🛡️ Verify all rules of the protocol
- 🔁 Share data with other nodes
- 🧠 Execute smart contracts through the EVM

Nodes are what make Ethereum decentralized — no single point of control, and anyone can join.

---

## 🧱 Types of Ethereum nodes

| Node Type        | Description                                                                 |
|------------------|-----------------------------------------------------------------------------|
| **Full Node**     | Stores the entire blockchain and validates every transaction independently |
| **Light Node**    | Stores only recent block headers and requests data on demand               |
| **Archive Node**  | Stores everything a full node does, plus historical state data             |

> 💡 Most users interact with Ethereum through **dApps or wallets**, but the network itself depends on a healthy set of full nodes.

---

## 🔧 What is a client?

A **client** is the actual implementation of the Ethereum protocol. Each client follows the same rules, so nodes running different clients can still stay in sync.

### Common execution clients:
- Geth (Go)
- Nethermind (.NET)
- Besu (Java)
- Erigon (performance-focused)

### Common consensus clients:
- Prysm (Go)
- Lighthouse (Rust)
- Teku (Java)
- Nimbus (Nim)

> ⚠️ Ethereum now uses a dual-client architecture: execution + consensus (after The Merge).

---

## 🛠️ Why run a node?

Running your own node lets you:
- Verify your own transactions without relying on third parties
- Interact with dApps more privately
- Help secure and decentralize Ethereum

You can run a node:
- On your local machine
- Using cloud services
- With simplified tools like [eth-docker](https://eth-docker.net/) or [DAppNode](https://dappnode.io/)

> ⚠️ You don’t need to run a node to use Ethereum, but you help the network tremendously if you do.

---

## ✅ What’s next?

Now that you know how Ethereum nodes and clients work, let’s explore the **Ethereum networks**, including mainnet and testnets.

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

<div class="page-done" data-scope="mod2-nodos" style="margin:.75rem 0 1.25rem">
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
  <a class="btn" href="/Testing-Onboarding/modulo2/modulo2-blocks">⬅️ Anterior</a>
  <a class="btn" href="/Testing-Onboarding/modulo2/modulo2-networks">Siguiente ➡️</a>
</div>

