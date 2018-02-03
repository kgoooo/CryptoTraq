import React from 'react';

const CompareButton = (props) => {
	return (
		<div  className="btn--compare">
			<button className="btn btn--light" onClick={props.exchangeSearch}>Track</button>
		</div>
	)
}

export default CompareButton;