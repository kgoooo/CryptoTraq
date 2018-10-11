import React from 'react';
import Button from './Button'
import Radium from 'radium'
import RadiumVars from '../RadiumVariables';

const GraphOptionsBar = (props) => {
	return (
		<div>
				<Button
					style={styles.btn__secondary}
					onClick={props.handleRangeZeroChange}
					buttonContent={props.rangeContent}
			/>
		</div>
	)
};

const styles = {
	btn__secondary: {
		width: '500',
		border: `2px solid ${RadiumVars.color.colorPrimaryBlue}`
	}
};

export default Radium(GraphOptionsBar);