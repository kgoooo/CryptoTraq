import React from 'react';
import SupportedCurrencies from './SupportedCurrencies';
import { BrowserRouter as Router, Route, Link, BrowserRouter } from "react-router-dom";


const Header = (props) => {
	return <div className="main__flex">
      <div className="header">
        <h1 className="header__title">CryptoTraq</h1>
      </div>
      <div>
        <SupportedCurrencies onShowCurrencyList={props.handleShowCurrencyList} />
      </div>
    </div>;
}

export default Header;