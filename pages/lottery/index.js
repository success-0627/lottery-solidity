import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useAsyncMemo } from 'use-async-memo'
import _ from 'lodash';
import { Container, Button, Divider, Input } from 'semantic-ui-react';

import Layout from 'components/layout';
import { AppCtx } from 'utils/app-state';


export default props => {
	const { web3, lotterySC } = useContext(AppCtx);

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
				<Container className="card-container purple-container" header="Lottery">
					<h1>Lottery Contract</h1>
					<p>Contract Manager: {manager}</p>
					<p>Current players: {players.length}</p>
					<p>Total Balance: {web3.utils.fromWei(balance, 'ether')} ether</p>
					<Divider type="dashed" />
					<form onSubmit={onSubmut}>
						<h4>Want to try your luck?</h4>
						<Input fluid
							action='Enter'
							placeholder='Amount of ether to enter'
							onChange={event => setEnterValue(event.target.value)} />
					</form>
					<Divider type="dashed" />
					<h4>Ready to pick winner?</h4>
					<Button onClick={onClick} label="Pick a winner" />
					<Divider />
					<h4>{message}</h4>
				</Container>
			</div >
		</Layout>
	);
};