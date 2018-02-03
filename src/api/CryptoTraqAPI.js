import axios from "axios";

const currencyURI = "https://api.nexchange.io/en/api/v1/currency/?format=json";

//call for fetching all available currencies
module.exports = {
	getAvailableCurrencies: () => {
		let cryptoList = [];
		let intlList = [];
		return axios.get(currencyURI).then((res) => {
			console.log("Currency request successful");
			// console.log(res);
			res.data.forEach(currency => {
				if(currency.is_crypto === true){
					cryptoList.push({name: currency.name, code: currency.code})
				} else{
					intlList.push({name: currency.name, code: currency.code});
				}
				
			});
			// console.log("cryptoList", cryptoList);
      // console.log("intlList: ", intlList);
		}, (err) => {
			console.log("Currency request unsucsessful");
		})
	}

}

