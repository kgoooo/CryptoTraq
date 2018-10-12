import React from 'react';
import Button from './Button'
import Radium from 'radium'
import RadiumVars from '../RadiumVariables';

const GraphOptionsBar = (props) => {
	return (
		<div>
				<button
					style={styles.btn__secondary}
					onClick={props.handleRangeZeroChange}>
					{props.rangeContent}
				</button>
		</div>
	)
};

const styles = {
	btn__secondary: {
		border: `2px solid ${RadiumVars.color.colorPrimaryBlue}`,
		background: 'transparent',
		borderRadius: '8px',
		color: RadiumVars.color.colorPrimaryBlue,
		fontSize: '14px',
		fontWeight: '300',
		padding: '.4rem 2rem',
		marginLeft: '32px'
	}
};

export default Radium(GraphOptionsBar);