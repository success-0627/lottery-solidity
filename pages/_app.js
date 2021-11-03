import React from 'react';
import App from 'next/app';
import 'semantic-ui-css/semantic.min.css'

import { getSmartContract, AppCtx } from 'utils/app-state';
import getWeb3 from 'utils/get-web3';
import Lottery from 'sc/Lottery.json';
import CampaignFactory from 'sc/CampaignFactory.json';

const MyApp = ({ Component, pageProps, context }) => {
	return (
		<AppCtx value={context}>
			<Component {...pageProps} />
		</AppCtx>
	);
}

MyApp.getInitialProps = async (appContext) => {
	const appProps = await App.getInitialProps(appContext)

	const web3 = await getWeb3();
	const networkId = await web3.eth.net.getId();
	const accounts = await web3.eth.getAccounts();

	const lotterySC = getSmartContract(web3, networkId, Lottery);
	const campaignFactorySc = getSmartContract(web3, networkId, CampaignFactory);

	return {
		...appProps,
		context: {
			web3,
			networkId,
			accounts,
			lotterySC,
			campaignFactorySc,
		}
	}
};

export default MyApp;