import React from 'react';

const ExchangeResult = (props) => {
	let showRate;
	if(props.rate !== 0){
		showRate = <h3 className="rate__text">The exchange rate per {props.crypto} is <span className="rate__span">{props.rate > 1 ? Math.round(props.rate) : props.rate}</span> {props.intl}</h3>
	}
	if(props.excError === true) {
		console.log("banans");
		showRate = <h3 className="rate__text">The exchange rate could not be calculated for these currencies, please try another option.</h3>
	}
	return(
		<div className="rate">
			{showRate}
		</div>
	)
}

export default ExchangeResult;