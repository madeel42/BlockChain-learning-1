//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Test1 {
bytes32  public nam1 = "awais";
string public name = "hamid";

function updateString(string memory _name) public {
    name = _name;
}

function convertVice() public pure returns (bytes memory) {
    string memory name2 = "ali ahsan";
    bytes memory convertedResult =  bytes(name2);
    return convertedResult;
}
function convertViceToString(bytes memory _byteNum) public pure returns (string memory) {
    string memory convertedResult =  string(_byteNum);
    return convertedResult;
}

function convertViceComparison() public pure returns (bytes memory) {
    string memory namecomp = "ali ahsan";
    string memory namecomp1 = "ali ahsan";
    // here we can concatenate two string
    string memory convertedResult =  string(abi.encodePacked(namecomp," ", namecomp1));
    bytes memory convertResult = bytes(convertedResult);
    return convertResult;
}

}