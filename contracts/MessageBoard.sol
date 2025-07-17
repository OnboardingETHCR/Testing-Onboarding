// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

error Unauthorized();
error EmptyMessage();

contract MessageBoard {
    address public owner;
    string private message;

    event MessageUpdated(address indexed sender, string newMessage);

    constructor(string memory _initialMessage) {
        if (bytes(_initialMessage).length == 0) revert EmptyMessage();
        owner = msg.sender;
        message = _initialMessage;
    }

    function updateMessage(string calldata _newMessage) external {
        if (bytes(_newMessage).length == 0) revert EmptyMessage();
        message = _newMessage;
        emit MessageUpdated(msg.sender, _newMessage);
    }

    function readMessage() external view returns (string memory) {
        return message;
    }

    function deleteMessage() external {
        if (msg.sender != owner) revert Unauthorized();
        message = "";
    }
}
