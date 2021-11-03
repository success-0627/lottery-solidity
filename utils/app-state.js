require('dotenv').config();
import React from "react";
import _ from "lodash";

export const AppCtx = React.createContext({});
export const getSmartContract = (SC, web3, networkId, scAddr) => {
	if (!networkId && !scAddr) {
		return undefined;
	}
	if (networkId) {
		scAddr = deployedNetwork && deployedNetwork.address;
	}
	return new web3.eth.Contract(SC.abi, scAddr);
};
