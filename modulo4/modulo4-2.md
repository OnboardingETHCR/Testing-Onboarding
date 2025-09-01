---
layout: page
title: "2. Frontend Setup con React + Vite"
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

![Vite CLI creation](/Testing-Onboarding/assets/screenshots/modulo4/viteDev.png)


Then run:

```bash
cd my-dapp
npm install
npm run dev
```

If successful, your app will run locally.

![Initial UI](/Testing-Onboarding/assets/screenshots/modulo4/viteReactLocal.png)

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

> 💡 The `contracts/` folder will store the ABI and address of your deployed smart contracts later in this module.

You don’t need to create all folders right now, but this structure will help you stay organized.

---

<div class="module-progress"
     role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"
     data-scopes='["mod4-intro","mod4-react","mod4-wallet","mod4-integracion","mod4-actividad","mod4-cierre"]
'>
  <div class="mp-header">
    <strong>Módulo 4: Progreso</strong>
    <span class="mp-percent" aria-live="polite">0%</span>
  </div>
  <div class="mp-bar"><div class="mp-bar-fill" style="width:0%"></div></div>
</div>

<div class="page-done" data-scope="mod4-react" style="margin:.75rem 0 1.25rem">
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
  <a class="btn" href="/Testing-Onboarding/modulo4/modulo4-1">⬅️ Anterior</a>
  <a class="btn" href="/Testing-Onboarding/modulo4/modulo4-3">Siguiente ➡️</a>
</div>
