import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';
import classNames from 'classnames';

import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';

import '../styles/css/DashboardView.css';

const data = {
	labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
	datasets: [{
		label: 'My First dataset',
		backgroundColor: 'rgba(255,99,132,0.2)',
		borderColor: 'rgba(255,99,132,1)',
		borderWidth: 1,
		hoverBackgroundColor: 'rgba(255,99,132,0.4)',
		hoverBorderColor: 'rgba(255,99,132,1)',
		data: [65, 59, 80, 81, 56, 55, 40]
	}]
};

export default class DashboardView extends Component {
    state = {
    	votes: []
    }

    componentDidMount() {
    	fetch('/getPoll')
    		.then(res => res.json())
    		.then(votes => this.setState({
    			votes
    		}));
	}
	
	render() {  
		return(
			<div className={classNames('root')}>
				<Grid container spacing={24} direction={'row'}>
					<Grid container direction={'row'}>
						<Grid item xs={6}>
							<Paper className={classNames('paper')}>
								<Bar
									data={data}
									width={100}
									height={50}
									options={{
										maintainAspectRatio: false
									}}
								/>
							</Paper>
						</Grid>
						<Grid item xs={6}>
							<Paper className={classNames('paper')}>B</Paper>
						</Grid>
						<Grid item xs={6}>
							<Paper className={classNames('paper')}>C</Paper>
						</Grid>
						<Grid item xs={6}>
							<Paper className={classNames('paper')}>D</Paper>
						</Grid>
					</Grid>
				</Grid>
			</div>
		);
	} 
}