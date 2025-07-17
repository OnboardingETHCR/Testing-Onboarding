---
layout: page
title: "3.3 Tipos, Funciones y Flujo de Control"
nav_order: 3
parent: "Módulo 3: Programando en Solidity"
---

## 🧮 3.3 Types, Functions and Control Flow

Understanding how Solidity manages data, defines behavior, and controls execution flow is essential to writing robust and efficient smart contracts.

This section will guide you through:

- The core data types used in Solidity
- The different locations where data can be stored and passed
- Function definitions, visibility, and mutability
- Control structures such as conditionals, loops, and validation

Whether you're structuring a DAO, minting NFTs, or building a DeFi protocol, these building blocks are critical for secure and effective smart contract design.

## 🔢 Types in Solidity

Solidity provides a rich set of **data types** to represent values in a secure and gas-efficient way. Choosing the right type is essential for writing readable, optimized, and safe contracts.

Below is an overview of the most commonly used types:

---

### 📌 Elementary Types

| Type       | Description                             | Example                           |
|------------|-----------------------------------------|------------------------------------|
| `uint`     | Unsigned integer (default: 256 bits)    | `uint age = 30;`                   |
| `int`      | Signed integer                          | `int balance = -100;`              |
| `bool`     | Boolean value                           | `bool isActive = true;`            |
| `address`  | Ethereum wallet or contract address     | `address owner = msg.sender;`      |
| `string`   | UTF-8 encoded dynamic text              | `string name = "Alice";`           |
| `bytes`    | Dynamic sequence of bytes               | `bytes data = hex"1234";`          |
| `bytesN`   | Fixed-size byte array (`bytes1` to `bytes32`) | `bytes32 id = keccak256(...);` |

> ⚠️ Solidity does not support floating point numbers (e.g., `float`, `double`).  
> All decimals must be handled manually using integers (e.g., `amount * 10**18`).

---

### 📦 Arrays

Arrays can be:
- **Fixed-size**: `uint[3]` (size must be known at compile time)
- **Dynamic**: `string[]`, `uint[]`

```solidity
uint[] public numbers;
string[2] public names = ["Alice", "Bob"];
```

---

### 🎛️ Enums

Enums define a set of named states or options.

```solidity
enum Status { Pending, Shipped, Delivered }

Status public currentStatus;

function markShipped() external {
    currentStatus = Status.Shipped;
}
```

---

### 🧱 Structs

Structs allow grouping related data into a custom type.

```solidity
struct Product {
    string name;
    uint price;
    bool available;
}

Product public item;

function createProduct(string memory _name, uint _price) external {
    item = Product(_name, _price, true);
}
```

> 📌 Structs can be nested, used in arrays, or passed to functions.  
> However, they increase gas usage, so use them judiciously.

---

### ✅ Best Practices

- Use the **smallest integer size** possible (`uint8`, `uint16`, etc.) when optimizing for storage — especially in structs.
- Prefer `uint256` and `int256` when consistency and readability are more important than minimal storage.
- Always initialize variables explicitly to avoid unexpected `default` values.
- Avoid using `string` and `bytes` in conditions or loops — they are expensive to process.

---

