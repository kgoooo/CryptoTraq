import React from 'react';

const SupportedCurrencies = (props) => {
	return <div className="supportedCurr">
      <button className="btn btn--light" onClick={props.ShowCurrencyList}>
        Supported currencies
      </button>
    </div>;
}
export default SupportedCurrencies;