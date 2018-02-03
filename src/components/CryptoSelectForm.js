import React, { Component } from 'react';

const CryptoSelectForm = (props) =>{
	return (
		<div className="selectForm">
      <p className="selectForm__label">Select Cryptocurrency</p>
      <form onChange={props.setCrypto}>
        <select className="selectForm__form">
          {props.cryptoList.map(crypto => (
            <option value={crypto.code} key={crypto.code}>
              {crypto.name} - {crypto.code}
            </option>
          ))}
        </select>
      </form>
		</div>
	)
}

export default CryptoSelectForm;
