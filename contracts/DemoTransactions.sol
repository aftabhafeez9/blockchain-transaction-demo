// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract DemoTransactions {
    // Mapping to keep track of balances
    mapping(address => uint256) public balances;

    // Event for logging transfers
    event Transfer(address indexed from, address indexed to, uint256 amount);

    // Deposit ETH into the contract
    function deposit() public payable {
        require(msg.value > 0, "Send some ETH");
        balances[msg.sender] += msg.value;
    }

    // Transfer ETH to another address (internal ledger transfer)
    function transfer(address to, uint256 amount) public {
        require(balances[msg.sender] >= amount, "Not enough balance");
        require(to != address(0), "Invalid recipient");

        balances[msg.sender] -= amount;
        balances[to] += amount;

        emit Transfer(msg.sender, to, amount);
    }

    // Withdraw ETH from contract back to wallet
    function withdraw(uint256 amount) public {
        require(balances[msg.sender] >= amount, "Not enough balance");

        balances[msg.sender] -= amount;
        payable(msg.sender).transfer(amount);
    }

    // Check balance
    function getBalance(address account) public view returns (uint256) {
        return balances[account];
    }
}
