const { expect } = require("chai");
const { ethers } = require("hardhat");
require("@nomicfoundation/hardhat-chai-matchers");

describe("DemoTransactions", function () {
  it("Should deposit, transfer, and withdraw", async function () {
    const [owner, user1] = await ethers.getSigners();

    const DemoTransactions = await ethers.getContractFactory("DemoTransactions");
    const demo = await DemoTransactions.deploy();
    await demo.waitForDeployment();
    
    await demo.connect(owner).deposit({ value: ethers.parseEther("1") });
    expect(await demo.getBalance(owner.address))
      .to.eq(ethers.parseEther("1"));

    await demo.connect(owner).transfer(user1.address, ethers.parseEther("0.5"));
    expect(await demo.getBalance(user1.address))
      .to.eq(ethers.parseEther("0.5"));

    await demo.connect(user1).withdraw(ethers.parseEther("0.5"));
    expect(await demo.getBalance(user1.address))
      .to.eq(0n);
  });
});
