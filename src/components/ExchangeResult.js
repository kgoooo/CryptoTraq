/*
Added Radium to this component, nothing else changed.
 */

import React from 'react';
import PropTypes from 'prop-types'
import Radium from 'radium';
import RadiumVars from '../RadiumVariables';

const ExchangeResult = (props) => {
	let showRate;
	if(props.rate !== 0){
		showRate = <h3 style={styles.rate__text}>The exchange rate per {props.crypto} is <span style={styles.rate__span}>{props.rate > 1 ? Math.round(props.rate) : props.rate}</span> {props.intl}</h3>
	}
	if(props.excError === true) {
		showRate = <h3 style={styles.rate__text}>The exchange rate could not be calculated for these currencies, please try another option.</h3>
	}
	return(
		<div>
			{showRate}
		</div>
	)
};

ExchangeResult.propTypes = {
	crypto: PropTypes.string.isRequired,
	intl: PropTypes.string.isRequired,
	rate: PropTypes.number.isRequired,
	excError: PropTypes.bool.isRequired
};

//  Radium Styles below

const styles = {
	rate__text: {
		color: RadiumVars.color.colorPrimaryLightBlue,
		fontWeight: '300',
		fontSize: '24px',
		textAlign: 'center',
		marginBottom: '30px',

		'@media (max-width: 500px)': {
			padding: '20px',
			textAlign: 'center'
		}
	},
	rate__span: {
		fontWeight: '500'
	}
};

export default Radium(ExchangeResult);
export { ExchangeResult }