import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';
import CompareButton from './CompareButton';
import Currencies from "./Currencies";
import CryptoSelectForm from './CryptoSelectForm';
// import CurrencyModal from './CurrencyModal';
import ExchangeResult from './ExchangeResult';
import Graph from './Graph';
import Header from './Header';
import IntlSelectForm from './IntlSelectForm';
import SupportedCurrencies from './SupportedCurrencies';

class CryptoTraq extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   cryptoList: [],
    //   dontShow: true,
    //   intlList: [],
		// 	isDisplayingGraph: false,
    //   selectedCrypto: null,
    //   selectedIntl: null,
    //   showingExchangeRate: false,
    //   showingExchangeError: false,
    //   exchangeRate: 0,
    //   dataSet: []
    // };
  }
  // componentDidMount() {
  //   //   Get request for the currently supported currencies.
  //   axios.get(currencyURI).then(
  //     res => {
  //       let cryptoList = [];
  //       let intlList = [];
  //       console.log("Currency request successful");
  //       // console.log(res);
  //       // Splits available currencies into crypto and international currencies.
  //       res.data.forEach(currency => {
  //         if (currency.is_crypto === true) {
  //           cryptoList.push({ name: currency.name, code: currency.code });
  //         } else {
  //           intlList.push({ name: currency.name, code: currency.code });
  //         }
  //       });
  //       // Set the state with data from API request.
  //       this.setState({
  //         cryptoList: cryptoList,
  //         intlList: intlList,
  //         selectedCrypto: cryptoList[0].code,
  //         selectedIntl: intlList[0].code
  //       });
  //       // console.log("cryptoList  VARIABLE - ", cryptoList);
  //       // console.log("intlList VARIABLE - ", intlList);
  //     },
  //     err => {
  //       console.log("Currency request unsucsessful");
  //     }
  //   );
  // }
  // handleExchangeSearch = () => {
  //   const exchangeURI = `https://api.nexchange.io/en/api/v1/price/${
  //     this.state.selectedCrypto
  //   }${this.state.selectedIntl}/latest/`;
  //   const dayGraphData = `https://api.nexchange.io/en/api/v1/price/${
  //     this.state.selectedCrypto
  //   }${this.state.selectedIntl}/history/?hours=24&data_points=48`;
  //   // GETS the current exchange rate for two currencies.
  //   axios
  //     .get(exchangeURI)
  //     .then(
  //       res => {
  //         console.log("Found conversion");
  //         console.log(res);
  //         if (res.data.length === 1) {
  //           this.setState({
  //             showingExchangeRate: true,
  //             exchangeRate: res.data[0].ticker.ask
  //           });
  //         } else {
  //           this.setState({
  //             showingExchangeRate: true,
  //             showingExchangeError: true
  //           });
  //         }
  //       },
  //       err => {
  //         console.log("Conversion failed");
  //       }
  //     )
  //     .then(
  //       () => {
  //         // GETS THE 24HR Data Set for converted currencies
  //         axios.get(dayGraphData).then(
  //           res => {
  //             let dailyDataSet = [];
  //             res.data.forEach(d => {
  //               dailyDataSet.push({
  //                 zuluTime: d.created_on,
  //                 unixTime: d.unix_time,
  //                 rate: d.ticker.bid
  //               });
  //             });
  //             this.setState({ dataSet: dailyDataSet });
  //             // console.log("Datapoint res", res);
  //             console.log(this.state.dataSet);
  //           },
  //           err => {
  //             console.log("Data set retrieval failed.");
  //           }
  //         );
  //       },
  //       err => {
  //         console.log("Data set retrieval failed.");
  //       }
  //     );
  // };
  // handleCryptoChange = e => {
  //   console.log(e.target.value);
  //   this.setState({
  //     selectedCrypto: e.target.value,
  //     showingExchangeRate: false,
  //     showingExchangeError: false,
  //     exchangeRate: 0,
  //     dataSet: []
  //   });
  // };
  // handleIntlChange = e => {
  //   console.log(e.target.value);
  //   this.setState({
  //     selectedIntl: e.target.value,
  //     showingExchangeRate: false,
  //     showingExchangeError: false,
  //     exchangeRate: 0,
  //     dataSet: []
  //   });
  // };
  

  render() {
    return (
      <div>
        <div>
          <CryptoSelectForm
            cryptoList={this.props.cryptoList}
            setCrypto={this.props.handleCryptoChange}
          />
          <p className="main__arrow">&rarr;</p>
          <IntlSelectForm
            intlList={this.props.intlList}
            setIntl={this.props.handleIntlChange}
          />
          <CompareButton exchangeSearch={this.props.handleExchangeSearch} />
        </div>
        {this.props.showingExchangeRate === true ? (
          <ExchangeResult
            crypto={this.props.selectedCrypto}
            intl={this.props.selectedIntl}
            rate={this.props.exchangeRate}
            excError={this.props.showingExchangeError}
          />
        ) : null}
        <Graph
          cryptoData={this.props.dataSet}
          crypto={this.props.selectedCrypto}
        />
			</div>
    );
  }
}

export default CryptoTraq;