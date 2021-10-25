const Inbox = artifacts.require('Inbox');

let inboxSC;

contract('Inbox contract', accounts => {
  before(async () => {
    inboxSC = await Inbox.deployed();
  });

  it('deploy a contact', () => {
    console.log(`Contract Address => ${inboxSC.address}`);
    assert.ok(inboxSC.address);
  });

  it('has a default message', async () => {
    const message = await inboxSC.message.call();
    assert.equal(message, 'Hi there!');
  });

  it('change the message', async () => {
    await inboxSC.setMessage('YRH Test', { from: accounts[0] });
    const message = await inboxSC.message.call();
    assert.equal(message, 'YRH Test');
  });
});