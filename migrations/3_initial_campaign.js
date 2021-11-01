require('dotenv').config();
const CampaignFactory = artifacts.require("CampaignFactory");

module.exports = async function (deployer, network, accounts) {
  let addr = accounts[0];
  if (network === 'ropsten') {
    addr = process.env.ETHERSCAN_DEPLOY_ADDR;
  }

  await deployer.deploy(
    CampaignFactory,
    {
      overwrite: true,
      gas: 4612388,
      from: addr,
    }
  );
};
