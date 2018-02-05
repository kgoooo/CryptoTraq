import React, { Component } from 'react';
import CompareButton from './CompareButton';
import CryptoSelectForm from './CryptoSelectForm';
import ExchangeResult from './ExchangeResult';
import Graph from './Graph';
import IntlSelectForm from './IntlSelectForm';
import SupportedCurrencies from './SupportedCurrencies';

const CryptoTraq = (props) => {
  return(
    <div>
        <div>
          <CryptoSelectForm
            cryptoList={props.cryptoList}
            setCrypto={props.handleCryptoChange}
          />
          <p className="main__arrow">&rarr;</p>
          <IntlSelectForm
            intlList={props.intlList}
            setIntl={props.handleIntlChange}
          />
          <CompareButton exchangeSearch={props.handleExchangeSearch} />
        </div>
        {props.showingExchangeRate === true ? (
          <ExchangeResult
            crypto={props.selectedCrypto}
            intl={props.selectedIntl}
            rate={props.exchangeRate}
            excError={props.showingExchangeError}
          />
        ) : null}
        <Graph
          cryptoData={props.dataSet}
          crypto={props.selectedCrypto}
        />
			</div>
  )
}

export default CryptoTraq;