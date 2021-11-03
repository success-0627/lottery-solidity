import React, { useContext, useState, useCallback } from 'react';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import Layout from 'comps/layout';
import { Router } from 'routes';
import { AppCtx } from 'utils/app-state';


export default function CampaignNew() {
	const [minimumContribution, setMinimumContribution] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	const [loading, setLoading] = useState(false);
	const { campaignFactorySC, accounts } = useContext(AppCtx);

	const onSubmit = useCallback(async event => {
		event.preventDefault();
		setLoading(true);
		setErrorMessage('');

		try {
			await campaignFactorySC.methods
				.createCampaign(minimumContribution)
				.send({ from: accounts[0] });
			Router.pushRoute('/');
		} catch (err) {
			setErrorMessage(err.message);
		}

		setLoading(false);
	});

	return (
		<Layout>
			<h3>Create a Campaign</h3>

			<Form onSubmit={onSubmit} error={!!errorMessage}>
				<Form.Field>
					<label>Minimum Contribution</label>
					<Input
						label="wei"
						labelPosition="right"
						value={minimumContribution}
						onChange={event => setMinimumContribution(event.target.value)}
					/>
				</Form.Field>

				<Message error header="Oops!" content={errorMessage} />
				<Button loading={loading} primary>
					Create!
				</Button>
			</Form>
		</Layout>
	);
}
