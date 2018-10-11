/*
		This is the new button component that I made as a result of adding Radium.  Here I can keep my code 'DRY'
		by having just one Button component.  I wanted to remove CSS files completely by using Radium for this app
		and found it to be impossible to not repeat code unless the app is truly reusable with its components.
 */

import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import RadiumVars from '../RadiumVariables';

/*  Stateless Button components, the button content and methods get passed through props now.  Before each
		button was configured manually.
*/
/*
		Added the animation style for the button, passed in through props.
 */
const Button = (props) => {
	return (
		<button
			onClick={props.onClick}
			style={[styles.btn__main, props.buttonAnimation]}
		>{props.buttonContent}</button>
	)
};

Button.propTypes = {
	onClick: PropTypes.func.isRequired,
	buttonContent: PropTypes.string.isRequired,
	buttonAnimation: PropTypes.object
};

/*  Button styles for Radium defined here and added below to the component on the export statement. */
const styles = {
	btn__main: {
		background: 'transparent',
		borderRadius: '8px',
		border: `2px solid ${RadiumVars.color.colorPrimaryLightBlue}`,
		color: RadiumVars.color.colorPrimaryLightBlue,
		fontSize: 'inherit',
		fontWeight: '300',
		padding: '.5rem 2.5rem',
		transition: 'all ease-in-out .3s',

		':hover': {
			boxShadow: `0 0 3rem ${RadiumVars.color.colorPrimaryBlue}`
		}
	}
};

export default Radium(Button);
