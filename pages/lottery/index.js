import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useAsyncMemo } from 'use-async-memo'
import _ from 'lodash';

import { Panel } from 'primereact/panel';
import { Divider } from 'primereact/divider';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

import MyCtx from 'utils/context';
import Lottery from 'contracts/Lottery.json';


export default props => {
	const { web3, networkId } = useContext(MyCtx);

	const lotterySC = useAsyncMemo(async () => {
		if (_.isEmpty(web3)) return;
		const deployedNetwork = Lottery.networks[networkId];

		return new web3.eth.Contract(
			Lottery.abi,
			deployedNetwork && deployedNetwork.address,
		);
	}, [web3]);

	const accounts = useAsyncMemo(async () => {
		if (_.isEmpty(web3)) return [];
		return await web3.eth.getAccounts();
	}, [web3], []);

	const manager = useAsyncMemo(async () => {
		if (_.isEmpty(lotterySC)) return null;
		return await lotterySC.methods.manager().call()
	}, [lotterySC]);

	const [players, setPlayers] = useState([]);
	const [balance, setBalance] = useState('');
	const [enterValue, setEnterValue] = useState('');
	const [message, setMessage] = useState('');

	useEffect(() => {
		if (_.isEmpty(lotterySC) || _.isEmpty(accounts)) return;

		Promise.all([
			lotterySC.methods.getPlayers().call(),
			web3.eth.getBalance(lotterySC.options.address),
		]).then(([players, balance]) => {
			setPlayers(players);
			setBalance(balance);
		});
	}, [lotterySC, accounts]);


	const onSubmut = useCallback(async event => {
		event.preventDefault();
		setMessage('Waiting on transaction success...');

		await lotterySC.methods.enter().send({
			from: accounts[0],
			value: web3.utils.toWei(enterValue, 'ether'),
		});

		setMessage('You have been entered!');
	});

	const onClick = useCallback(async event => {
		setMessage('Waiting on transaction success...');

		await lotterySC.methods.pickWinner().send({
			from: accounts[0]
		});

		setMessage('A winner has been picked!');
	});

	if (_.isEmpty(lotterySC) || _.isEmpty(manager) || _.isEmpty(accounts)) {
		return <div>Loading Web3, accounts, and contract...</div>;
	}

	return (
		<Layout>
			<div className="card p-4">
				<Panel className="card-container purple-container" header="Lottery">
					<h1>Lottery Contract</h1>
					<p>Contract Manager: {manager}</p>
					<p>Current players: {players.length}</p>
					<p>Total Balance: {web3.utils.fromWei(balance, 'ether')} ether</p>
					<Divider type="dashed" />
					<form onSubmit={onSubmut}>
						<h4>Want to try your luck?</h4>
						<span className="p-float-label">
							<InputText id="inputtext" value={enterValue} onChange={event => setEnterValue(event.target.value)} />
							<label htmlFor="inputtext">Amount of ether to enter</label>
						</span>
						<Button label="Enter" />
					</form>
					<Divider type="dashed" />
					<h4>Ready to pick winner?</h4>
					<Button onClick={onClick} label="Pick a winner" />
					<Divider />
					<h4>{message}</h4>
				</Panel>
			</div >
		</Layout>
	);
};