//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Test6 {

     // just  in video did explain withdral, i thing proper implementation of withdrawl in upcomming tutorials
    address payable public richest;
    uint256 public mostSent;

    constructor() {
        richest = payable(msg.sender);
        // mostSent = msg.value;
    }

    mapping(address => uint256) public pendingWithdrawals;

    function becomeRichest() public payable returns (bool) {
        if (msg.value > mostSent) {
            pendingWithdrawals[richest] += msg.value;
            richest = payable(msg.sender);
            mostSent = msg.value;
            return true;
        } else {
            return false;
        }
    }

    function withdraw() public {
        uint256 amount = pendingWithdrawals[msg.sender];
        pendingWithdrawals[msg.sender] = 0;
        payable(msg.sender).transfer(amount);
    }
}
