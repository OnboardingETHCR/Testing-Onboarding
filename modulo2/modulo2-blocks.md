---
layout: page
title: "3.3. Bloques en Ethereum"
parent: "Módulo 2: Ethereum, Ecosistema y Herramientas"
nav_order: 5
---

# Bloques en Ethereum

A blockchain is made of blocks, and Ethereum is no exception. Every transaction, smart contract deployment, or balance update happens inside a block.

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

Now that you understand blocks, let’s explore the **nodes and clients** that make the Ethereum network function.

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

<div class="page-done" data-scope="mod2-bloques" style="margin:.75rem 0 1.25rem">
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
  <a class="btn" href="/Testing-Onboarding/modulo2/modulo2-gas">⬅️ Anterior</a>
  <a class="btn" href="/Testing-Onboarding/modulo2/modulo2-nodos-clientes">Siguiente ➡️</a>
</div>

