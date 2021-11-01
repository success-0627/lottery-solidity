const FactorySC = artifacts.require('CampaignFactory');
const CampaignSC = artifacts.require('Campaign');

let factorySC;
let campaignAddr, campaignSC, campaignMgr;
let contributor, requester;

contract('Campaigns', accounts => {
  beforeEach(async () => {
    factorySC = await FactorySC.deployed();

    campaignMgr = accounts[0];
    contributor = accounts[1];
    requester = accounts[2];

    await factorySC.createCampaign('100', {
      from: campaignMgr
    });

    [campaignAddr] = await factorySC.getDeploayedCampaigns({
      from: campaignMgr
    });

    campaignSC = await CampaignSC.at(campaignAddr);
  });

  it('deplay a factory and a campaign', () => {
    assert.ok(factorySC.address);
    assert.ok(campaignSC.address);
  });

  it('makes caller as the campaign manager', async () => {
    const manager = await campaignSC.manager.call();
    assert.equal(campaignMgr, manager);
  });

  it('allows people to contribute money and marks them as approvers', async () => {
    await campaignSC.contribute({
      value: '200',
      from: contributor
    });

    const isContributor = await campaignSC.approvers(contributor);
    assert(isContributor);
  });

  it('requires a minimum contribution', async () => {
    try {
      await campaignSC.contribute({
        value: '5',
        from: contributor,
      })
      assert(false);
    } catch (err) {
      assert(err);
    }
  });

  it('allows a manager to make a payment request', async () => {
    const description = 'Buy batteries';
    await campaignSC.createRequest(description, '100', requester, {
      from: campaignMgr,
      gas: '1000000'
    });

    const request = await campaignSC.requests(0);
    assert.equal(description, request.description);
  });

  it('processes requests', async () => {
    await campaignSC.contribute({
      from: contributor,
      value: web3.utils.toWei('10', 'ether'),
    });

    await campaignSC.createRequest('A', web3.utils.toWei('5', 'ether'), requester, {
      from: campaignMgr,
      gas: '1000000'
    });

    await campaignSC.approveRequest(1, {
      from: contributor,
      gas: '1000000'
    });

    await campaignSC.completeRequest(1, {
      from: campaignMgr,
      gas: '1000000'
    });

    let balance = await web3.eth.getBalance(requester);
    balance = web3.utils.fromWei(balance, 'ether');
    balance = parseFloat(balance);
    console.log(`Balance ${balance}`);

    assert(balance > 104);
  });
});