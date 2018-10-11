import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import RadiumVars from '../RadiumVariables';

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
