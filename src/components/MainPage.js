// Cleaned up the bottom to remove excess code.  Added comments for methods  -Radium Branch

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
			isMobile: null,
      selectedCrypto: null,
      selectedIntl: null,
      showingExchangeRate: false,
      showingExchangeError: false,
      showingCurrencyList: false,
      exchangeRate: 0,
      dataSet: []
    };
  }
  //  Fetches the available currencies from the API before the component loads.
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
	/*  Once the component mounts, it checks to see if the user is on a small screen to later
		  allow for the graph to be displayed properly and sets the state accordingly. */
	componentDidMount() {
		let width = window.innerWidth || document.body.clientWidth;
		if (width < 500) {
			this.setState({
        isMobile: true
      });
		} else {
			this.setState({
        isMobile: false
      });
		}
	}
	/*	Once the user selects the currencies to compare, they click the track button and this
			method is called.  It starts the api call to get the exchange rate.  If sucessful,
			the state is updated to reflect success and the exchange rate is shown.
			If there is an error, error message is shown with the state updated to reflect this.
	*/
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
  /*
  		This method begins the API call to get the data for the graph and adds it to the dataSet
  		and sets it in the state.
  		If the user is on a smaller device, the API call is different, it will return fewer data
  		points to make a graph that's easier to view on a small screen.
   */
	handleGraphPopulate = (crypto, intl) => {
		if(this.state.isMobile){
			CryptoAPICalls.graphPopulateMobile24(this.state.selectedCrypto, this.state.selectedIntl).then(
        res => {
          let dailyDataSet = [];
          res.data.forEach(d => {
            dailyDataSet.push({
              zuluTime: d.created_on,
              unixTime: d.unix_time,
              rate: d.ticker.bid
            });
          });
          this.setState({ dataSet: dailyDataSet });
        }
      );
		} else if(!this.state.isMobile){
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
	}
	/*
			This resets the state to a default state when the user changes their choice in currencies.
			Its to help make the correct API calls again for a new set of data.
	 */
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
  /*
  		This is to toggle between the two views of the app.  When clicking on one button
  		the state is toggled to show the other view.  Main view is for the comparing
  		currencies.  the other view is to see the supported currencies.
   */
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


export default MainPage;