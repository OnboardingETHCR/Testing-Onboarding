---
layout: page
title: "5. Nodos y Clientes"
parent: "Módulo 2: Ethereum, Ecosistema y Herramientas"
nav_order: 5
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

> ⚠️ You don’t need to run a node to use Ethereum — but you help the network tremendously if you do.

---

## ✅ What’s next?

Next, we’ll look at **block explorers** — tools that let users inspect Ethereum data such as transactions, addresses, and contracts.

---

<div style="display: flex; justify-content: space-between; margin-top: 2em;">
  <a class="btn" href="/Testing-Onboarding/modulo2-gas">⬅️ Anterior</a>
  <a class="btn" href="/Testing-Onboarding/modulo2-exploradores">Siguiente ➡️</a>
</div>
