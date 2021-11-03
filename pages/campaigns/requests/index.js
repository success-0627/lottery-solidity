import React, { useMemo, useContext, useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import _ from 'lodash';
import { Button, Table } from 'semantic-ui-react';

import { Link } from 'routes';
import Layout from 'comps/layout';
import Campaign from 'sc/Campaign.json';
import RequestRow from 'comps/request-row';
import { getSmartContract, AppCtx } from 'utils/app-state';

export default function RequestIndex(props) {
	const router = useRouter();
	const { web3 } = useContext(AppCtx);
	const campaignSC = useMemo(() => {
		return getSmartContract(
			Campaign,
			web3, undefined,
			router.query.address
		);
	}, [web3]);


	const [requestCount, setRequestCount] = useState('');
	const [approverCount, setApproverCount] = useState('');
	const [requests, setRequests] = useState([]);

	useEffect(() => {
		Promise.all([
			campaignSC.methods.requestCount().call(),
			campaignSC.methods.approverCount().call(),
		]).then(([reqCount, appCount]) => {
			setRequestCount(reqCount);
			setApproverCount(appCount);
			return Promise.all(
				_.chain(reqCount)
					.toInteger()
					.range()
					.map(idx => campaignSC.methods.requests(idx).call())
					.value()
			);
		}).then(setRequests);
	}, [campaignSC]);

	const renderRows = useCallback(() => {
		return requests.map((request, index) => {
			return (
				<RequestRow
					contract={campaignSC}
					key={index}
					id={index}
					request={request}
					approverCount={approverCount}
				/>
			);
		});
	}, [requests]);

	const { Header, Row, HeaderCell, Body } = Table;

	return (
		<Layout>
			<h3>Requests</h3>
			<Link route={`/campaigns/${campaignSC.options.address}/requests/new`}>
				<a>
					<Button primary floated="right" style={{ marginBottom: 10 }}>
						Add Request
					</Button>
				</a>
			</Link>
			<Table>
				<Header>
					<Row>
						<HeaderCell>ID</HeaderCell>
						<HeaderCell>Description</HeaderCell>
						<HeaderCell>Amount</HeaderCell>
						<HeaderCell>Recipient</HeaderCell>
						<HeaderCell>Approval Count</HeaderCell>
						<HeaderCell>Approve</HeaderCell>
						<HeaderCell>Finalize</HeaderCell>
					</Row>
				</Header>
				<Body>{renderRows()}</Body>
			</Table>
			<div>Found {requestCount} requests.</div>
		</Layout>
	);
}