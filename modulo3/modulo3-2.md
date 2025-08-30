---
layout: page
title: "2. Anatomía de un Contrato"
nav_order: 2
parent: "Módulo 3: Programando en Solidity"
---

# 🧬Anatomy of a Contract

Now that you’ve explored a simple contract in the previous section, it's time to go deeper. This is your first **structured analysis** of a real Solidity contract, where we’ll break down each part to understand what it does, why it matters, and how it fits into the language’s design.

We'll use a minimal but complete contract called `SimpleStorage.sol`, adapted from the official Ethereum documentation. This contract:
- Stores a number on the blockchain
- Allows updating that number via a public function
- Provides a public getter function to read it
- Includes basic documentation using NatSpec comments

Our goal is to understand the **anatomy of a contract** and how Solidity handles:
- State variables and storage
- Public functions and visibility
- Basic data types
- Syntax and layout
- NatSpec documentation

---

## 🧪 Example Contract: SimpleStorage.sol

Here is the full contract:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/// @title SimpleStorage - Stores and retrieves a number
contract SimpleStorage {
    uint256 private data;

    /// @notice Sets the value of `data`
    /// @param _value The number to store
    function set(uint256 _value) public {
        data = _value;
    }

    /// @notice Retrieves the stored value
    /// @return The current value of `data`
    function get() public view returns (uint256) {
        return data;
    }
}
```
You can deploy and test this contract in Remix:

[👉 Open in Remix](https://remix.ethereum.org/#url=https://onboardingethcr.github.io/Testing-Onboarding/contracts/SimpleStorage.sol){:target="_blank" .btn}


---

### 🔍 Contract Overview

| Section              | Description                                                               |
|----------------------|---------------------------------------------------------------------------|
| `SPDX + pragma`      | Declares license and minimum compiler version                             |
| Contract name        | `SimpleStorage` defined using the `contract` keyword                      |
| State variable       | `data` is a private `uint256` stored directly on the blockchain           |
| `set()` function     | Public function to assign a new value to `data`                           |
| `get()` function     | View function that returns the current stored value                       |
| NatSpec comments     | Standardized documentation comments for tools and UIs                    |

---

## 🧾 State Variables: Persistent On-Chain Data

State variables are stored directly on the blockchain and define the **long-term state** of your contract.  
They are declared at the contract level (outside functions) and persist across all transactions.

In `SimpleStorage`, we have:

```solidity
uint256 private data;
```

This creates a **persistent unsigned integer** that only this contract can access directly (because it’s `private`).

---

### 🔐 Visibility and Access

Visibility controls **who can read or modify** the variable, both inside and outside the contract.

| Keyword     | Who can access it?                           |
|-------------|-----------------------------------------------|
| `public`    | Anyone, a getter function is auto-generated |
| `private`   | Only this contract                           |
| `internal`  | This contract and derived contracts          |

> 💡 Always declare visibility explicitly. If you don’t, Solidity will default to `internal`.

---

### 💸 Storage and Gas Considerations

- State variables consume **storage**, the most expensive resource in Ethereum.
- Reading is cheaper than writing.
- Use types like `uint256`, `bool`, or `address` efficiently to reduce cost.

---

> ✅ Tip: Organize state variables by access level and purpose, it improves clarity and auditability.

---

## ⚙️ Functions: Behavior and Visibility

Functions define the **behavior** of your contract, how users and other contracts can interact with its data.

In `SimpleStorage`, we have two functions:

```solidity
function set(uint256 _value) public {
    data = _value;
}

function get() public view returns (uint256) {
    return data;
}
```

Let’s break them down.

---

### 📥 `set()` – Writing to the Blockchain

This function accepts a `uint256` input and stores it in the `data` state variable:

- It’s `public`, so anyone can call it.
- It **modifies contract state**, so it costs gas.
- The parameter `_value` is stored in **memory** (by default for value types).

> 🧠 Calling `set()` from an EOA (wallet) will create a new transaction and consume ETH.

---

### 📤 `get()` – Reading from the Blockchain

This function returns the stored value without modifying anything:

- It’s also `public`
- It uses the `view` modifier, meaning **it doesn’t change state**
- Calling it from outside (e.g., Remix) **is free**, no gas is spent

---

### 🔍 Function Visibility Summary

| Modifier   | Can be called by | Notes                                  |
|------------|------------------|----------------------------------------|
| `public`   | Anyone            | Also accessible by internal functions |
| `external` | Only outside      | Slightly more gas efficient in some cases |
| `internal` | This + child contracts | Not visible outside                 |
| `private`  | Only this contract | Hidden from derived contracts         |

---

> ✅ Best Practice: Declare visibility (`public`, `private`, etc.) **and mutability** (`view`, `pure`) explicitly for every function.

---

## 📝 NatSpec Documentation

Solidity supports a special format for inline documentation called **NatSpec (Ethereum Natural Specification Format)**.  
It helps explain what each function does, its parameters, and what it returns, and can be used by developer tools, interfaces, and auditors.

---

### ✍️ Example in `SimpleStorage.sol`

```solidity
/// @notice Sets the value of `data`
/// @param _value The number to store
function set(uint256 _value) public {
    data = _value;
}

/// @notice Retrieves the stored value
/// @return The current value of `data`
function get() public view returns (uint256) {
    return data;
}
```
---

### 🧠 Common NatSpec Tags

| Tag         | Purpose                                      |
|-------------|----------------------------------------------|
| `@title`    | Brief title for the contract                 |
| `@notice`   | What this function does (for end users)      |
| `@dev`      | Developer-only notes                         |
| `@param`    | Description of a function parameter          |
| `@return`   | What the function returns                    |

> ⚠️ These comments must be placed **immediately before** the function or contract they describe.

---

NatSpec is optional but strongly recommended, especially when working in teams or building for public use.

---

## 🧠 Reflective Questions

Take a moment to check your understanding. Try answering on your own before revealing the answer.

---

### 1. Why is the `data` variable marked as `private` in `SimpleStorage`?

<details markdown="1">
<summary>💡 Reveal Answer</summary>

To prevent external contracts or users from accessing or modifying it directly.  
This encourages controlled interaction through public functions like `get()` and `set()`, reducing the risk of accidental or unauthorized changes.

</details>

---

### 2. What does the `view` keyword mean in the `get()` function?

<details markdown="1">
<summary>💡 Reveal Answer</summary>

It indicates that the function does **not modify** the contract's state.  
Functions marked `view` can **read** state variables but cannot write to them.

</details>

---

### 3. What happens if you forget to declare visibility on a function?

<details markdown="1">
<summary>💡 Reveal Answer</summary>

The compiler will apply a default, which may not match your intention.  
For functions, the default is `public` for interfaces and `internal` for contracts.  
Not declaring it explicitly can lead to security or accessibility issues.

</details>

---

### 4. Why is NatSpec useful in smart contracts?

<details markdown="1">
<summary>💡 Reveal Answer</summary>

NatSpec makes your contract easier to understand, test, and audit.  
It improves developer experience, supports frontend integration, and provides clarity when others interact with your code through tools like Remix or Etherscan.

</details>

---

### 🔁 Navigation

<div style="display: flex; justify-content: space-between; margin-top: 2em;">
  <a class="btn" href="/Testing-Onboarding/modulo3/modulo3-1">⬅️ Anterior</a>
  <a class="btn" href="/Testing-Onboarding/modulo3/modulo3-3">Siguiente ➡️</a>
</div>

