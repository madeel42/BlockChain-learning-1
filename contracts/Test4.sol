//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Test4 {
    uint256 public countReceive;
    uint256 public countFallback;
    mapping(address => uint256) public receiveBalace;
    mapping(address => uint256) public fallbackBalance;

    function addSome() public {
        countReceive += 20;
        countFallback += 20;
    }

    receive() external payable {
        countReceive++;
        receiveBalace[msg.sender] += msg.value;
    }

    fallback() external payable {
        countFallback++;
        fallbackBalance[msg.sender] += msg.value;
    }
}

// how you can call the fun  which is not available in contract

contract Test5 {
    function callTestFun(address _address, string memory _signature) public {
        (bool success, ) = _address.call(
            abi.encodeWithSignature(_signature)
        );
        require(success);
    }
}
