import { ethers } from "hardhat";
import { Test4__factory } from "../typechain/factories/Test4__factory";
import { Test5__factory } from "../typechain/factories/Test5__factory";
import { Test4 } from "../typechain/Test4";
import { Test5 } from "../typechain/Test5";


async function main() {

    // We get the contract to deploy
    const [owner, addr, addr2] = await ethers.getSigners()

    const Test4: Test4__factory = await ethers.getContractFactory("Test4");
    const test4: Test4 = await Test4.deploy();

    await test4.deployed();

    ///// if you will send any funds and ether then receive function gets call, and
    ///// if you will send any funds and ether and in contract receive function is not present then fallback function gets call but it' give us warnings, and  
    /// if you will send data and any funds and ether as well as transaction then fallack fnction gets call


    console.log('contract address', await test4.address)
    console.log('Balance Of Contract=', (await ethers.provider.getBalance(test4.address)).toString())

/*
    console.log('countReceive before sendTransaction', (await test4.countReceive()).toString())
    console.log('countFallback before sendTransaction', (await test4.countFallback()).toString())
    console.log('receiveBalace before receiveBalace', await (await test4.receiveBalace(addr.address)).toString())
    console.log('countFallback before fallbackBalance', (await test4.fallbackBalance(addr.address)).toString())

    // const transaction1 = await addr.sendTransaction({
    //     to: test4.address,
    //     value: ethers.utils.parseEther('2')
    // })
    //with data fallback gets call 
    const transaction1 = await addr.sendTransaction({
        to: test4.address,
        value: ethers.utils.parseEther('2'),
        data: "0x3233"
    })

    console.log('/////// after')

    console.log('Balance Of Contract=', (await ethers.provider.getBalance(test4.address)).toString())
    console.log('countReceive before sendTransaction', (await test4.countReceive()).toString())
    console.log('countFallback before sendTransaction', (await test4.countFallback()).toString())
    console.log('receiveBalace before receiveBalace', await (await test4.receiveBalace(addr.address)).toString())
    console.log('countFallback before fallbackBalance', (await test4.fallbackBalance(addr.address)).toString())

    */




    // how you can call the fun which is not available

    const Test5: Test5__factory = await ethers.getContractFactory("Test5");
    const test5: Test5 = await Test5.deploy();

    await test5.deployed();


    console.log('contract address', await test5.address)
    console.log('Balance Of Contract=', (await ethers.provider.getBalance(test4.address)).toString())


    console.log('countReceive before sendTransaction', (await test4.countReceive()).toString())
    console.log('countFallback before sendTransaction', (await test4.countFallback()).toString())
    console.log('receiveBalace before receiveBalace', await (await test4.receiveBalace(addr.address)).toString())
    console.log('countFallback before fallbackBalance', (await test4.fallbackBalance(addr.address)).toString())
    

  //from contract5 callTestFun() will gets call, when callback will call it'll try to call helloWorld from contract5 to contract4, and
  //--> in contract4 helloWorld() does not exist then it'll call fallback

    // await test5.callTestFun(test4.address)

    /// addSome will call dynamically in contract4 from contract5

    await test5.callTestFun(test4.address, "addSome()")

    console.log('/////// after')

    console.log('Balance Of Contract=', (await ethers.provider.getBalance(test4.address)).toString())
    console.log('countReceive before sendTransaction', (await test4.countReceive()).toString())
    console.log('countFallback before sendTransaction', (await test4.countFallback()).toString())
    console.log('receiveBalace before receiveBalace',  (await test4.receiveBalace(addr.address)).toString())
    console.log('countFallback before fallbackBalance', (await test4.fallbackBalance(addr.address)).toString())



}




main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});