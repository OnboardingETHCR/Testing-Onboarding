---
layout: page
title: "3.2. Gas y Tarifas"
parent: "Módulo 2: Ethereum, Ecosistema y Herramientas"
nav_order: 4
---

# Gas and Fees

Every action on Ethereum — sending ETH, interacting with contracts, deploying dApps — consumes computational resources. To ensure fair use of the network, Ethereum introduces a cost mechanism called **gas**.

---

## ⛽ What is gas?

Gas is the unit used to measure how much work an operation requires. Every transaction and computation must pay for the resources it consumes.

Think of gas as the “fuel” your transaction needs to be processed.

---

## ⚙️ Why does Ethereum use gas?

Gas serves two essential purposes:

- ✅ **Prevents abuse**: Makes spam and infinite loops expensive
- ✅ **Incentivizes validators**: Compensates those who process and verify transactions

Without gas, the network could be easily overloaded or manipulated.

---

## 💸 How is gas paid?

Gas fees are paid in **ETH**, not in gas units directly.

- **Gas limit**: The maximum amount of gas you’re willing to use
- **Gas price**: The amount of ETH you’re willing to pay per unit of gas

> ⚠️ If your transaction runs out of gas before it finishes, it will fail — and you’ll still lose the gas used up to that point.

---

## 📉 Gas fees and network congestion

Gas prices change based on supply and demand:

- 🔺 High network activity = higher fees
- 🔻 Low activity = cheaper transactions

You can monitor gas prices using tools like:
- [Etherscan Gas Tracker](https://etherscan.io/gastracker)
- MetaMask's fee estimator
- Wallet presets like “Low”, “Market”, or “Aggressive”

---

## 🧠 Real-world analogy

> Imagine gas as fuel for a car:
>
> - Your trip = your transaction  
> - Fuel = gas units  
> - Price per liter = gas price  
> - Total fuel cost = gas limit × gas price

---

## 🛠️ Tips to manage gas

- 🕒 Use off-peak hours for lower fees
- 🧩 Try Layer 2 solutions (e.g. Arbitrum, Optimism)
- 🚀 Use wallets that suggest optimal fees automatically

---

### 🛠️ MEV (Miner/Maximal Extractable Value)

MEV refers to profits that validators can earn by reordering, including, or excluding transactions in a block. This can impact how your transaction is processed and the final gas paid.

---

## ✅ What’s next?

You’ve learned how computation is paid for on Ethereum. Next, we’ll look at the **blocks** that make up the Ethereum blockchain.

---

### 🔁 Navegación

<div style="display: flex; justify-content: space-between; margin-top: 2em;">
  <a class="btn" href="/Testing-Onboarding/modulo2/modulo2-cuentas">⬅️ Anterior</a>
  <a class="btn" href="/Testing-Onboarding/modulo2/modulo2-blocks">Siguiente ➡️</a>
</div>


