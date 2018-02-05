import React from 'react';

const Currencies = (props) => {
	const cryptoList = props.cryptoList;
	const intlList = props.intlList;
	return (
		<div>
      <div>
				<ul>{cryptoList.map(c => <li key={c.code}>{c.name} - {c.code}</li>)}</ul>
        <ul>{intlList.map(i => <li key={i.code}>{i.name}</li>)}</ul>
      </div>
		</div>
	)
}

export default Currencies;