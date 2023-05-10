require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork:"hardhat",
  networks: {
    ganache : {
      url : "http://172.17.16.1:7545",
      accounts : ["0xee1754ad5ffcba222eca4d58fd1bea61baea37eade525808a1b9715792595c86","0x04b87d2d1e92b359735244a99ea316ee5eea4954a4f55f9609e0abd66b4e5a9a"],
      chainId : 1337
    }
  },
  solidity: "0.8.18",
};
