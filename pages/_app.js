import React, { useState, useEffect } from 'react';
import 'semantic-ui-css/semantic.min.css'

import { getSmartContract, AppCtx } from 'utils/app-state';
import getWeb3 from 'utils/get-web3';
import Lottery from 'sc/Lottery.json';
import CampaignFactory from 'sc/CampaignFactory.json';
import _ from 'lodash';

const MyApp = ({ Component, pageProps }) => {
	const [context, setContext] = useState({});

	useEffect(() => {
		getWeb3().then(async web3 => {
			const accounts = await web3.eth.getAccounts();
			const networkId = await web3.eth.net.getId();

			const lotterySC = getSmartContract(Lottery, web3, networkId);
			const campaignFactorySC = getSmartContract(CampaignFactory, web3, networkId);

			console.log(accounts);

			setContext({
				web3,
				networkId,
				accounts,
				lotterySC,
				campaignFactorySC,
			});
		});
	}, []);

	if (_.isEmpty(context)) {
		return <div />;
	}

	return (
		<AppCtx.Provider value={context}>
			<Component {...pageProps} />
		</AppCtx.Provider>
	);
}

export default MyApp;