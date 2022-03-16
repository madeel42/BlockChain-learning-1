import { ethers } from "hardhat";
import { Test } from "mocha";
import { Test3, Test3__factory } from "../typechain";


async function main() {
  // We get the contract to deploy
  const [owner, addr, addr2] = await ethers.getSigners()

  const Test3: Test3__factory = await ethers.getContractFactory("Test3");
  const test3: Test3 = await Test3.deploy();

  await test3.deployed();

  console.log('owner,', await test3.owner())
  console.log('treaserAddress before =,', await test3.treaserAddress())

  console.log('test 3, update treaser address', (await test3.updateTreaserAddress(addr.address)))
  // console.log('test 3, update treaser address',  (await test3.connect(addr).updateTreaserAddress(addr.address))) //it will give error because only can owner call this fun


  console.log('treaserAddress after =,', await test3.treaserAddress())


  let Price = await test3.price();

  console.log('price before update =', Price)

  let updatePrice = await test3.updateAmount(ethers.utils.parseEther('0.01'))
  console.log('update price=', updatePrice)


  console.log('counter after update =', (await test3.counter()).toString())









}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});