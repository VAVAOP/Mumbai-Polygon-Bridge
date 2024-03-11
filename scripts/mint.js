// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/FuturisticFactory.sol/FuturisticFactory.json");
require('dotenv').config()

const tokenAddress = "Your Token Adress"; // place your erc20 contract address here
const tokenABI = tokenContractJSON.abi;
const walletAddress = "Your Wallet Adress"; 
 // place your public address for your wallet here

async function main() {

    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);
    
    

    
      const depositTx = await token.mint(5);
  
      // Wait for the deposit to be confirmed
      await depositTx.wait();
    
  
    console.log("NFT's Were Minted!!!!");
    console.log("You now have: " + await token.balanceOf(walletAddress) + " NFT'S");
}
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });