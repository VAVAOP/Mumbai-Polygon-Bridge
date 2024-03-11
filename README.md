# Mumbai-Polygon-Bridge
Simple Project Of Transfering NFT(ERC271/ERC271A) Using MintBatch From ETHERIUM(Goerli) To POLYGON(Mumbai) Network Using FxPortal Bridge

## Description
This Project Will Give You Detailed View:
* Create Your NFT Images And Deploy
* To Write An Fully Functional ERC271A NFT Contract
* Deploy An Contract On Goerli NetWork
* Batch Mint Your NFT's Using (ERC271A)
* Approve Your Contract To FxBridge
* Deposit Your NFT's To Mumbai Network

## Getting Started
For Getting Started you Need An Solidity Enviornment To Work With You Can Either Use Offline Coders like [VScode](https://code.visualstudio.com/) Or You Can prefer Online IDE like [Gitpod](https://www.gitpod.io/),[Remix](https://remix.ethereum.org/)
* After You Setup Your IDE Then You Need To Create Some Cool Images For Your NFT's For That You Can Use Any Online AI Image Generaters Like [Midjourney](https://www.midjourney.com/) Or You Can Use Images That I Provided With Project
* When You Generated Your Cool Images For Your NFT's.Then You Need To Upload These Images To Get IPFS Url For Your ERC271A NFT Contract For That You Can Use Free IPFS Provider Like [Pinata](https://www.pinata.cloud/) ,Just Upload All Of Your Images To One Folder Then Upload That Folder To PINATA Sever For Getting Your IPFS Url ,Ofcourse I Have Provided My url If You Dont wanna Create your NFT's Feel Free To Use Those
* Next Is Create Your On ERC271A Contract You Can Use Contract I Provided As Template And Add Any New Functions That You Want From [ERC271Document](https://github.com/chiru-labs/ERC721A/blob/main/contracts/ERC721A.sol)
* Next Is You Want An Wallet With Test GoerliETH ,If You Dont Have One You Can Mine GoerliETH FREE!!! On [GoerliPoW](https://goerli-faucet.pk910.de/) Just Mine For Few Minutes And Withdraw It To Your Wallet To Your Account And You Are Good To GO!!!   
### Installing

* Now You Need Basi Packages To Succesfully Bridge Our NFT's Which Are:
* [Nodejs](https://nodejs.org/en/download/current)
* [HardHat][https://hardhat.org/hardhat-runner/docs/getting-started](https://hardhat.org/)
* [Npm](https://www.npmjs.com/package/npm)
* After You installed All Of Dependencies
* Then You Need To Paste Your private Key in File :(.env.example =>PRIVATE_KEY='Your Key Here')
* NOW YOU ARE ALL SET TO ROLL!!!

### Executing program

* Afeter Paste Your private Key in File :(.env.example =>PRIVATE_KEY='Your Key Here')
* You Need To Paste Your WalletAdress In These Files(mint.js,approveDeposit.js)
0. Run npm i to install dependencies
```
npm i
```
1. install openzeppelin Contracts
```
npm install @openzeppelin/contracts
```
2. Run npx hardhat run scripts/deploy.js --network goerli to deploy ERC271A contract
```
npx hardhat run scripts/deploy.js --network goerli
```
3. Paste the newly deployed contract address in the tokenAddress variable for the other scripts
(mint.js,approveDeposit.js)
4. Run npx hardhat run scripts/mint.js --network goerli to mint NFT's to your wallet
```
npx hardhat run scripts/mint.js --network goerli
```
5. Run npx hardhat run scripts/approveDeposit.js --network goerli to approve and deposit your NFT's to polygon
```
npx hardhat run scripts/approveDeposit.js --network goerli
```
6. Wait 20-30ish minutes for tokens to show on polygon account
7. Use polyscan.com to check your account for the tokens. Once they arrive, you can click on the transaction to get the contract address for polygon.
8. Use this polygon contract address for your getBalance script's tokenAddress
9. Run npx hardhat run scripts/getBalance.js --network mumbai to see the new polygon balance

## Help
Main issues That Tend To Encounter:
* Having No GoerliETH:(
 sol:)Go To [GoerliPoW](https://goerli-faucet.pk910.de/) ,Still Cant Get Contact Me
* Showing Errors Related To dependencies Like Hadhat,npm:(
   sol:) Run For Hadhat Related Problems
```
npm install --save-dev hardhat
npm install hardhat
```
npm Related Problems :(
 Download Nodejs And npm Modules
Run This Url on Any Browser You Like:)
```
https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
```
  
* If You Have To Phase Any Sort Of Dificulties Or Errors Feel Free To Approach Me I Will Be More Happy To Help You
```
iamoneofthechoosen1@gmail.com
```

## Authors

Contributors names and contact info

Dabi Known As VAVA
ex. [@Dabi](iamoneofthechoosen1@gmail.com)


## License

This project is licensed under the [VAVAOP] License - see the LICENSE.md file for details
