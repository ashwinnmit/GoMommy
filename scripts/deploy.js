// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const tokens = (n) =>{
  return hre.ethers.utils.parseUnits(n.toString(), "ether");
}
async function main() {
  // setup acc and variables
  let deployer,owner1;
  const NAME="Ashwin";
  const SYM = "SreeLakshmi";
  [deployer, owner1] = await hre.ethers.getSigners();

  const goMommy = await hre.ethers.getContractFactory("GoMommy");
  const goMom = await goMommy.deploy(NAME,SYM);
  await goMom.deployed();


  await goMom.connect(deployer).listDomain("Ashwin.eth",tokens(10));
  await goMom.connect(deployer).listDomain("Ash.eth",tokens(10));
  await goMom.connect(deployer).listDomain("Raman.eth",tokens(10));
  await goMom.connect(deployer).listDomain("Padma.eth",tokens(10));
  await goMom.connect(deployer).listDomain("Babu.eth",tokens(10));
  await goMom.connect(deployer).listDomain("Eshani.eth",tokens(10));
  await goMom.connect(deployer).listDomain("KuttyDadaji.eth",tokens(10));
  await goMom.connect(deployer).listDomain("ShankarDadaji.eth",tokens(10));
  await goMom.connect(deployer).listDomain("Amma.eth",tokens(10));
  await goMom.connect(deployer).listDomain("PremaAunty.eth",tokens(10));
  await goMom.connect(deployer).listDomain("AshLax.eth",tokens(10));


  const num = await goMom.count();
  console.log(num);

  const network = await hre.ethers.getDefaultProvider().getNetwork();
  console.log("Network name=", network.name);
  console.log("Network chain id=", network.chainId);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
