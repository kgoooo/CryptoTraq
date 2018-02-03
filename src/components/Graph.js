import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';
import moment from 'moment';

class Graph extends Component {
	constructor(props) {
		super(props);
	}

	render(){		
		let zuluArray = []
		let dataArray = []

		this.props.cryptoData.forEach(el => {
			zuluArray.push(moment(el.zuluTime).format("DD-MMM HH:mm"))
			dataArray.push(el.rate)
		});
		// let banana = moment(zuluArray[0]).format("YYYY-MM-DD HH:mm")
		// console.log("banana", banana);
		const data = {
			labels: zuluArray,
			datasets: [{
				label: 'Coin value',
				fill: false,
				lineTension: 0.3,
				backgroundColor: 'rgba(75,192,192,0.4)',
				borderColor: '#00FFF5',
				borderCapStyle: 'butt',
				borderJoinStyle: 'round',
				// pointBorderColor: 'rgba(75,192,192,1)',
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
				{dataArray.length > 0 ? <div className="graph"> 
					<Line 
					data={data} 
					// width={90%} 
					// height={600}
					options={{
						maintainAspectRatio: true,
						title: {
							fontSize: 20,
							fontColor: '#00FFF5',
							fontFamily: "'Roboto', sans-serif",
							fontStyle: 'normal',
							display: true,
							padding: 25,
            	text: `Value of ${this.props.crypto} over the past 24 hours.`
						}
					}}
				/> 
				</div>: null}
			</div>
		)
	}
}

export default Graph;