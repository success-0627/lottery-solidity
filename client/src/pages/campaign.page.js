import React, { Fragment, useCallback, useEffect, useState } from 'react';
import { useAsyncMemo } from 'use-async-memo'
import 'primeflex/primeflex.css';
import _ from 'lodash';
import Factory from '~/contracts/CampaignFactory.json';

const CampaignPage = props => {
  const web3 = useContext(MyCtx);
  const factorySC = useAsyncMemo(async () => {
    if (_.isEmpty(web3)) return;
    const networkId = await web3.eth.net.getId();
    const deployedNetwork = Factory.networks[networkId];

    return new web3.eth.Contract(
      Factory.abi,
      deployedNetwork && deployedNetwork.address,
    );
  }, [web3]);

  const campaigns = useAsyncMemo(async () => {
    if (_.isEmpty(factorySC)) return;
    const ret = await factorySC.methods.getDeployedCampaigns().call();
    console.log(ret);
    return ret;
  }, [factorySC]);

  return (
    <Fragment>
    </Fragment>
  );
}

export default CampaignPage;