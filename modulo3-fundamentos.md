---

layout: page

title: "Fundamentos de Solidity"

nav\_order: 1

parent: "Módulo 3: Programando en Solidity"

has\_toc: false

---



\# Solidity Fundamentals



Welcome to your first deep dive into Solidity. This section introduces the essential concepts you need to understand before you can confidently build smart contracts on Ethereum.

Solidity is the most widely used programming language for building smart contracts on Ethereum. It draws inspiration from JavaScript, C++, and Python, but it is adapted for blockchain logic and decentralized execution. In this section, you’ll learn the purpose, syntax, and core components of Solidity through clear explanations and guided examples.



---



\## 🔍 What is Solidity?



Solidity is a high-level, contract-oriented language created in 2014 by Gavin Wood. It is designed to run on the Ethereum Virtual Machine (EVM), meaning every piece of Solidity code is executed and validated by every node in the network.



It is ideal for:



\- Creating decentralized business logic

\- Building dApps and protocols

\- Interacting with digital assets and tokens

\- Defining immutable rules on-chain



👉 Official documentation: \[soliditylang.org](https://docs.soliditylang.org/en/v0.8.30/)



---



\## 🧱 Basic Contract Structure



Let’s begin with the anatomy of a simple contract.



```solidity

// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;



contract HelloWorld {

&nbsp;   string public message;



&nbsp;   constructor(string memory \_message) {

&nbsp;       message = \_message;

&nbsp;   }



&nbsp;   function updateMessage(string memory \_newMessage) public {

&nbsp;       message = \_newMessage;

&nbsp;   }

}

```



\### 🧩 Breakdown



\- `pragma`: Tells the compiler what version to use.

\- `contract`: Declares a contract (like a class in OOP).

\- `constructor`: Runs once when the contract is deployed.

\- `public`: Allows anyone to call the function.

\- `memory`: Temporary storage location for inputs.

\- `message`: A state variable stored on the blockchain.



---



\## 🔠 Common Data Types



Solidity supports familiar types, but with Ethereum-specific behavior.



| Type       | Description                      | Example                       |

|------------|----------------------------------|-------------------------------|

| `uint256`  | Unsigned integer                 | `uint256 count = 1;`          |

| `bool`     | Boolean flag                     | `bool isActive = true;`       |

| `address`  | Ethereum wallet/contract         | `address owner = msg.sender;`|

| `string`   | UTF-8 encoded text               | `string name = "Alice";`      |



🧠 \*\*Why it matters\*\*: Every byte saved reduces gas cost. Prefer `uint256` over smaller variants unless optimizing deeply.



---



\## 📍 Data Locations



When you use reference types (arrays, strings, structs), Solidity requires you to \*\*explicitly specify\*\* the data location.



\- `storage`: Persistent, written to the blockchain

\- `memory`: Temporary, erased after function ends

\- `calldata`: Non-modifiable, used in external functions



```solidity

function updateName(string memory \_name) public {

&nbsp;   name = \_name;

}

```



⚠️ \*\*Omitting the data location will trigger a compile-time error.\*\*



---



\## 🔐 Visibility: Controlling Access



Every function and variable can be restricted using visibility modifiers.



| Modifier   | Who can call it?                        |

|------------|------------------------------------------|

| `public`   | Anyone – inside or outside               |

| `external` | Only from outside the contract           |

| `internal` | This contract and derived contracts only |

| `private`  | Only this contract                       |



```solidity

function revealSecret() public view returns (string memory) {

&nbsp;   return secret;

}

```



🧠 \*\*Tip\*\*: Use `external` for public APIs, `internal` for modular code, and `private` for sensitive logic.



---



\## ✅ View and Pure Functions



Not all functions should modify the blockchain. Solidity offers two special function types for this purpose:



\- `view`: Reads state, doesn't write

\- `pure`: Doesn't read or write any state



```solidity

function getCount() public view returns (uint) {

&nbsp;   return count;

}



function add(uint a, uint b) public pure returns (uint) {

&nbsp;   return a + b;

}

```



💸 \*\*Gas savings\*\*: These functions cost zero gas when called externally.



---



\## 📣 Events and Logging



Events allow contracts to emit logs that can be captured by frontends or indexed by tools like The Graph.



```solidity

event Updated(address indexed user, string newMessage);



function update(string memory \_msg) public {

&nbsp;   emit Updated(msg.sender, \_msg);

&nbsp;   message = \_msg;

}

```



🧠 \*\*Indexed parameters\*\* make events searchable by address or value.



---



\## 🔐 Validating Input with `require()`



Use `require()` to enforce business logic, prevent incorrect states, and save gas by halting execution early.



```solidity

function withdraw(uint amount) public {

&nbsp;   require(amount <= balances\[msg.sender], "Insufficient funds");

&nbsp;   balances\[msg.sender] -= amount;

&nbsp;   payable(msg.sender).transfer(amount);

}

```



🧠 \*\*Why this matters\*\*: Failing fast protects contract state and refunds unused gas.



---



\## 💻 Try It: A Simple Bank



```solidity

contract Bank {

&nbsp;   mapping(address => uint) public balances;



&nbsp;   function deposit() public payable {

&nbsp;       balances\[msg.sender] += msg.value;

&nbsp;   }



&nbsp;   function withdraw(uint amount) public {

&nbsp;       require(balances\[msg.sender] >= amount, "Not enough funds");

&nbsp;       balances\[msg.sender] -= amount;

&nbsp;       payable(msg.sender).transfer(amount);

&nbsp;   }

}

```



✅ Deploy it on \[Remix](https://remix.ethereum.org), interact using Injected Web3, and simulate real ETH transfers.



---



\## ⚒️ Mini Challenge



Create a contract `AccessCounter` with:



\- A `uint` counter

\- A function `increment()` that only the owner can call

\- An event emitted on each update



Test access control and event logs using Remix.



---



\## 🧠 Reflect



\- Why is visibility crucial in contract design?

\- How can `view` and `pure` functions reduce gas costs?

\- What risks does `require()` help avoid?



---



⬅️ \[Back to Module 3](modulo3.md) | \[Next section 



