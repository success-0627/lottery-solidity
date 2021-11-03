import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Card, Button } from 'semantic-ui-react';

import { Link } from 'routes';
import Layout from 'comps/layout';
import { AppCtx } from 'utils/app-state';

const CampaignIndex = (props) => {
	const [campaigns, setCampaigns] = useState([]);
	const { campaignFactorySC } = useContext(AppCtx);

	useEffect(() => {
		if (!campaignFactorySC) return;

		campaignFactorySC.methods
			.getDeployedCampaigns()
			.call().then(setCampaigns);
	}, [campaignFactorySC]);

	const renderCampaigns = useCallback(() => {
		console.log(campaigns);

		const items = campaigns.map(address => {
			return {
				header: address,
				description: (
					<Link route={`/campaigns/${address}`}>
						<a>View Campaign</a>
					</Link>
				),
				fluid: true
			};
		}, []);

		return <Card.Group items={items} />;
	}, [campaigns]);

	return (
		<Layout>
			<div>
				<h3>Open Campaigns</h3>

				<Link route="/campaigns/new">
					<a>
						<Button
							floated="right"
							content="Create Campaign"
							icon="add circle"
							primary
						/>
					</a>
				</Link>

				{renderCampaigns()}
			</div>
		</Layout>
	);
}
export default CampaignIndex;
