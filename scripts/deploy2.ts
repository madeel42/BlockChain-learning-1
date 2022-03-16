// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";
import { Test } from "mocha";
import { Test2__factory } from "../typechain/factories/Test2__factory";
import { Test2 } from "../typechain/Test2";

async function main() {
  // We get the contract to deploy
const [owner,addr] = await ethers.getSigners()

  const Test2: Test2__factory = await ethers.getContractFactory("Test2");
  const test2: Test2 = await Test2.connect(addr).deploy();

  await test2.deployed();

  console.log('ArrayFun fun array=', await test2.ArrayFun())

  const result = await test2.allrounds(0)
  console.log('result', result)
  console.log('fundingRequired=', result[0].toString())
  console.log('round=', result[1].toString())


  console.log('Static Array=', (await test2.c(0)).toString())
  console.log('Static Array=', (await test2.c(1)).toString())


  console.log('Dynamic Array access=', await test2.setelemToArray())

  // console.log('Dynamic Array access elem=', await (await test2.a(6)).toString())
  console.log('Dynamic Array access elem=', await (await test2.b(0)))



  //check balance using maping

  console.log('set balance in maping =',await test2.setBalancUsingMaping(23))

  console.log('check balance in maping =',(await test2.balance(addr.address)).toString())

let conversion = await test2.conversion();


console.log('conversion =',conversion)

console.log('checkResult',await test2.checkconversion(conversion))

let expconversion = await test2.expconversion();


console.log('expconversion =',expconversion)

console.log('checkexpconversion result',await test2.checkexpconversion(expconversion))

///// check ether value

const etherVal = await ethers.utils.parseEther('2');
let num = etherVal.toString();
console.log('ether value=', num);

console.log('check ethers=', ethers.utils.formatEther(num))




   
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});