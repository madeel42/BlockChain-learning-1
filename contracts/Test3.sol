//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Test3 {
    address public treaserAddress;
    address public owner;
    uint256 public counter;
    uint256 public price = 0.01 ether;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "only can deloy");
        _;
    }

    modifier verifyAmount(uint256 _amount) {
        require(price == _amount, "incorrect value provided");
        _;
    }

    function updateTreaserAddress(address _treaserAddress) public onlyOwner {
        treaserAddress = _treaserAddress;
    }

    function updateAmount(uint256 _value) public verifyAmount(_value)  {
        price = _value;
        counter++;
    }

    function deepTest() public view {}
}
