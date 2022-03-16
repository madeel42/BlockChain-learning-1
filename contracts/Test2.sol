//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Test2 {
    // enum FundingRounds {
    //     SEED,
    //     PRIVATE,
    //     PUBLIC
    // }

//mapping
//////  


mapping(address => uint256) public balance;


 uint[3] public c = [1 , 2, 3];
 uint[] public a = new uint[](7);

 struct pushData {
     string name;
     uint256 age;
 }
 pushData[] public b;

    struct FundingRoundDetails {
        uint256 fundingRequired;
        string a;
    }
    FundingRoundDetails[] public allrounds;

    function ArrayFun() public {
        FundingRoundDetails memory details = FundingRoundDetails(
            10000,
            "hy"
        );
        allrounds.push(details);
    }

    function setelemToArray() public  {
        pushData memory dataDetails = pushData(
            "adi",
            24
        );
        // a[6] = 8;
        b.push(dataDetails);
    }

    function setBalancUsingMaping(uint256 _balance) public {
        balance[msg.sender] = _balance;
    }
    

    function conversion() public pure returns (uint32) {
        /// implicit conversion
        uint16 a = 0x1234;

        uint32 b = uint32(a);
        return b;
    }
    function checkconversion(uint32 _convertedResult) public pure returns (uint16) {

        uint16 b = uint16(_convertedResult);
        return b;
    }


    function expconversion() public pure returns (uint32) {
        /// explicit conversion
        uint32 a = 0x12342232;

        uint16 b = uint16(a);
        return b;
    }
    function checkexpconversion(uint16 _convertedResult) public pure returns (uint32) {

        uint32 b = uint32(_convertedResult);
        return b;
    }

}
