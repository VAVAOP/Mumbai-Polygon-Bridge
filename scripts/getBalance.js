// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/FuturisticFactory.sol/FuturisticFactory.json");

const tokenAddress = "0xdeBf504A113c5344a754279C0A6fa326a7C22ED1"; // place your erc271a contract address here
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0xe7785AC2efB7034BBcBD841394CE8813F09E5cEC"; // place your public address for your wallet here

async function main() {

    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);

    console.log("You now have: " + await token.balanceOf(walletAddress) + " NFT'S");
  }
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });