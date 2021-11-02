import React, { Fragment, useCallback, useContext, useEffect, useState } from 'react';
import PrimeReact from 'primereact/api';

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import '~/App.css';
import getWeb3 from '~/common/getWeb3';
import LotteryPage from '~/pages/lottery.page';
import CampaignPage from '~/pages/campaign.page';

const App = props => {
  const web3 = useAsyncMemo(getWeb3, []);

  useEffect(() => {
    PrimeReact.ripple = true;
    PrimeReact.autoZIndex = true;
    PrimeReact.appendTo = 'self';
    PrimeReact.zIndex = {
      modal: 1100,    // dialog, sidebar
      overlay: 1000,  // dropdown, overlaypanel
      menu: 1000,     // overlay menus
      tooltip: 1100,   // tooltip
      toast: 1200     // toast
    };
  });

  if (!web3) {
    // TODO: Loader showing
    return
  }

  return (
    <MyCtx.Provider value={{ web3 }}>
      <div className="App p-grid">
        <Fragment className="p-col">
          <LotteryPage />
        </Fragment>
        <Fragment className="p-col">
          <CampaignPage />
        </Fragment>
      </div>
    </MyCtx.Provider>
  );
}

export default App;
