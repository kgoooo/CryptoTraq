/*
		I added Radium to this component as well.
		I decided to add CSS grid here in place of the custom grid I was using before.
 */

import React from 'react';
import Radium from 'radium';
import RadiumVars from '../RadiumVariables';

const Currencies = (props) => {
	const cryptoList = props.cryptoList;
	const intlList = props.intlList;
	return (
		<div style={styles.currencies}>
      <div style={styles.gridContainer}>
        <div style={styles.gridItem}>
          <div style={styles.currencies__center}>
            <p style={styles.currencies__label}>Cryptocurrencies</p>
            <ul style={styles.currencies__list}>
              {cryptoList.map(c => (
                <li style={styles.currencies__item} key={c.code}>
                  {c.name} - {c.code}
                </li>
              ))}
            </ul>
          </div>
        </div>
				<div style={styles.gridItem}>
          <div style={styles.currencies__center}>
            <p style={styles.currencies__label}>International currencies</p>
            <ul style={[styles.currencies__list, styles.currencies__list__columns]}>
              {intlList.map(i => <li style={styles.currencies__item} key={i.code}>
                  {i.name}
                </li>)}
            </ul>
          </div>
        </div>
      </div>
    </div>
	)
};

//  Radium Styles

const styles = {
	gridContainer: {
		display: 'grid',
		gridTemplateColumns: '350px 350px',
		justifyContent: 'center',
		gridColumnGap: '50px',

		'@media (max-width: 750px)': {
			gridTemplateColumns: '350px',
		}
	},
	gridItem: {
	},
  currencies: {
    position: 'relative'
  },
  currencies__center: {
    textAlign: 'center'
  },
  currencies__list: {
    border: `3px solid ${RadiumVars.color.colorPrimaryBlue}`,
    boxShadow: `0px 0px 30px ${RadiumVars.color.colorPrimaryBlue}`,
    borderRadius: '8px',
    display: 'grid',
    padding: '25px 45px',
		textAlign: 'left',
		width: '225px',
		margin: '0px auto'
  },
  currencies__list__columns: {
		display: 'grid',
		gridTemplateColumns: '45px 45px',
		gridColumnGap: '35px',
		width: '125px'
  },
  currencies__item: {
    color: RadiumVars.color.colorPrimaryLightBlue,
    fontSize: '20px',
    fontWeight: '300',
    listStyle: 'none',
    marginTop: '10px'
  },
	currencies__label: {
    color: RadiumVars.color.colorPrimaryLightBlue,
    fontWeight: '300',
    fontSize: '24px'
  }
};

export default Radium(Currencies);
