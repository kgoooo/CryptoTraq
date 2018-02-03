import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, BrowserRouter } from "react-router-dom";


const SupportedCurrencies = (props) => {
	return (
		<div className="supportedCurr">
		<Link to="/currencies">
			<button className="btn btn--light">
				Supported currencies
			</button>
		</Link>	
		</div>
	)
}
export default SupportedCurrencies;