import React from 'react';

const Currencies = (props) => {
	const cryptoList = props.cryptoList;
	const intlList = props.intlList;
	return (
		<div className="currencies">
      <div className="currencies__container">
        <ul className="currencies__list">
          {cryptoList.map(c => <li className="currencies__item" key={c.code}>{c.name} - {c.code}</li>)}
        </ul>
        <ul className="currencies__list">
          {intlList.map(i => <li className="currencies__item" key={i.code}>{i.name}</li>)}
        </ul>
      </div>
		</div>
	)
}

export default Currencies;