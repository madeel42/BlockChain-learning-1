//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Greeter {
    string private greeting;
    uint256 public num = 34;

    constructor(string memory _greeting) {
        console.log("Deploying a Greeter with greeting:", _greeting);
        greeting = _greeting;
    }

    function update(uint256 _num) public view returns (uint256 num) {
        
        num = _num;

    }

    function sumOfTwoNum() public pure returns (uint256) {
        uint256 a = 45;
        uint256 b = 5;
        return  a + b;
    }

    function CheckSenderAddress() public view returns (address) {
        return msg.sender;
    }

    function greet() public view returns (string memory) {
        return greeting;
    }

    function setGreeting(string memory _greeting) public {
        console.log("Changing greeting from '%s' to '%s'", greeting, _greeting);
        greeting = _greeting;
    }

    fallback() external {}
}
