/*
		Created this component to display a loading spinner when the user starts
		to track a currency pair.  It shows for both success cases and failures in case
		a user is on a slower connection they still know that their data is being fetched.
		It is reusable and has its information passed in via props.
 */

import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium'
import {BarLoader} from 'react-spinners';
import RadiumVars from '../RadiumVariables';

const LoadingSpinner = (props) => {
	return (
		<div style={styles.loading__spinner}>
			<BarLoader
				loaderStyle={{display: "block", margin: "0 auto"}}
				color={RadiumVars.color.colorPrimaryLightBlue}
				loading={props.loading}/>
			<p style={styles.loading__text}>{props.content}</p>
		</div>

	)
};

LoadingSpinner.propTypes = {
	loading: PropTypes.bool.isRequired,
	content: PropTypes.string
};

const styles = {
	loading__spinner: {
		display: 'block',
		margin: "30px auto 0 auto"
	},
	loading__text: {
		textAlign: 'center'
	}
};

export default Radium(LoadingSpinner);
export { LoadingSpinner };