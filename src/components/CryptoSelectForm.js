/*  I refactored this to be a sub component for the new SelectionForm component.
		Once again I realized that to keep the code DRY I needed to refactor the selection
		components to make them more reusable.  This now gets passed into Selection form
		to render the proper content for the select form elements.
		---The main reason why there is still this component and the IntlSelectForm is
		because I couldn't get the crypto.name to render conditionally while being mapped.
*/
/*
	I added the animation and delay styles which are passed in via props from
	the CryptoTraq component.
 */
import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import RadiumVars from '../RadiumVariables';


const CryptoSelectForm = (props) =>{
	return (
		<select style={[styles.selectForm__form, props.delay, props.anim]}>
			{props.list.map(crypto => (
				<option key={crypto.code} value={crypto.code}>{crypto.name} – {crypto.code}</option>
			))}
		</select>
	)
};

CryptoSelectForm.propTypes = {
	list: PropTypes.array.isRequired,
	delay: PropTypes.object,
	anim: PropTypes.object
};

// Radium styles

const styles = {
	selectForm__form: {
		backgroundColor: RadiumVars.color.colorPrimaryDarkBlue,
		border: `2px solid ${RadiumVars.color.colorPrimaryBlue}`,
		borderRadius: '8px',
		color: RadiumVars.color.colorPrimaryLightBlue,
		fontSize: 'inherit',
		height: '32px',
		outline: 'none',
	}
};


export default Radium(CryptoSelectForm);
export { CryptoSelectForm }