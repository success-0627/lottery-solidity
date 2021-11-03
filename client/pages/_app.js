import React, { useEffect, useMemo, useRef, useState } from 'react';
import App from 'next/app';
import PrimeReact from 'primereact/api';

import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/saga-blue/theme.css';

import getWeb3 from 'utils/get-web3';
import MyCtx from 'utils/context';
import LoaderPage from 'components/loader';

const MyApp = ({ Component, pageProps }) => {
	const [context, setContext] = useState({});

	useEffect(() => {
		PrimeReact.ripple = true;
		PrimeReact.autoZIndex = true;
		PrimeReact.appendTo = 'self';
		PrimeReact.zIndex = {
			modal: 1100,    // dialog, sidebar
			overlay: 1000,  // dropdown, overlaypanel
			menu: 1000,     // overlay menus
			tooltip: 1100,   // tooltip
			toast: 1200     // toast
		};

		getWeb3().then(async web3 => {
			const networkId = await web3.eth.net.getId();
			setContext({ web3, networkId });
		});
	}, []);

	if (!context) {
		return <LoaderPage />;
	}
	return (
		<MyCtx.Provider value={context}>
			<Component {...pageProps} />
		</MyCtx.Provider>
	);
}

MyApp.getInitialProps = async (appContext) => {
	const appProps = await App.getInitialProps(appContext)
	return appProps;
}

export default MyApp;