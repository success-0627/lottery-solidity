const Lottery = artifacts.require('Lottery');

let lotterySC;

contract('Lottery contract', accounts => {
  before(async () => {
    lotterySC = await Lottery.deployed();
  });

  it('deploy a contact', () => {
    console.log(`Contract Address => ${lotterySC.address}`);
    assert(lotterySC.address);
  });

  const enterGame = async (addr, ether = '0.02') => {
    await lotterySC.enter(
      {
        from: addr,
        value: web3.utils.toWei(ether, 'ether'),
      }
    );
  };

  it('allows an account to enter', async () => {
    await enterGame(accounts[1]);

    const players = await lotterySC.getPlayers({ from: accounts[0] });
    assert.equal(players[0], accounts[1]);
    assert.equal(players.length, 1);
  });

  it('allows multiple accounts to enter', async () => {
    await Promise.all(
      [3, 4, 5].map(idx => accounts[idx]).map(async addr => {
        await enterGame(addr);
      })
    );
    const players = await lotterySC.getPlayers({ from: accounts[0] });
    assert.equal(players.length, 4); // Not 3, Because of above a testing status still keeping
  });

  it('requires a minimum amount of ether to enter', async () => {
    try {
      await enterGame(addr[6], '0');
      assert(false);
    } catch (err) {
      assert(err);
    }
  });

  it('only manager can call pickWinner', async () => {
    try {
      await lotterySC.pickWinner({
        from: accounts[2]
      });
      assert(false)
    } catch (err) {
      assert(err)
    }
  });

  it('sends money to the winner and resets the players array', async () => {
    await Promise.all(
      [3, 4, 5].map(idx => accounts[idx]).map(async addr => {
        await enterGame(addr);
      })
    );
    const balance0 = await web3.eth.getBalance(lotterySC.address);
    console.log(`Entered balance = ${balance0}`);
    await lotterySC.pickWinner({ from: accounts[0] });
    const balance1 = await web3.eth.getBalance(lotterySC.address);
    console.log(`Final balance = ${balance1}`);

    assert.equal(0, balance1);
  });
});