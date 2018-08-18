/*
		I added Radium to this component as well.  Small amount of styling is used as the actual graph generated
		is a canvas object.  I changed some of the styling in the graph options object to make it easier
		to understand/read for the user.  I originally did not optimize the coloring of the graph information,
		and now its an overall better experience.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Radium from 'radium';
import {Line} from 'react-chartjs-2';
import moment from 'moment';
import RadiumVars from '../RadiumVariables';

class Graph extends Component {
	constructor(props) {
		super(props);
	}

	render(){
		let zuluArray = [];
		let dataArray = [];

		this.props.cryptoData.forEach(el => {
			zuluArray.push(moment(el.zuluTime).format("DD-MMM HH:mm"));
			dataArray.push(el.rate)
		});
		const data = {
			labels: zuluArray,
			datasets: [{
				label: 'Currency value',
				fill: false,
				lineTension: 0.3,
				backgroundColor: 'rgba(75,192,192,0.4)',
				borderColor: '#00FFF5',
				borderCapStyle: 'butt',
				borderJoinStyle: 'round',
				pointBackgroundColor: 'rgba(255, 255, 255, .8)',
				pointBorderWidth: 1,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: 'rgba(75,192,192,1)',
				pointHoverBorderColor: 'rgba(220,220,220,1)',
				pointHoverBorderWidth: 2,
				pointRadius: 1,
				pointHitRadius: 10,
				data: dataArray
			}]
		};
		return(
			<div>
				{dataArray.length > 0 ? <div style={styles.graph} >
					<Line 
					data={data} 
					width={95} 
					height={600}
					options={{
						maintainAspectRatio: false,
						title: {
							fontSize: 20,
							fontColor: '#00FFF5',
							fontFamily: "'Roboto', sans-serif",
							fontStyle: 'normal',
							display: true,
							padding: 25,
            	text: `Value of ${this.props.crypto} over the past 24 hours.`
						},
						scales: {
							yAxes: [{
								ticks: {
									fontColor: "#00ADB5",
								},
								gridLines: {
									color: "rgba(255, 255, 255, 0.1)"
								},
							}],
							xAxes: [{
								ticks: {
									fontColor: "#00ADB5",
								},
								gridLines: {
									color: "rgba(255, 255, 255, 0.1)"
								},
							}]
						},
						legend: {
							labels: {
								fontColor: '#00FFF5'
							}
						}
					}}
				/>
				</div>: null}
			</div>
		)
	}
}

Graph.propTypes = {
	cryptoData: PropTypes.array.isRequired,
	crypto: PropTypes.string
};

const styles = {
	graph: {
		width: '85%',
		border: `3px solid ${RadiumVars.color.colorPrimaryBlue}`,
		borderRadius: '8px',
		marginLeft: 'auto',
		marginRight: 'auto',
		marginBottom: '55px',

		'@media (max-width: 500px)': {
			width: '95%',
			marginBottom: '20px'
		}
	}
};

export default Radium(Graph);
export {Graph};