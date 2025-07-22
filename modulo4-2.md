---
layout: page
title: "Frontend Setup con React + Vite"
parent: "Módulo 4: Desarrollo de Aplicaciones Web3"
nav_order: 2
---

# Frontend Setup with React + Vite

Now that you understand how dApps work, it’s time to start building.

In this section, you'll set up a modern frontend using **React** and **Vite**, the fastest development tooling available for modern web apps. This will be your foundation for interacting with smart contracts and connecting your wallet.

---

### 👷 What Are We Building?

Throughout this module, you’ll build a simple but complete decentralized application: a **Counter dApp**.

- It will display a number stored on a smart contract.
- Users will connect their wallet and sign a transaction to increment the number.
- The updated value will appear on the interface after each interaction.

This project covers all the essential layers of a dApp: frontend, wallet integration, and smart contract communication — all deployed on a testnet.

---

### 🎯 Objective of This Section

In this section, you’ll create the base for your dApp’s frontend using **React** and **Vite**. By the end, you'll have a running web interface ready to connect with Ethereum smart contracts.

This setup is the foundation upon which we’ll build features like wallet connection and smart contract interactions.

---

## 🤔 Why React?

We chose **React** because it's one of the most widely-used frameworks for building modern user interfaces — and it’s especially popular in the Web3 space. Many dApps, developer tools, and libraries are built with React or designed to integrate with it.

- ✅ Huge ecosystem and community support
- ✅ Easy integration with wallet providers and libraries 
- ✅ Official Ethereum tutorials and starter kits are React-based

---

## 🤔 Why Vite?

We use **Vite** because it’s extremely fast, easy to configure, and works well with modern JavaScript and Web3 libraries.

It’s now the standard choice for many Ethereum-based projects like Scaffold-ETH and other dApp starter kits.

- ✅ Fast startup and hot module replacement
- ✅ Seamless integration with Ethers.js, TailwindCSS, and dotenv
- ✅ Recommended by modern Web3 tooling ecosystems

---

### 🧰 Required Environment

Before continuing, make sure you have the following installed:

- <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">Node.js</a> (version 18 or later)
- npm (comes with Node.js)
- A terminal or command line tool (Command Prompt, Terminal, or VS Code terminal)
- A text editor 

If you’re using an online IDE, some steps may differ.

---

## 🛠️ Project Setup

Let’s scaffold a new project using Vite with React and JavaScript:

```bash
npm create vite@latest my-dapp -- --template react
```

Follow the prompts:
- Select **React** as the framework
- Choose **JavaScript** as the variant

You should see something like this:

![Vite CLI creation](/assets/screenshots/modulo4/viteDev.png)


Then run:

```bash
cd my-dapp
npm install
npm run dev
```

If successful, your app will run locally.

![Initial UI](/assets/screenshots/modulo4/viteReact.png)

---

## 📁 Suggested Project Structure

```
my-dapp/
├── public/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── components/
│   ├── contracts/
│   ├── utils/
│   └── styles/
├── .env
├── package.json
└── vite.config.js
```

You don’t need to create all folders right now, but this structure will help you stay organized.

---

## 🧠 Reflect

> Why are we using Vite instead of tools like Create React App?

<details><summary>See possible answer</summary>
<p>Vite provides faster startup times and hot module replacement (HMR), which makes development smoother and faster. It's optimized for modern frontend tooling and is now widely adopted in the ecosystem.</p>
</details>


---

### 🔁 Navegación

<div style="display: flex; justify-content: space-between; margin-top: 2em;">
  <a class="btn" href="/Testing-Onboarding/modulo4-1">⬅️ Anterior</a>
  <a class="btn" href="/Testing-Onboarding/modulo4-3">Siguiente ➡️</a>
</div>
