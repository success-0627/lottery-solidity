import React from "react";

export const AppCtx = React.createContext({});
export const getSmartContract = (web3, networkId, SC) => {
	const deployedNetwork = SC.networks[networkId];

	return new web3.eth.Contract(
		SC.abi,
		deployedNetwork && deployedNetwork.address,
	);
};
