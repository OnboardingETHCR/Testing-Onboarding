// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract HelloWorld {
    string private message;

    constructor(string memory _message) {
        message = _message;
    }

    function readMessage() public view returns (string memory) {
        return message;
    }

    function updateMessage(string calldata _newMessage) public {
        message = _newMessage;
    }
}
