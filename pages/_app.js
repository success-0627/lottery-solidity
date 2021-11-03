import React, { useEffect, useState } from 'react';
import App from 'next/app';
import PrimeReact from 'primereact/api';
import { RecoilRoot } from 'recoil';

import 'semantic-ui-css/semantic.min.css'

import getWeb3 from 'utils/get-web3';
import MyCtx from 'utils/context';
import LoaderPage from 'components/loader';

const MyApp = ({ Component, pageProps }) => {
	const [context, setContext] = useState({});

	useEffect(() => {
		getWeb3().then(async web3 => {
			const networkId = await web3.eth.net.getId();
			setContext({ web3, networkId });
		});
	}, []);

	if (!context) {
		return <LoaderPage />;
	}
	return (
		<RecoilRoot>
			<MyCtx.Provider value={context}>
				<Component {...pageProps} />
			</MyCtx.Provider>
		</RecoilRoot>
	);
}

MyApp.getInitialProps = async (appContext) => {
	const appProps = await App.getInitialProps(appContext)
	return appProps;
}

export default MyApp;