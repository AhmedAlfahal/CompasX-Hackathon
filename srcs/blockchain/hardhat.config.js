require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
	solidity: "0.8.20",
	paths:{
	  artifacts:'./contracts/artifacts'
	},
	network:{
	  hardhat:{
		  chainId: 1337,
	  },
	}
  };
