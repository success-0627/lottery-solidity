import React, { Component, useState, useCallback, useContext } from 'react';
import { Form, Input, Message, Button } from 'semantic-ui-react';

import { Router } from 'routes';
import { AppCtx } from 'utils/app-state';

export default function ContributeForm({ contract }) {
	const [value, setValue] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	const [loading, setLoading] = useState(false);
	const { web3, accounts } = useContext(AppCtx);

	const onSubmit = useCallback(async event => {
		event.preventDefault();
		setLoading(true);
		setErrorMessage('');

		try {
			await contract.methods.contribute().send({
				from: accounts[0],
				value: web3.utils.toWei(value, 'ether')
			});

			Router.replaceRoute(`/campaigns/${contract.options.address}`);
		} catch (err) {
			setErrorMessage(err.message);
		}

		setLoading(false);
		setValue('');
	});

	return (
		<Form onSubmit={onSubmit} error={!!errorMessage}>
			<Form.Field>
				<label>Amount to Contribute</label>
				<Input
					value={value}
					onChange={event => setValue(event.target.value)}
					label="ether"
					labelPosition="right"
				/>
			</Form.Field>

			<Message error header="Oops!" content={errorMessage} />
			<Button primary loading={loading}>
				Contribute!
			</Button>
		</Form>
	);
};