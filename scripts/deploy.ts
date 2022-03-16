// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";
import { Greeter, Greeter__factory } from "../typechain";

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const Greeter:Greeter__factory = await ethers.getContractFactory("Greeter");
  const greeter:Greeter = await Greeter.deploy("Hello, Hardhat!");
  // const greeter:Greeter = await Greeter.attach("0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512");

  await greeter.deployed();

 

  console.log("Greeter deployed to:", greeter.address);
  console.log('num =',  (await greeter.num()).toString())
  console.log('num =',   (await greeter.update(44)).toString())

  console.log('check sender address=',await greeter.CheckSenderAddress())


  console.log('sum of two number=',(await greeter.sumOfTwoNum()).toString())
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
