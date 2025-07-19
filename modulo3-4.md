---
layout: page
title: "Tipos, Visibilidad y Flujo de Control"
nav_order: 3
parent: "Módulo 3: Programando en Solidity"
---

## 🔍Types, Visibility, and Control Flow

In this section, we’ll expand your Solidity knowledge by diving into **how data moves, who can access it, and how decisions are made** within a smart contract.

You’ve already seen basic types and functions. Now we’ll explore:

- **Function visibility** and access restrictions
- **Data locations** like `memory`, `storage`, and `calldata`
- **Control structures** like `if`, `for`, `while`, and `require`
- Common **patterns and best practices** for writing secure and clear logic

These concepts are essential for writing efficient, readable, and secure contracts — and they’ll become even more important as you build more complex dApps.

Let’s get started.

---

## 🔐 Function Visibility in Solidity

> You've already seen how `public`, `private`, and `internal` affect **variable access** in the previous section.  
> Functions follow similar rules — but also introduce `external`, which is unique to function calls. Let's explore what each means.

Every function in Solidity must declare **who can call it**. This is controlled through visibility modifiers:

| Modifier     | Callable by...             | Used for...                                 |
|--------------|-----------------------------|----------------------------------------------|
| `public`     | Everyone                    | Default for external interaction             |
| `external`   | Only from outside the contract | Slightly more gas-efficient in some cases  |
| `internal`   | This contract and children  | Inheritance-based logic                     |
| `private`    | Only this contract          | Helper logic, internal use only             |

> 🔎 Best Practice: Always declare function visibility explicitly. The compiler will warn you if you forget.

### 🧪 Example

```solidity
contract VisibilityExample {
    uint private secret = 42;

    function reveal() public view returns (uint) {
        return secret;
    }

    function _internalLogic() internal pure returns (string memory) {
        return "Used by internal calls";
    }

    function _privateHelper() private pure returns (bool) {
        return true;
    }
}
```

The function `reveal()` is public — anyone can call it.  
The `_internalLogic()` function can only be called from within this contract or one that inherits it.  
The `_privateHelper()` function is only accessible **within this contract**.

---

## 🧱 Control Flow: `require`, `revert`, `assert`

Solidity uses control statements to manage logic, validation, and error handling.
These help prevent invalid state changes and protect your contract.

---

### ✅ `require()` — Input validation

Use `require(condition, "Error message")` to:
- Check **user input**, **state validity**, or **access control**
- Revert the transaction if the condition is false
- Refund remaining gas to the caller

```solidity
function setAge(uint _age) public {
    require(_age > 0, "Age must be positive");
    age = _age;
}
```

---

### ❌ `revert()` — Custom error handling

Use when you want to explicitly stop execution, sometimes with custom logic:

```solidity
function doSomething(bool condition) public {
    if (!condition) {
        revert("Operation not allowed");
    }
}
```

---

### ⚠️ `assert()` — Internal invariants only

Use only when you believe **something should never fail** (developer assertions).
If it fails, it **consumes all gas** — do not use it for input checks.

```solidity
function neverFails(uint x) public pure returns (uint) {
    assert(x >= 0);
    return x;
}
```

> 🧠 Use `require()` for user input, `revert()` for explicit exits, and `assert()` for critical internal conditions.

---

### 🔁 Conditionals and Loops

Solidity supports standard control structures:

```solidity
if (x > 10) {
    // do something
} else {
    // do something else
}

for (uint i = 0; i < 5; i++) {
    // iterate
}

while (condition) {
    // use with caution (gas)
}
```

> ⚠️ Avoid unbounded loops in production — they may run out of gas and block the transaction.

---