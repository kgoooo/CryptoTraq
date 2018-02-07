import React, { Component } from 'react';
import CryptoTraq from './CryptoTraq';
import CryptoAPICalls from '../api/CryptoAPICalls';
import Currencies from './Currencies';
import Header from './Header';

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
    CryptoAPICalls.exchangeSearch(this.state.selectedCrypto, this.state.selectedIntl)
			.then(res => {
      if (res.data.length === 1) {
					this.setState({
						showingExchangeRate: true,
						exchangeRate: res.data[0].ticker.ask
					});
				} else {
					this.setState({
						showingExchangeRate: true,
						showingExchangeError: true
					});
				}
				this.handleGraphPopulate()
			}
    );
	};
	handleGraphPopulate = (crypto, intl) => {
		CryptoAPICalls.graphPopulate(this.state.selectedCrypto, this.state.selectedIntl)
		.then((res) => {
			let dailyDataSet = [];
			res.data.forEach(d => {
				dailyDataSet.push({
					zuluTime: d.created_on,
					unixTime: d.unix_time,
					rate: d.ticker.bid
				});
			});
			this.setState({ dataSet: dailyDataSet });
		})
	}
	
  handleCryptoChange = e => {
    this.setState({
      selectedCrypto: e.target.value,
      showingExchangeRate: false,
      showingExchangeError: false,
      exchangeRate: 0,
      dataSet: []
    });
  };
  handleIntlChange = e => {
    this.setState({
      selectedIntl: e.target.value,
      showingExchangeRate: false,
      showingExchangeError: false,
      exchangeRate: 0,
      dataSet: []
    });
	};
	handleShowCurrencyList = () => {
		this.setState({showingCurrencyList: true})
	}
	handleHideCurrencyList = () => {
		this.setState({showingCurrencyList: false})
	}
	
  render() {
    return (
      <div>
				<Header 
					handleShowCurrencyList={this.handleShowCurrencyList}
					handleHideCurrencyList={this.handleHideCurrencyList}
				/>
				{!this.state.showingCurrencyList ? 
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
					/> : <Currencies 
						cryptoList={this.state.cryptoList}
						intlList={this.state.intlList}
						/>}
				
					</div>
				);
			}
		}
		
		// <CryptoTraq
		// 	cryptoList={this.state.cryptoList}
		// 	dataSet={this.state.dataSet}
		// 	exchangeRate={this.state.exchangeRate}
		// 	intlList={this.state.intlList}
		// 	selectedCrypto={this.state.selectedCrypto}
		// 	selectedIntl={this.state.selectedIntl}
		// 	showingExchangeError={this.state.showingExchangeError}
		// 	showingExchangeRate={this.state.showingExchangeRate}
		// 	handleCryptoChange={this.handleCryptoChange}
		// 	handleIntlChange={this.handleIntlChange}
		// 	handleExchangeSearch={this.handleExchangeSearch}
		// />
	// {!this.state.showingCurrencyList ? <CryptoTraq /> : <Currencies />}

	// <CryptoTraq
	// 				cryptoList={this.state.cryptoList}
					// intlList={this.state.intlList}	
	// 				handleCryptoChange={handleCryptoChange}
	// 				handleIntlChange={handleIntlChange}
	// />

export default MainPage;