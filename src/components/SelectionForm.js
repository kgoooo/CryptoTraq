/*  I added this component to try and reduce repeated styling and code in general.  This has taken the
		place of the individual 'IntlSelectForm and CryptoSelectForm and made them into little sub components.
	  It makes for more reusable code.
*/

import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import RadiumVars from '../RadiumVariables';

const SelectionForm = (props) => {
	return (
		<div style={styles.selectForm}>
			<p style={styles.selectForm__label}>{props.formLabel}</p>
			<form onChange={props.selectionFunc}>
				{props.selectForm}
			</form>
		</div>
	)
};

SelectionForm.propTypes = {
	formLabel: PropTypes.string.isRequired,
	selectionFunc: PropTypes.func.isRequired,
	selectForm: PropTypes.element.isRequired
};

//  Radium styles

const styles = {
	selectForm: {
		display: 'inline-block',
		margin: `${RadiumVars.spacing.largeSize} ${RadiumVars.spacing.largeSize}`,

		'@media (max-width: 500px)': {
			margin: `${RadiumVars.spacing.smallSize} ${RadiumVars.spacing.smallSize}`
		}
	},
	selectForm__label: {
		fontWeight: '300'
	}
};

export default Radium(SelectionForm);
export { SelectionForm };