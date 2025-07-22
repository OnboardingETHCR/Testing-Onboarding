---
layout: page
title: "Conexión de Wallet (MetaMask)"
parent: "Módulo 4: Desarrollo de Aplicaciones Web3"
nav_order: 3
---

# Connecting a Wallet (MetaMask)

Now that your frontend is set up, the next step is to connect your dApp to a user's wallet. In this section, you’ll integrate **MetaMask** using `ethers.js` so that users can authenticate and sign transactions.

Connecting a wallet is the entry point to user interaction in Web3 — without it, your dApp can’t access accounts or send signed transactions.

---

## 🔌 What is MetaMask?

[MetaMask](https://metamask.io/) is a browser extension (and mobile app) that allows users to manage their Ethereum accounts and interact with dApps. It injects a provider (`window.ethereum`) into the browser, which we can access using `ethers.js`.

> ✅ You should have MetaMask and a wallet created at this point before continuing.

---

## 🧪 Step-by-Step: Detect and Connect

Let’s add basic wallet connection logic to your `App.jsx`:

```jsx
import { useState } from 'react';
import { ethers } from 'ethers';

function App() {
  const [account, setAccount] = useState(null);

  async function connectWallet() {
    if (window.ethereum) {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);
      } catch (err) {
        console.error('User rejected the connection', err);
      }
    } else {
      alert('MetaMask not found. Please install it.');
    }
  }

  return (
    <div>
      <h1>My dApp</h1>
      {account ? (
        <p>Connected: {account}</p>
      ) : (
        <button onClick={connectWallet}>Connect Wallet</button>
      )}
    </div>
  );
}

export default App;
```

---

## 🧠 Reflect

**Why is user authentication different in Web3 compared to Web2?**
<details>
<summary>💡 Show answer</summary>
Web3 uses public-private key pairs instead of email/password. Users prove ownership by signing data with their wallet.
</details>

**What security risks arise if you automatically connect wallets without user interaction?**
<details>
<summary>💡 Show answer</summary>
It could expose user addresses without consent. Always request connection explicitly to respect privacy and avoid phishing.
</details>

---

### 🔁 Navegación

<div style="display: flex; justify-content: space-between; margin-top: 2em;">
  <a class="btn" href="/Testing-Onboarding/modulo4-frontend">⬅️ Anterior</a>
  <a class="btn" href="/Testing-Onboarding/modulo4-contracts">Siguiente ➡️</a>
</div>
