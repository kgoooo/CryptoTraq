import React from 'react';

const Currencies = (props) => {
	const cryptoList = props.cryptoList;
	const intlList = props.intlList;
	return <div className="currencies">
      <div className="row">
        <div className="col-1-of-2">
          <div className="currencies--center">
            <p className="currencies__label">Cryptocurrencies</p>
            <ul className="currencies__list">
              {cryptoList.map(c => (
                <li className="currencies__item" key={c.code}>
                  {c.name} - {c.code}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-1-of-2">
          <div className="currencies--center">        
            <p className="currencies__label">International currencies</p>
            <ul className="currencies__list currencies__list--columns">
              {intlList.map(i => <li className="currencies__item" key={i.code}>
                  {i.name}
                </li>)}
            </ul>
          </div>
        </div>
      </div>
    </div>;
}

export default Currencies;