const hre = require("hardhat");

async function main() {
  const DemoTransactions = await hre.ethers.getContractFactory("DemoTransactions");
  const demo = await DemoTransactions.deploy();
  await demo.deployed();
  console.log(`DemoTransactions deployed to: ${demo.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
