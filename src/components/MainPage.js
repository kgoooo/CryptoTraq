import React, { Component } from 'react';
import CryptoTraq from './CryptoTraq';
import CryptoAPICalls from '../api/CryptoAPICalls';

class MainPage extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
      cryptoList: [],
      dontShow: true,
      intlList: [],
			isDisplayingGraph: false,
      selectedCrypto: null,
      selectedIntl: null,
      showingExchangeRate: false,
      showingExchangeError: false,
      exchangeRate: 0,
      dataSet: []
    };
	}
	componentDidMount() {
		let res = CryptoAPICalls.onAppLoad();
		let cryptoList = res[0]
		let intlList = res[1]
		console.log(cryptoList);
		console.log(typeof(cryptoList));
		console.log(cryptoList[0]);
		this.setState({
      cryptoList: cryptoList,
      intlList: intlList,
      // selectedCrypto: cryptoList[0],
      // selectedIntl: intlList[0].code
    });
	}
	
	render(){
		return(
			<div>
				<h1>Main PAGE</h1>
				</div>
			)
		}
	}
	// <CryptoTraq />

export default MainPage;