
/* TODO: Add Moralis Authentication code */
let Moralis = require('moralis');
// In a node environment
// import { start, User, authenticate } from 'moralis/node';
const serverUrl = "https://0pdrrvslkpsk.usemoralis.com:2053/server";
const appId = "WfG94sZZpmzFgiwiNNQpoie1fgTXvDjI04AWdSAD";
start({ serverUrl, appId });
const user = await Moralis.authenticate({ 
    provider: "walletconnect", 
    mobileLinks: [
      "rainbow",
      "metamask",
      "argent",index,
      "trust",
      "imtoken",
      "pillar",
    ] 
}) 

/* Authentication code */
async function login() {
  let user = user.current();
  if (!user) {
    user = await authenticate({ signingMessage: "Log in using Moralis" })
      .then(function (user) {
        console.log("logged in user:", user);
        console.log(user.get("ethAddress"));
      })
      .catch(function (error) {
        console(error);
      });
  }
}

async function logOut() {
  await User.logOut();
  console.log("logged out");
}



class MoralisTorusProvider {

    torus = new Torus({}) 
    
    async activate() {

        this.provider = await this.torus.init(
            {
                enableLogging: true,
                network: {
                    host: "<YOUR BINANCE SPEEDY NODE>",
                    networkName: "Smart Chain - Testnet",
                    chainId: 97,
                    blockExplorer: "https://testnet.bscscan.com",
                    ticker: 'BNB',
                    tickerName: 'BNB',
                },
            })
        await this.torus.login();
        
        const MWeb3 = typeof Web3 === 'function' ? Web3 : window.Web3;
        this.web3 = new MWeb3(this.torus.provider);
        this.isActivated = true;

        return this.web3;
    }
}