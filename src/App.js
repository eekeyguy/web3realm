import React from 'react';
import './App.css';
import EthereumTraders from './EthereumTraders';
import EthereumWalletDataFetcher from './EthereumWalletDataFetcher';
import BtcTraders from './BtcTraders';
import BtcUsersDataFetcher from './BtcUsersDataFetcher';
import GasFees from './GasFees';
import AvgFeesData from './AvgFeesData';
import TransactionDataBlockChain from './TransactionDataBlockChain';
import TransactionData from './TransactionData';
import NftTradesByChain from './NftTradesByChain';
import TradesByPlatform from './TradesByPlatform';
import VolumeByPlatform from './VolumeByPlatform';
import NftLowestSalePrices from './NftLowestSalePrices';
import NftHighestSalePrices from './NftHighestSalePrices';
function App() {
  return (
    <div className="app-container">
      <div className="chart-container">
        <EthereumTraders />
      </div>
      <div className="chart-container">
          <BtcTraders />
      </div>
      <div className="chart-container">
          <TradesByPlatform/>
      </div>
      <div className="chart-container">
          <VolumeByPlatform/>
      </div>
      <div className="chart-container">
            <NftHighestSalePrices/>
      </div>
      <div className="chart-container">
        <NftLowestSalePrices/>
      </div>
      <div className="chart-container">
        <EthereumWalletDataFetcher />
      </div>
      <div className="chart-container">
        <BtcUsersDataFetcher />
      </div>
      <div className="chart-container">
        <GasFees />
      </div>
      <div className="chart-container">
        <AvgFeesData/>
    </div>
    <div className="chart-container">
        <TransactionDataBlockChain />
    </div>
    <div className="chart-container">
        <TransactionData/>
    </div>
    <div className="chart-container">
        <NftTradesByChain/>
    </div>
  </div>
  );
}

export default App;
