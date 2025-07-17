
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/// @title HelloWorld - A simple message storage contract
contract HelloWorld {
    
    // State variable — stored permanently on-chain
    string public message;

    /// Constructor runs only once when the contract is deployed
    constructor(string memory _initialMessage) {
        message = _initialMessage;
    }

    /// Read-only function — returns the stored message
    function getMessage() public view returns (string memory) {
        return message;
    }

    /// Write function — updates the message (modifies blockchain state)
    function updateMessage(string memory _newMessage) public {
        message = _newMessage;
    }
}
