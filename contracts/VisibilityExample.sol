// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

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