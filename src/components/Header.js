import React from 'react';
import SupportedCurrencies from './SupportedCurrencies';
import { BrowserRouter as Router, Route, Link, BrowserRouter } from "react-router-dom";


const Header = (props) => {
	return (
    <div className="main__flex">
      <div className="header">
        <h1 className="header__title" onClick={props.handleHideCurrencyList}>CryptoTraq</h1>
      </div>
      <div className="supportedCurr">
        <button className="btn btn--light" onClick={props.handleShowCurrencyList}>
          Supported currencies
        </button>
      </div>
    </div>
  )
}

export default Header;