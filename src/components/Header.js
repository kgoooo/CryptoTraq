import React from 'react';
import SupportedCurrencies from './SupportedCurrencies';
import { BrowserRouter as Router, Route, Link, BrowserRouter } from "react-router-dom";


const Header = () => {
	return (
		<div className="main__flex">
			<div className="header">
				<Link to="/"><h1 className="header__title">CryptoTraq</h1></Link>
			</div>
			<div>
				<SupportedCurrencies />
			</div>
		</div>
	)
}

export default Header;