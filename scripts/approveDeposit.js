// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const fxRootContractABI = require("../fxRootContractABI.json");
const tokenContractJSON = require("../artifacts/contracts/FuturisticFactory.sol/FuturisticFactory.json");

const tokenAddress = "Your TokenAddress"; // place your erc271a contract address here
const tokenABI = tokenContractJSON.abi;
const fxERC271ARootAddress = "0xF9bc4a80464E48369303196645e876c8C7D972de";
const walletAddress = "Your Wallet Address"; // place your public address for your wallet here

async function main() {

    const tokenContract = await hre.ethers.getContractAt(tokenABI, tokenAddress);
    const fxContract = await hre.ethers.getContractAt(fxRootContractABI, fxERC271ARootAddress);
    
    const approveTx = await tokenContract.setApprovalForAll(fxERC271ARootAddress, true);
    await approveTx.wait();

    console.log('Approval confirmed');
for( i=0;i<5;i++){
    const depositTx = await fxContract.deposit(tokenAddress, walletAddress, i, "0x6556");
    await depositTx.wait();
}

    console.log("Your NFT's Has Been Transfered");
    console.log("Your Current Balance Is: " + await tokenContract.balanceOf(walletAddress) + " NFT'S");
  
  }
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });