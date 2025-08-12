# blockchain-transaction-demo
This is a demo project for BlockChain Transaction. Use your wallet(metamask) private key and infura project key to start transactions. 

Follow the steps to run this project in your local server

git clone https://github.com/aftabhafeez9/blockchain-transaction-demo
cd blockchain-transaction-demo



npx hardhat node

npx hardhat run --network localhost scripts/deploy.js

create .env.local file in your root directory and add the following variable with respective values

INFURA_API_KEY=<infura_secret_key>
PRIVATE_KEY=<metamask_private_key>

npx hardhat run scripts/showAccounts.js --network sepolia

to see all accounts
npx hardhat node


to get the address of user[1]
ethers.formatEther(await ethers.provider.getBalance((await ethers.getSigners())[1].address))

sending eth to uer[1]
const [sender, receiver] = await ethers.getSigners();
await sender.sendTransaction({
  to: receiver.address,
  value: ethers.parseEther("1.0") // 1 ETH
});

checking balance of user[1]
ethers.formatEther(await ethers.provider.getBalance(receiver.address))
