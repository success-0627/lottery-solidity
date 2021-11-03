import React, { useMemo, useContext, useCallback, useEffect, useState } from 'react';
import { Form, Button, Message, Input } from 'semantic-ui-react';
import { useRouter } from 'next/router';

import { Link, Router } from 'routes';
import Layout from 'comps/layout';
import { getSmartContract, AppCtx } from 'utils/app-state';
import Campaign from 'sc/Campaign.json';

export default function RequestNew() {
	const router = useRouter();
	const { web3, accounts } = useContext(AppCtx);
	const campaignSC = useMemo(() => {
		return getSmartContract(
			Campaign,
			web3, undefined,
			router.query.address
		);
	}, [web3]);

	const [value, setValue] = useState('');
	const [description, setDescription] = useState('');
	const [recipient, setRecipient] = useState('');
	const [loading, setLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');

	const onSubmit = useCallback(async event => {
		event.preventDefault();
		setLoading(true);
		setErrorMessage('');

		try {
			await campaignSC.methods
				.createRequest(description, web3.utils.toWei(value, 'ether'), recipient)
				.send({ from: accounts[0] });

			Router.pushRoute(`/campaigns/${campaignSC.options.address}/requests`);
		} catch (err) {
			setErrorMessage(err.message);
		}
		setLoading(false);
	}, [campaignSC, value, recipient]);

	return (
		<Layout>
			<Link route={`/campaigns/${campaignSC.options.address}/requests`}>
				<a>Back</a>
			</Link>
			<h3>Create a Request</h3>
			<Form onSubmit={onSubmit} error={!!errorMessage}>
				<Form.Field>
					<label>Description</label>
					<Input
						value={description}
						onChange={event => setDescription(event.target.value)}
					/>
				</Form.Field>

				<Form.Field>
					<label>Value in Ether</label>
					<Input
						value={value}
						onChange={event => setValue(event.target.value)}
					/>
				</Form.Field>

				<Form.Field>
					<label>Recipient</label>
					<Input
						value={recipient}
						onChange={event => setRecipient(event.target.value)}
					/>
				</Form.Field>

				<Message error header="Oops!" content={errorMessage} />
				<Button primary loading={loading}>
					Create!
				</Button>
			</Form>
		</Layout>
	);
};
