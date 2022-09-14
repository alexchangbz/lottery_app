require("@nomicfoundation/hardhat-toolbox");
require('@nomiclabs/hardhat-etherscan');
require("dotenv").config()

module.exports = {
  solidity: "0.8.9",
  networks: {
    mumbai: {
      url: process.env.ALCHEMY_API,
      accounts: [process.env.PRIVATE_KEY]
    }
  },
  etherscan: {
    apiKey: process.env.POLYGONSCAN_API
  }
};

// mumbai contract: 0x3E6061F09EB124aC7F40A23C86090D67C493Bc9F

// Verify
// npx hardhat verify --network mumbai 0x3E6061F09EB124aC7F40A23C86090D67C493Bc9F
