require('dotenv').config();
const Lottery = artifacts.require("Lottery");

module.exports = function (deployer, network, accounts) {
  let addr = accounts[0];
  if (network === 'ropsten') {
    addr = process.env.ETHERSCAN_DEPLOY_ADDR;
  }
  deployer.deploy(
    Lottery,
    {
      overwrite: true,
      gas: 1000000,
      from: addr,
    }
  );
};
