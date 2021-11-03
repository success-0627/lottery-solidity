import React, { Fragment, useContext, useCallback, useEffect, useState, useRef } from 'react';
import { useAsyncMemo } from 'use-async-memo';
import _ from 'lodash';

import { Panel } from 'primereact/panel';
import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';

import Factory from 'contracts/CampaignFactory.json';
import MyCtx from 'utils/context';
import { useRouter } from 'next/dist/client/router';


export default function CampaignList(props) {
	const router = useRouter();
	const { web3, networkId } = useContext(MyCtx);

	const factorySC = useAsyncMemo(async () => {
		if (_.isEmpty(web3)) return;
		const deployedNetwork = Factory.networks[networkId];

		return new web3.eth.Contract(
			Factory.abi,
			deployedNetwork && deployedNetwork.address,
		);
	}, [web3]);

	const campaigns = useAsyncMemo(async () => {
		if (_.isEmpty(factorySC)) return;
		return factorySC.methods.getDeployedCampaigns().call();
	}, [factorySC]);


	const leftContents = (
		<React.Fragment>
			<Button icon="pi pi-arrow-left" className="p-button-secondary p-button-text" onClick={router.back} />
			<div className="p-text-bold">Campaign</div>
		</React.Fragment>
	);

	const rightContents = (
		<React.Fragment>
			<Button icon="pi pi-plus" className="p-button-rounded" onClick={() => router.push('campaign/new')} />
		</React.Fragment>
	);

	return (
		<div className="card p-4">
			<Toolbar left={leftContents} right={rightContents} />
			<Panel className="card-container purple-container">
				<div>{campaigns}</div>
			</Panel>
		</div>
	);
};