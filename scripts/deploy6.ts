import { ethers } from "hardhat";
import { Test6, Test6__factory } from "../typechain";



async function main() {
    // just  in video did explain withdral, i thing proper implementation of withdrawl in upcomming tutorials
    // We get the contract to deploy
    const [owner, addr, addr2] = await ethers.getSigners()

    const Test6: Test6__factory = await ethers.getContractFactory("Test6");
    const test6: Test6 = await Test6.deploy();

    await test6.deployed();


    const txt = await test6.connect(addr2).becomeRichest({ value: ethers.utils.parseEther('1') })

    console.log(txt, 'txt')

    console.log('richest',await test6.richest())

    console.log('mostSent', (await test6.mostSent()).toString())

    console.log('address',await test6.pendingWithdrawals(addr2.address))
}




main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});