---
layout: page
title: "5. Bloques en Ethereum"
parent: "Módulo 2: Ethereum, Ecosistema y Herramientas"
nav_order: 5
---

# Bloques en Ethereum

A blockchain is made of blocks — and Ethereum is no exception. Every transaction, smart contract deployment, or balance update happens inside a block.

---

## 🔗 What is a block?

A **block** is a package of data that contains:

- ✅ A list of transactions
- 🔐 A cryptographic hash that links it to the previous block
- ⏱ A timestamp
- 🪪 The validator’s signature
- 💰 Reward and gas information

Together, blocks form a chain — the blockchain — where each new block builds on the last in a linear, verifiable order.

---

## 🧱 What’s inside a block?

| Component         | Description                                               |
|------------------|-----------------------------------------------------------|
| **Block number**  | The position of the block in the chain                   |
| **Timestamp**     | When the block was produced                              |
| **Parent hash**   | Link to the previous block                               |
| **State root**    | Snapshot of Ethereum’s global state at that moment       |
| **Transactions**  | List of transactions included                            |
| **Gas used**      | Total gas consumed in the block                          |
| **Validator**     | Address of the validator who proposed the block          |
| **Receipts root** | Root of logs and receipts for included transactions      |

---

## 🔁 How are blocks produced?

Since Ethereum transitioned to Proof of Stake:

- Blocks are produced every 12 seconds.
- Validators are randomly selected to propose the next block.
- Other validators “attest” to the proposed block’s validity.

This system improves energy efficiency and helps Ethereum scale.

> 📚 Learn more about block production in PoS from [Ethereum’s documentation](https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/){:target="_blank"}


---

## 🕵️ How to explore blocks?

You can explore block contents using public tools like [Etherscan](https://etherscan.io) or [beaconcha.in](https://beaconcha.in):

- View individual transactions
- Check validator info
- See gas consumption
- Track smart contract activity

---

## ✅ What’s next?

Now that you understand blocks, let’s explore the different **Ethereum networks** — mainnet, testnets, and more.

---

### 🔁 Navegación

<div style="display: flex; justify-content: space-between; margin-top: 2em;">
  <a class="btn" href="/Testing-Onboarding/modulo2-gas">⬅️ Anterior</a>
  <a class="btn" href="/Testing-Onboarding/modulo2-networks">Siguiente ➡️</a>
</div>

