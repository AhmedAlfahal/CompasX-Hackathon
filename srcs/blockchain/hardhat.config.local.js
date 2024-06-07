require("@nomiclabs/hardhat-ethers");
const fs = require("fs");
// Replace with the actual path to your contract JSON file
const { abi, bytecode } = require("./contracts/artifacts/contracts/OpenDoc.sol/OpenDoc.json");

task(
  "deploy",
  "Deploys contract and writes address to ./.contract",
  async (taskArgs, hre) => {
    // We get the contract to deploy
    const ContractFactory = await hre.ethers.getContractFactory(abi, bytecode);

    // Deploy the contract
    const contractInstance = await ContractFactory.deploy("0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199");

    // Await deployment to complete
    await contractInstance.deployed();

    // Write the deployed contract address to a file
    fs.writeFileSync("./.contract", contractInstance.address);

    console.log(`Contract deployed to address: ${contractInstance.address}`);
  }
);


// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

module.exports = {
  solidity: "0.7.6",
  networks: {
    hardhat: {
      // Provide a large amount of funded accounts for large scale tests
      accounts: { count: 1000 },
      chainId: 1337,
    },
  },
};
