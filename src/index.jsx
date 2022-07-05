import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Import thirdweb provider and Mumbai ChainId
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';
console.log({ChainId})
// This is the chainId the dApp will work on.
const activeChainId = ChainId.Mumbai;

// Wrap app with the thirdweb provider
ReactDOM.render(
  <React.StrictMode>
    <ThirdwebProvider desiredChainId={activeChainId}>
      <App />
    </ThirdwebProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);