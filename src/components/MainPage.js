import React, { Component } from 'react';
import CryptoTraq from './CryptoTraq';
import CryptoAPICalls from '../api/CryptoAPICalls';
import Currencies from './Currencies';

class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cryptoList: [],
      dontShow: true,
      intlList: [],
      selectedCrypto: null,
      selectedIntl: null,
      showingExchangeRate: false,
      showingExchangeError: false,
      showingCurrencyList: false,
      exchangeRate: 0,
      dataSet: []
    };
  }
  componentWillMount() {
    CryptoAPICalls.onAppLoad().then(res => {
      this.setState({
        cryptoList: res.cryptoList,
        intlList: res.intlList,
        selectedCrypto: res.cryptoList[0].code,
        selectedIntl: res.intlList[0].code
      });
    });
	}
	
  handleExchangeSearch = (crypto, intl) => {
    CryptoAPICalls.exchangeSearch(
      this.state.selectedCrypto,
      this.state.selectedIntl
    ).then(res => {
      this.setState({
        showingExchangeRate: true,
        exchangeRate: res.data[0].ticker.ask
      });
    });
	};
	
  handleCryptoChange = e => {
    console.log(e.target.value);
    this.setState({
      selectedCrypto: e.target.value,
      showingExchangeRate: false,
      showingExchangeError: false,
      exchangeRate: 0,
      dataSet: []
    });
  };
  handleIntlChange = e => {
    console.log(e.target.value);
    this.setState({
      selectedIntl: e.target.value,
      showingExchangeRate: false,
      showingExchangeError: false,
      exchangeRate: 0,
      dataSet: []
    });
  };

  render() {
    return (
      <div>
        <h1>Main PAGE</h1>
        <CryptoTraq
					cryptoList={this.state.cryptoList}
					dataSet={this.state.dataSet}
					exchangeRate={this.state.exchangeRate}
					intlList={this.state.intlList}
					selectedCrypto={this.state.selectedCrypto}
					selectedIntl={this.state.selectedIntl}
					showingExchangeError={this.state.showingExchangeError}
					showingExchangeRate={this.state.showingExchangeRate}
					handleCryptoChange={this.handleCryptoChange}
					handleIntlChange={this.handleIntlChange}
					handleExchangeSearch={this.handleExchangeSearch}
        />
      </div>
    );
  }
}
	
	// {!this.state.showingCurrencyList ? <CryptoTraq /> : <Currencies />}

	// <CryptoTraq
	// 				cryptoList={this.state.cryptoList}
					// intlList={this.state.intlList}	
	// 				handleCryptoChange={handleCryptoChange}
	// 				handleIntlChange={handleIntlChange}
	// />

export default MainPage;