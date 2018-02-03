import React, { Component } from 'react';
import axios from 'axios';

const currencyURI = "https://api.nexchange.io/en/api/v1/currency/?format=json";

class CTAPI extends Component {
	componentDidMount() {
		axios.get(currencyURI)
			.then((res) => {
				let cryptoList = [];
				let intlList = [];
				console.log("Currency request successful");
				// console.log(res);
				res.data.forEach(currency => {
					if(currency.is_crypto === true){
						cryptoList.push({name: currency.name, code: currency.code})
					} else{
						intlList.push({name: currency.name, code: currency.code});
					}
				})
				this.setState({
					cryptoList: cryptoList,
					intlList: intlList
				})
				console.log("cryptoList  VARIABLE - ", cryptoList);
        console.log("intlList VARIABLE - ", intlList);
			}, (err) => {
				console.log("Currency request unsucsessful");
			})
	}
	render(){
		return (
			<div>
				<div>loading...</div>
			</div>
		)
	}
}

export default CTAPI;