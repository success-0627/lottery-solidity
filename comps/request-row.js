import React, { useCallback, useContext } from 'react';
import { Table, Button } from 'semantic-ui-react';
import { AppCtx } from 'utils/app-state';

export default function RequestRow({ contract, id, request, approverCount }) {
	const { accounts, web3 } = useContext(AppCtx);

	const onApprove = useCallback(async () => {
		await contract.methods.approveRequest(id).send({
			from: accounts[0]
		});
	});

	const onFinalize = async () => {
		await contract.methods.completeRequest(id).send({
			from: accounts[0]
		});
	};


	const { Row, Cell } = Table;
	const readyToFinalize = request.approvalCount > approverCount / 2;

	return (
		<Row
			disabled={request.complete}
			positive={readyToFinalize && !request.complete}
		>
			<Cell>{id}</Cell>
			<Cell>{request.description}</Cell>
			<Cell>{web3.utils.fromWei(request.value, 'ether')}</Cell>
			<Cell>{request.recipient}</Cell>
			<Cell>
				{request.approvalCount}/{approverCount}
			</Cell>
			<Cell>
				{request.complete ? null : (
					<Button color="green" basic onClick={onApprove}>
						Approve
					</Button>
				)}
			</Cell>
			<Cell>
				{request.complete ? null : (
					<Button color="teal" basic onClick={onFinalize}>
						Finalize
					</Button>
				)}
			</Cell>
		</Row>
	);
};
