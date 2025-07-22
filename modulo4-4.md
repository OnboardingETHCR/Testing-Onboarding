---
layout: page
title: "Integración de Contratos Inteligentes"
parent: "Módulo 4: Desarrollo de Aplicaciones Web3"
nav_order: 4
---

# Interacting with Smart Contracts

In this section, you’ll connect your **React** frontend to a smart contract deployed on a testnet (such as **Sepolia**) using `ethers.js`.

This is where the magic of dApps happens — reading blockchain data and writing new information based on user interaction. Now that you have a running frontend and a connected wallet, it’s time to **talk to the blockchain**.

---

## 🎯 What Will You Learn?

By the end of this section, you’ll be able to:

- Connect your frontend to a deployed contract using `ethers.Contract`
- Call public view functions to read data from the blockchain
- Send transactions that modify on-chain state
- Trigger MetaMask prompts for user approval
- Display real-time updates in the UI after transactions

---

## 🚀 Deploying the Smart Contract to Sepolia

Before we can connect our frontend to a smart contract, we need to make sure the contract is actually deployed on a network — in this case, the **Sepolia testnet**.

### 📌 What You'll Deploy

We'll use the same `Counter.sol` contract you explored in Module 3, which allows us to:

- Read a number (`getCount`)
- Increment it (`increment`)

If you haven’t deployed it yet, follow the steps below using [Remix IDE](https://remix.ethereum.org/).

---

## 🧰 Deploy Instructions (with MetaMask)

1. Open [Remix](https://remix.ethereum.org/) and paste the contents of `Counter.sol`.
2. Make sure you’re connected to MetaMask with the **Sepolia** network selected.
3. On the **Solidity compiler** tab:
   - Select compiler version `0.8.20` (or similar)
   - Compile the contract
4. Go to the **Deploy & Run Transactions** tab:
   - Select “Injected Provider - MetaMask” as the environment
   - Choose the `Counter` contract
   - Click **Deploy**
5. Confirm the transaction in MetaMask.
6. Copy and save the **contract address**.

> 🧪 If you need test ETH for Sepolia, you can use [Alchemy’s Faucet](https://sepoliafaucet.com/).

Once deployed, keep your contract’s address and ABI ready — you’ll use them in the next steps to connect your dApp.

---

## 📦 Preparing the Contract for Frontend

To connect to the deployed contract, you need two things:

- The **Contract Address** you got from Remix
- The **ABI** (Application Binary Interface)

### 🔍 How to Get the ABI

1. In Remix, go to the `artifacts` panel or the `Compilation Details`.
2. Scroll to the ABI section.
3. Click the **copy** icon and save it into a new file in your project:
   `src/contracts/CounterABI.json`

> 💡 You can also paste the ABI directly as a JavaScript object for simplicity.

---

## 🧱 Frontend Setup (contract.js)

Now let’s prepare the contract info for React:

```js
// src/contracts/contract.js
export const CONTRACT_ADDRESS = "0xYourContractAddressHere";

export const CONTRACT_ABI = [
{
 "inputs": [],
 "name": "getCount",
 "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
 "stateMutability": "view",
 "type": "function"
},
{
 "inputs": [],
 "name": "increment",
 "outputs": [],
 "stateMutability": "nonpayable",
 "type": "function"
}
];
````
---

## 🧪 Reading Data from the Contract

Update your `App.jsx` to read the current count using `getCount()`:

```jsx
import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { CONTRACT_ABI, CONTRACT_ADDRESS } from './contracts/contract';

function App() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    async function fetchCount() {
      if (window.ethereum) {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, provider);
        const value = await contract.getCount();
        setCount(Number(value));
      }
    }
    fetchCount();
  }, []);

  return (
    <div>
      <h1>Counter dApp</h1>
      <p>Current count: {count !== null ? count : "Loading..."}</p>
    </div>
  );
}

export default App;
```

> 🧠 This function doesn’t need gas or MetaMask confirmation — it's a `view` function!

---

## ✍️ Writing Data with a Transaction

Let’s allow users to increment the counter. You’ll need:

* A **signer** to send the transaction
* Wallet connected to Sepolia

Extend your `App.jsx` like this:

```jsx
async function incrementCount() {
  if (!window.ethereum) return;

  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();
  const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);

  const tx = await contract.increment();
  await tx.wait();

  const updatedCount = await contract.getCount();
  setCount(Number(updatedCount));
}
```

And add a button to your component:

```jsx
<button onClick={incrementCount}>➕ Increment</button>
```

---

## 🧠 Reflect: What's Happening?

* `ethers.Contract(...)` connects to the smart contract
* A `signer` is required to **send** transactions
* Calling `increment()` sends a transaction and costs testnet ETH
* After confirmation, we fetch the new count from the chain

---

## 📸 UI Sample

![getCount Screenshot](../assets/screenshots/modulo4/getCount.png)

> Make sure your MetaMask is connected and on Sepolia network.

---

## ✅ Recap: What You Just Did

You’ve built a real connection between your dApp and the Ethereum blockchain.

You can now:

* Read and write from a live smart contract
* Handle transaction signing and confirmation
* Sync frontend state with on-chain data

---

## 🧠 Reflect

Take a moment to think through the following questions before moving on:

### 1. Why do we need the ABI and contract address to interact with a deployed contract?

<details>
  <summary>💡 Show answer</summary>
  The contract address tells your application where to find the smart contract on the blockchain. The ABI describes how to interact with it — what functions are available, their parameters, and return types. Without both, your app cannot communicate properly with the contract.
</details>

---

### 2. What’s the difference between using a provider and a signer in `ethers.js`?

<details>
  <summary>💡 Show answer</summary>
  A provider is read-only — it allows you to query the blockchain (e.g., call view functions). A signer is a special object that can sign transactions and send data that changes blockchain state (e.g., write functions like `increment()`).
</details>

---

### 3. Why do we wait for the transaction to be mined with `await tx.wait()`?

<details>
  <summary>💡 Show answer</summary>
  Transactions are not instantly confirmed on the blockchain. `await tx.wait()` ensures the transaction is mined (i.e., included in a block) before proceeding. This guarantees that the state has changed before you fetch the updated value or update the UI.
</details>

---

### 🔁 Navegación

<div style="display: flex; justify-content: space-between; margin-top: 2em;">
  <a class="btn" href="/Testing-Onboarding/modulo4-3">⬅️ Anterior</a>
  <a class="btn" href="/Testing-Onboarding/modulo4-5">Siguiente ➡️</a>
</div>

