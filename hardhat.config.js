require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork:"hardhat",
  chainId : 31337,
  networks: {
    ganache : {
      url : "http://172.17.16.1:7545",
      accounts : ["0x1ae6a04743ce5dfbd84048948aa882a2f185e9b08c1cdbe92252b77b32f2538a","0x02fa4ba503e549dc89ee3dc4a59e6f8831a73879165620e894d40b4991ddca59"],
      chainId : 1337
    }
  },
  solidity: "0.8.18",
};
