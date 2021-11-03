import { atom, selector } from "recoil";

export const campaignState = {
	list: atom({
		key: "campaign.list",
		default: []
	})
};