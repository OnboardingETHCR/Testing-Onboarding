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

## 🧾 Smart Contract: Counter.sol

We’ll use a simple smart contract that allows reading and incrementing a number.

This is the same contract you explored in Module 3 — here it is again for easy reference:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Counter {
    uint256 private count;

    event CountIncremented(uint256 newCount);

    constructor() {
        count = 0;
    }

    function getCount() public view returns (uint256) {
        return count;
    }

    function increment() public {
        count += 1;
        emit CountIncremented(count);
    }
}
```

You’ll deploy this contract using Remix and then use its address and ABI to connect your frontend.

---

## 🚀 Deploying the Smart Contract to Sepolia

Before we can connect our frontend to a smart contract, we need to make sure the contract is actually deployed on a network — in this case, the **Sepolia testnet**.

### 📌 What You'll Deploy

The following deployment process uses the Counter.sol contract you've already worked with. If you need a quick copy, it’s included above.

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

> 🧪 If you need test ETH for Sepolia, use the [Google Cloud Faucet](https://cloud.google.com/application/web3/faucet/ethereum/sepolia) — no mainnet ETH required.

Once deployed, keep your contract’s address and ABI ready — you’ll use them in the next steps to connect your dApp.

---

## 🖼️ Deployment Walkthrough (Screenshots)

Here’s a quick visual guide to help you deploy your contract using Remix and MetaMask:

1. **Compile the Contract**
   ![Compile in Remix](../assets/screenshots/modulo4/remixCompiler.png)

2. **Switch to "Injected Provider - MetaMask" and select Sepolia**
   ![Injected Provider Selected](../assets/screenshots/modulo4/deployCounterRemix.png)

3. **Deploy from Remix and Confirm in MetaMask**
   ![MetaMask Confirm Deployment](../assets/screenshots/modulo4/deployMM.png)

4. **Verify the contract was created on Sepolia using Etherscan**
   ![Transaction on Etherscan](../assets/screenshots/modulo4/etherscanSepolia.png)

5. **Interact with the Contract via getCount**
   ![getCount Called](../assets/screenshots/modulo4/getcount.png)

6. **Send a Transaction to increment**
   ![Confirm Increment in MetaMask](../assets/screenshots/modulo4/increment.png)

7. **Confirm transaction mined**
   ![Increment Tx Confirmed](../assets/screenshots/modulo4/incrementTXN.png)

8. **Final `getCount()` shows updated value**

   ![Updated count after increment](../assets/screenshots/modulo4/updatedCount.png)

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

Let’s now prepare your contract configuration for use in the frontend.

```js
// src/contracts/contract.js
import ABI from './CounterABI.json';

export const CONTRACT_ADDRESS = "0xYourContractAddressHere";
export const CONTRACT_ABI = ABI;
```

> 🧠 This keeps your code clean and reusable. You can copy the ABI from Remix and save it in a separate file: `src/contracts/CounterABI.json`.

---

## 🧪 Reading Data from the Contract

Now that your contract address and ABI are defined in contract.js, you can import them and read data from the blockchain using getCount().

Open your `src/App.jsx` file and update it as follows:

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

> ⚠️ **Troubleshooting tip:**
> If the UI stays on “Loading...”, try disconnecting and reconnecting your wallet in MetaMask. Previous test sessions might cause issues. Also, ensure you're connected to the **Sepolia** network and using the correct **contract address**.

---

## ✍️ Writing Data with a Transaction (increment)

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

> This uses the same import from `contract.js`, which includes both the contract address and ABI.


---

## 🧠 Reflect: What's Happening?

* `ethers.Contract(...)` connects to the smart contract
* A `signer` is required to **send** transactions
* Calling `increment()` sends a transaction and costs testnet ETH
* After confirmation, we fetch the new count from the chain

---

## 🖼️ Frontend Interaction Walkthrough

### 1. ABI (Application Binary Interface)

To interact with the contract, the ABI is saved as a `.json` file in your frontend.

![ABI file](../assets/screenshots/modulo4/CounterABI.png)

### 2. contract.js: Preparing the Configuration

This file holds your contract address and ABI reference.

```js
// src/contracts/contract.js
import ABI from './CounterABI.json';

export const CONTRACT_ADDRESS = "0xYourContractAddressHere";
export const CONTRACT_ABI = ABI;
```

![Contract config](../assets/screenshots/modulo4/contractJS.png)

### 3. Counter Frontend View (Reading)

After successfully loading the count:

![Counter frontend](../assets/screenshots/modulo4/counterFrontend.png)

### 4. Increment Button in UI

The increment button now appears:

![Increment Button](../assets/screenshots/modulo4/incrementFrontEnd.png)

### 5. MetaMask Prompt to Connect

If the dApp hasn't connected to MetaMask, you'll see this:

![MetaMask connect](../assets/screenshots/modulo4/connectFrontend.png)

### 6. MetaMask Transaction Request

Once the user clicks **Increment**, MetaMask prompts to approve the transaction:

![Transaction Request](../assets/screenshots/modulo4/frontendtx.png)

### 7. Confirmed Transaction

After confirming the transaction in MetaMask:

![Confirmed TXN](../assets/screenshots/modulo4/confirmedTXN.png)

### 8. Updated Value Displayed in the Frontend

After confirming the transaction, the count value updates automatically:

![Updated value after increment](../assets/screenshots/modulo4/updatedFrontend.png)

> ✅ If everything is working properly, you should see something like this. Your frontend is now successfully reading **and writing** data to the blockchain!

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

