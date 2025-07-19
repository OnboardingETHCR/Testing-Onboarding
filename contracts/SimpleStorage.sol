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
