import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, BrowserRouter } from "react-router-dom";


const SupportedCurrencies = (props) => {
	return <div className="supportedCurr">
      <button className="btn btn--light" onClick={props.ShowCurrencyList}>
        Supported currencies
      </button>
    </div>;
}
export default SupportedCurrencies;