require('dotenv').config();
const Inbox = artifacts.require("Inbox");

module.exports = function (deployer, network, accounts) {
  let addr = accounts[0];
  if (network === 'ropsten') {
    addr = process.env.ETHERSCAN_DEPLOY_ADDR;
  }
  deployer.deploy(
    Inbox,
    'Hi there!',
    {
      overwrite: true,
      gas: 4612388,
      from: addr,
    }
  );
};
