// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";
import { Test } from "mocha";
import { Test1, Test1__factory } from "../typechain";

async function main() {
    // We get the contract to deploy
    const Test1: Test1__factory = await ethers.getContractFactory("Test1");
    const test1: Test1 = await Test1.deploy();

    await test1.deployed();

    const getName = await test1.updateString('Ali')
    console.log('Name update', getName)

    console.log('name after', await test1.name())


    console.log('nam1 in byte=', await test1.nam1())

    let convertStringToByte = await test1.convertVice();

    console.log('convert string into byte=', convertStringToByte)

    console.log('convert byte into string=', await test1.convertViceToString(convertStringToByte))
  
    let convertStringToByte1 = await test1.convertViceComparison();

    console.log('comparison  string=', convertStringToByte1)

    console.log('convert byte into string=', await test1.convertViceToString(convertStringToByte1))
    // 0x616c69

  

}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
