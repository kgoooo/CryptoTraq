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
	const dayGraphData = `https://api.nexchange.io/en/api/v1/price/${crypto}${intl}/history/?hours=24&data_points=49`;
	return axios
		.get(dayGraphData)
		.then((res) => {
			return res;
		}, err => console.log("Error retreiving graph data.")
	)
}

const graphPopulateMobile24 = (crypto, intl) => {
	const dayGraphData = `https://api.nexchange.io/en/api/v1/price/${crypto}${intl}/history/?hours=24&data_points=13`;
	return axios
		.get(dayGraphData)
		.then((res) => {
			return res;
		}, err => console.log("Error retreiving graph data.")
	)
}

export default {
  onAppLoad,
  exchangeSearch,
  graphPopulate,
  graphPopulateMobile24
};
