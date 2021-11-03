import Web3 from "web3";

export default () => new Promise((resolve, reject) => {
	// Wait for loading completion to avoid race conditions with web3 injection timing.
	/*
	if (window.ethereum) {
		const web3 = new Web3(window.ethereum);
		try {
			// Request account access if needed
			await window.ethereum.enable();
			// Accounts now exposed
			resolve(web3);
			return;
		} catch (error) {
			reject(error);
		}
	}

	if (window.web3) {
		const web3 = new Web3(window.web3.currentProvider);
		console.log("Injected web3 detected.");
		resolve(web3);
		return;
	}
	*/
	// Fallback to localhost; use dev console port by default...
	const provider = new Web3.providers.HttpProvider(
		"http://localhost:7545"
	);
	const web3 = new Web3(provider);
	console.log("No web3 instance injected, using Local web3.");
	resolve(web3);
});
