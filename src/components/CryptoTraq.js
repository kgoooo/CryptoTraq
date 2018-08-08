/*
		Did some cleaning up of imports in this component and added Radium for the arrow
		styling.
		This component had some refactoring when I made the SelectionForm component to
		break up the big form component I had before.  Mainly adding the new components
		and changing the props that are passed in accordingly.
		Button component is also used here now instead of CompareButton.
 */

import React from 'react';
import Radium from 'radium';
import Button from './Button';
import SelectionForm from './SelectionForm';
import CryptoSelectForm from './CryptoSelectForm';
import IntlSelectForm from './IntlSelectForm';
import ExchangeResult from './ExchangeResult';
import Graph from './Graph';
import RadiumVars from '../RadiumVariables';

const CryptoTraq = (props) => {
  return(
    <div>
        <div>
          <SelectionForm
              formLabel={"Select Cryptocurency:"}
              selectionFunc={props.handleCryptoChange}
              selectForm={<CryptoSelectForm list={props.cryptoList}/>}
          />
          <p style={styles.arrow}>&rarr;</p>
          <SelectionForm
            formLabel={"Select international currency:"}
            selectionFunc={props.handleIntlChange}
						selectForm={<IntlSelectForm list={props.intlList}/>}
					/>
          <Button onClick={props.handleExchangeSearch} buttonContent={"Track currency"}/>
        </div>
        {props.showingExchangeRate === true ? (
          <ExchangeResult
            crypto={props.selectedCrypto}
            intl={props.selectedIntl}
            rate={props.exchangeRate}
            excError={props.showingExchangeError}
          />
        ) : null}
        <Graph
          cryptoData={props.dataSet}
          crypto={props.selectedCrypto}
        />
			</div>
  )
};

//  Radium Styles

const styles = {
	arrow: {
		display: 'inline-block',
		fontSize: '50px',
		color: RadiumVars.color.colorPrimaryBlue,
		textShadow: `0px 0px 25px ${RadiumVars.color.colorPrimaryBlue}`,

		'@media (max-width: 500px)': {
			margin: '0px'
		}
	}
};

export default Radium(CryptoTraq);