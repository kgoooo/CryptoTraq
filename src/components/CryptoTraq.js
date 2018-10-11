/*
		Did some cleaning up of imports in this component and added Radium for the arrow
		styling.
		This component had some refactoring when I made the SelectionForm component to
		break up the big form component I had before.  Mainly adding the new components
		and changing the props that are passed in accordingly.
		Button component is also used here now instead of CompareButton.
 */
/*
	I added two loading spinner components to be rendered here.  One will show up when the app
	is initializing, especially if the user is on a slower connection.  The second will show
	when the user has tracked currencies and is waiting for the results.
 */

import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import Button from './Button';
import SelectionForm from './SelectionForm';
import CryptoSelectForm from './CryptoSelectForm';
import IntlSelectForm from './IntlSelectForm';
import ExchangeResult from './ExchangeResult';
import LoadingSpinner from './LoadingSpinner';
import Graph from './Graph';
import GraphOptionsBar from './GraphOptionsBar';
import RadiumVars from '../RadiumVariables';

const CryptoTraq = (props) => {
  return(
    <div>
        <div>
          <SelectionForm
              formLabel={"Select Cryptocurency:"}
              selectionFunc={props.handleCryptoChange}
              selectForm={<CryptoSelectForm list={props.cryptoList} delay={styles.delay1} anim={styles.select__glow}/>}
          />
          <p style={styles.arrow}>&rarr;</p>
          <SelectionForm
            formLabel={"Select international currency:"}
            selectionFunc={props.handleIntlChange}
						selectForm={<IntlSelectForm list={props.intlList} delay={styles.delay2} anim={styles.select__glow}/>}
					/>
          <Button onClick={props.handleExchangeSearch} buttonContent={"Track currency"} buttonAnimation={styles.trackAnim}/>
        </div>
				<div>
					<GraphOptionsBar handleRangeZeroChange={props.handleRangeZeroChange} rangeContent={props.rangeContent}/>
				</div>
				{props.initializing ?
					<LoadingSpinner
						loading={props.initializing}
						content={"Loading currencies"}
					/> : null}
				{props.loading ?
					<LoadingSpinner
						loading={props.loading}
						content={'Fetching your results, please hold on.'}
					/>: null}
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
					rangeZero={props.rangeZero}
        />
			</div>
  )
};

CryptoTraq.propTypes = {
	cryptoList: PropTypes.array.isRequired,
	dataSet: PropTypes.array.isRequired,
	exchangeRate: PropTypes.number.isRequired,
	initializing: PropTypes.bool.isRequired,
	intlList: PropTypes.array.isRequired,
	loading: PropTypes.bool.isRequired,
	rangeContent: PropTypes.string.isRequired,
	rangeZero: PropTypes.bool.isRequired,
	selectedCrypto: PropTypes.string,
	selectedIntl: PropTypes.string,
	showingExchangeError: PropTypes.bool.isRequired,
	showingExchangeRate: PropTypes.bool.isRequired,
	handleCryptoChange: PropTypes.func.isRequired,
	handleIntlChange: PropTypes.func.isRequired,
	handleExchangeSearch: PropTypes.func.isRequired,
};

//  Radium Styles
/*
		Added selectGlowAnim to add a small animation to the selection element to indicate to the user
		that they should take action there first.  Applied with select__glow
		I added this trackBtnAnimation to add a small scale animation to the track button as the
		3rd step to tracking your conversion rate.  It gets passed in as props and set in the button component
 */

const selectGlowAnim = Radium.keyframes({
	'50%': {boxShadow: `0 0 3px 6px ${RadiumVars.color.colorPrimaryLightBlue}`},
});
const trackBtnAnimation = Radium.keyframes({
	'0': {transform: 'scale(1)'},
	'50%': {
		transform: 'scale(1.1)',
		boxShadow: `0 0 3px 6px ${RadiumVars.color.colorPrimaryLightBlue}`
	},
	'100%': {transform: 'scale(1)'}
}, 'track');

const styles = {
	arrow: {
		display: 'inline-block',
		fontSize: '50px',
		color: RadiumVars.color.colorPrimaryBlue,
		textShadow: `0px 0px 25px ${RadiumVars.color.colorPrimaryBlue}`,

		'@media (max-width: 500px)': {
			margin: '0px'
		}
	},
	select__glow: {
		animationName: selectGlowAnim,
		animationDuration: '1.5s',
	},
	trackAnim: {
		animationName: trackBtnAnimation,
		animationDuration: '1.5s',
		animationDelay: '3.5s'
	},
	delay1: { animationDelay: '0.85s' },
	delay2: { animationDelay: '2.35s'}
};

export default Radium(CryptoTraq);