import axios from 'axios';

const onAppLoad = () => {
	const currencyURI = "https://api.nexchange.io/en/api/v1/currency/?format=json";
	let cryptoList = [];
	let intlList = [];
    //   Get request for the currently supported currencies.
	 return axios.get(currencyURI).then(res => {
			console.log("Currency request successful");
			// Splits available currencies into crypto and international currencies.
			res.data.forEach(currency => {
				if (currency.is_crypto === true) {
					cryptoList.push({ name: currency.name, code: currency.code });
				} else {
					intlList.push({ name: currency.name, code: currency.code });
				}
			});
			// Set the state with data from API request.
			return {cryptoList, intlList};
		},
		err => {
			console.log("Currency request unsucsessful");
		}
	);
}

const exchangeSearch = (crypto, intl) => {
	const exchangeURI = `https://api.nexchange.io/en/api/v1/price/${crypto}${intl}/latest/`;
	return axios
		.get(exchangeURI)
		.then((res) => {
			console.log("Found conversion");
			console.log(res);
		return res;
		}, err => console.log("Error retrieving conversion.")
	)
}

const graphPopulate = (crypto, intl) => {
	const dayGraphData = `https://api.nexchange.io/en/api/v1/price/${crypto}${intl}/history/?hours=24&data_points=48`;
	return axios
		.get(dayGraphData)
		.then((res) => {
			return res;
		}, err => console.log("Error retreiving graph data.")
	)
}

// const handleExchangeSearch = () => {
	// const exchangeURI = `https://api.nexchange.io/en/api/v1/price/${this.state.selectedCrypto}${this.state.selectedIntl}/latest/`;
	// const dayGraphData = `https://api.nexchange.io/en/api/v1/price/${this.state.selectedCrypto}${this.state.selectedIntl}/history/?hours=24&data_points=48`;
	// GETS the current exchange rate for two currencies.
	// axios
	// 	.get(exchangeURI)
	// 	.then(
	// 		res => {
	// 			// console.log("Found conversion");
	// 			console.log(res);
	// 		// 	if (res.data.length === 1) {
	// 		// 		this.setState({
	// 		// 			showingExchangeRate: true,
	// 		// 			exchangeRate: res.data[0].ticker.ask
	// 		// 		});
	// 		// 	} else {
	// 		// 		this.setState({
	// 		// 			showingExchangeRate: true,
	// 		// 			showingExchangeError: true
	// 		// 		});
	// 		// 	}
	// 		// },
	// 		err => {
	// 			console.log("Conversion failed");
	// 		}
	// 	)
	// 	.then(
	// 		() => {
	// 			// GETS THE 24HR Data Set for converted currencies
	// 			axios.get(dayGraphData).then(
	// 				res => {
	// 					let dailyDataSet = [];
	// 					res.data.forEach(d => {
	// 						dailyDataSet.push({
	// 							zuluTime: d.created_on,
	// 							unixTime: d.unix_time,
	// 							rate: d.ticker.bid
	// 						});
	// 					});
	// 					this.setState({ dataSet: dailyDataSet });
	// 					// console.log("Datapoint res", res);
	// 					console.log(this.state.dataSet);
	// 				},
	// 				err => {
	// 					console.log("Data set retrieval failed.");
	// 				}
	// 			);
	// 		},
	// 		err => {
	// 			console.log("Data set retrieval failed.");
	// 		}
	// 	);
// };


export default { onAppLoad, exchangeSearch, graphPopulate}
// export default { onAppLoad, handleExchangeSearch}

// const onAppLoad = () => {
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
// };
// const handleExchangeSearch = () => {
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