/*  Added the new Button component.  The props are passed in for the content of the button and its
		onClick method.
*/

import React from 'react';
import Radium from 'radium';
import Button from './Button';
import RadiumVars from '../RadiumVariables';

const Header = (props) => {
	return (
    <div style={styles.header__flex}>
      <div style={[styles.header]}>
        <h1 style={styles.header__title} onClick={props.handleHideCurrencyList}>CryptoTraq</h1>
      </div>
      <div style={styles.header__button_box}>
        <Button onClick={props.handleShowCurrencyList} buttonContent={"Supported currencies"}/>
      </div>
    </div>
  )
};

//  Added Radium to the component.

const styles = {
	header: {
		float: 'left',

		'@media (max-width: 500px)': {
			position: 'relative',
			float: 'none',
			color: 'red'
		}
	},
	header__flex: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',

		'@media (max-width: 500px)': {
			display: 'block',
			marginBottom: '20px'
		}
	},
	header__button_box: {
		marginRight: RadiumVars.spacing.largeSize,

		'@media (max-width: 500px)': {
			marginRight: '0px',
			textAlign: 'center'
		}
	},
	header__title: {
		color: RadiumVars.color.colorPrimaryLightBlue,
		fontSize: '4.5rem',
		fontWeight: 'normal',
		letterSpacing: '1px',
		textShadow: `0px 0px 35px ${RadiumVars.color.colorPrimaryBlue}`,
		marginLeft: RadiumVars.spacing.largeSize,
		transition: 'all ease-in-out .3s',
		cursor: 'pointer',

		'@media (max-width: 500px)': {
			display: 'inline-block',
			width: '100%',
			textAlign: 'center',
			marginLeft: '0px'
		},

		':hover': {
			textShadow: `0px 0px 35px ${RadiumVars.color.colorPrimaryLightBlue}`
		}
	},
	a: {
		':link': {
			textDecoration: 'none'
		}
	}
};

export default Radium(Header);