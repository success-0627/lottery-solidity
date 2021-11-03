import React from "react";
import _ from "lodash";

export const AppCtx = React.createContext({});
export const getSmartContract = (SC, web3, networkId, scAddr) => {
	if (!networkId && !scAddr) {
		return undefined;
	}

	if (networkId) {
		const deployedNetwork = SC.networks[networkId];
		return new web3.eth.Contract(
			SC.abi,
			deployedNetwork && deployedNetwork.address,
		);
	}

	return new web3.eth.Contract(SC.abi, scAddr);
};
