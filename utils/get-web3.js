import Web3 from "web3";

export default async () => {
	// Wait for loading completion to avoid race conditions with web3 injection timing.
	if (window.ethereum) {
		const web3 = new Web3(window.ethereum);
		console.log("Window Ethereum detected.");
		return window.ethereum.enable().then(() => web3);
	}

	if (window.web3) {
		const web3 = new Web3(window.web3.currentProvider);
		console.log("Window web3 detected.");
		return web3;
	}

	// Fallback to localhost; use dev console port by default...
	const provider = new Web3.providers.HttpProvider(
		"http://localhost:7545"
	);
	const web3 = new Web3(provider);
	console.log("Using Local Web3");
	return web3;
};
