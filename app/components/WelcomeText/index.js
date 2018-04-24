/**
*
* WelcomeText
*
*/

import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
  font-size: 22px;
  color: rgba(0, 0, 0, 0.55);
  font-weight: 400;
`;

const H2 = styled.h2`
font-size: 16px;
margin-top:30px;
color: #b9b9b9;
font-weight: 400;
`;

function WelcomeText() {
  return (
    <div>
      <H1>Welcome to HUC Hot Wallet <br />To begin, create or restore HappyUC wallet<br /></H1>
      <H2>
        HUC Hot wallet is a zero client. Connection to HappyUC network is made via infura / local node. <br />
        Keystore is encrypted using the password. When the wallet is locked, you can only view balances. <br />
        All keys are saved inside the browser and never sent.
      </H2>
    </div>
  );
}

WelcomeText.propTypes = {

};

export default WelcomeText;
