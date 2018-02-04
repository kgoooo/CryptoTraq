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
	//might need to change back to DID mount to set the state..
	componentWillMount() {
		CryptoAPICalls.onAppLoad().then((res) => {
			this.setState({
				cryptoList: res.cryptoList,
				intlList: res.intlList,
				selectedCrypto: res.cryptoList[0].code,
				selectedIntl: res.intlList[0].code
			});
		});
	}
	
	render(){
		return(
			<div>
				<h1>Main PAGE</h1>
				{!this.state.showingCurrencyList ? <CryptoTraq /> : <Currencies />}
			</div>
			)
		}
	}
	// <CryptoTraq />

export default MainPage;