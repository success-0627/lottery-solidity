import React, { useCallback, useEffect, useState } from "react";
import { useAsyncMemo } from "use-async-memo"
import Lottery from "./contracts/Lottery.json";
import getWeb3 from "./getWeb3";

import "./App.css";

const App = props => {
  const web3 = useAsyncMemo(getWeb3, []);

  const lotterySC = useAsyncMemo(async () => {
    if (!web3) return null;
    const networkId = await web3.eth.net.getId();
    const deployedNetwork = Lottery.networks[networkId];
    return new web3.eth.Contract(
      Lottery.abi,
      deployedNetwork && deployedNetwork.address,
    );
  }, [web3]);

  const accounts = useAsyncMemo(async () => {
    if (!web3) return;
    return await web3.eth.getAccounts();
  }, [web3]);

  const manager = useAsyncMemo(async () => {
    if (!lotterySC) return null;
    return await lotterySC.methods.manager().call()
  }, [lotterySC]);

  const [players, setPlayers] = useState([]);
  const [balance, setBalance] = useState('');

  const runExample = useCallback(() => {
  }, []);

  useEffect(() => {
    if (!lotterySC || !web3.eth) return;

    console.log(lotterySC);

    Promise.all([
      lotterySC.methods.getPlayers().call(),
      web3.eth.getBalance(lotterySC.address),
    ]).then(([players, balance]) => {
      setPlayers(players);
      setBalance(balance);
    });
  }, [lotterySC]);

  if (manager) {
    return (
      <div className="App">
        <h1>Lottery Contract</h1>
        <p>
          Contract Manager: {manager}
          Current players: {players.length}
          Total Balance: {web3.utils.fromWei(balance, 'ether')} ether
        </p>
      </div>
    );
  }

  return <div>Loading Web3, accounts, and contract...</div>;
}

export default App;
