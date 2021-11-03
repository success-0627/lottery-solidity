import React, { useCallback, useContext, useEffect, useMemo, useRef } from 'react';
import { Card, Grid, Button } from 'semantic-ui-react';
import { useRouter } from 'next/router';
import _ from 'lodash';
import { useAsyncMemo } from 'use-async-memo';

import Campaign from 'sc/Campaign.json';
import Layout from 'comps/layout';
import ContributeForm from 'comps/contribute-form';
import { Link } from 'routes';
import { AppCtx, getSmartContract } from 'utils/app-state';

export default function CampaignShow(props) {
	const router = useRouter();

	const { web3 } = useContext(AppCtx);
	const campaignSC = useMemo(() => {
		return getSmartContract(
			Campaign,
			web3, undefined,
			router.query.address
		);
	}, [web3])

	const summary = useAsyncMemo(async () => {
		const result = await campaignSC.methods.getSummary().call();
		console.log(JSON.stringify(result));

		const [
			minimumContribution,
			balance,
			requestsCount,
			approversCount,
			manager,
		] = result;

		return {
			minimumContribution,
			balance,
			requestsCount,
			approversCount,
			manager,
		};
	}, [campaignSC], {});

	const renderCards = useCallback(() => {
		const {
			balance,
			manager,
			minimumContribution,
			requestsCount,
			approversCount
		} = summary;

		const items = _.isEmpty(summary) ? [] : [
			{
				header: manager,
				meta: 'Address of Manager',
				description: 'The manager created this campaign and can create requests to withdraw money',
				style: { overflowWrap: 'break-word' }
			},
			{
				header: minimumContribution,
				meta: 'Minimum Contribution (wei)',
				description:
					'You must contribute at least this much wei to become an approver'
			},
			{
				header: requestsCount,
				meta: 'Number of Requests',
				description:
					'A request tries to withdraw money from the contract. Requests must be approved by approvers'
			},
			{
				header: approversCount,
				meta: 'Number of Approvers',
				description:
					'Number of people who have already donated to this campaign'
			},
			{
				header: web3.utils.fromWei(balance, 'ether'),
				meta: 'Campaign Balance (ether)',
				description: 'The balance is how much money this campaign has left to spend.'
			}
		];

		return <Card.Group items={items} />;
	}, [summary]);

	return (
		<Layout>
			<h3>Campaign Show</h3>
			<Grid>
				<Grid.Row>
					<Grid.Column width={10}>{renderCards()}</Grid.Column>

					<Grid.Column width={6}>
						<ContributeForm contract={campaignSC} />
					</Grid.Column>
				</Grid.Row>

				<Grid.Row>
					<Grid.Column>
						<Link route={`/campaigns/${router.query.address}/requests`}>
							<a>
								<Button primary>View Requests</Button>
							</a>
						</Link>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Layout>
	);
}
