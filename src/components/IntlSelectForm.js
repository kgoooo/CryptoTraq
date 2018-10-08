/*  I refactored this to be a sub component for the new SelectionForm component.
		Once again I realized that to keep the code DRY I needed to refactor the selection
		components to make them more reusable.  This now gets passed into Selection form
		to render the proper content for the select form elements.
*/
/*
	I have added the delay and animation styles to this component, which are passed in
	via props from the CryptoTrack component.
 */
import React from 'react';
import Radium from 'radium';
import RadiumVars from '../RadiumVariables';

const IntlSelectForm = props => {
	return (
				<select style={[styles.selectForm__form, props.delay, props.anim]}>
					{props.list.map(intl => (
						<option key={intl.code} value={intl.code}>{intl.code}</option>
					))}
				</select>
	)
};

//  Radium styles
const styles = {
	selectForm__form: {
		backgroundColor: RadiumVars.color.colorPrimaryDarkBlue,
		border: `2px solid ${RadiumVars.color.colorPrimaryBlue}`,
		borderRadius: '8px',
		color: RadiumVars.color.colorPrimaryLightBlue,
		fontSize: 'inherit',
		height: '32px',
		outline: 'none'
	}
};

export default Radium(IntlSelectForm);
