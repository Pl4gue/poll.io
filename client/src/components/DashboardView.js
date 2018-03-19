import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';
import classNames from 'classnames';

import { Grid, Paper } from 'material-ui';

import PollListTile from './dashboard/PollListTile';

import '../styles/css/DashboardView.css';

export default class DashboardView extends Component {
    state = {
    	votes: []
    }

    componentDidMount() {
    	fetch('/getpoll')
    		.then(res => res.json())
    		.then(votes => this.setState({
    			votes
			}));
	}

	render() {
		let [t1, t2, t3] = [0, 0, 0]
		this.state.votes.forEach(item => {
			switch (item.vote.vote) {
				case "Windows":
					t1++;
					break;
				case "Linux":
					t2++;
					break;
				case "OS X":
					t3++;
					break;
				default:
					break;
			}
		});

		const data = {
			labels: ['Windows', 'Linux', 'OS X'],
			datasets: [{
				label: 'OS Poll',
				backgroundColor: ['#00b894', '#00cec9', '#6c5ce7'],
				borderWidth: 1,
				hoverBackgroundColor: ['#55efc4', '#81ecec', '#a29bfe'],
				hoverBorderColor: '#dfe6e9',
				data: [t1,t2,t3],
			}]
		};

		return(
			<div className={classNames('root')}>
				<Grid container spacing={24} direction={'row'}>
					<Grid container direction={'row'}>
						<Grid item xs={12} sm={6}>
							<Paper className={classNames('paper')}>
								<Bar
									data={data}
									width={100}
									height={50}
									options={{
										scales: {
											yAxes: [{
												display: true,
												ticks: {
													beginAtZero: true,
													suggestedMax: 20,
												}
											}]
										},
										maintainAspectRatio: false
									}}
								/>
							</Paper>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Paper className={classNames('paper')}>
							</Paper>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Paper className={classNames('paper')}>
								<PollListTile />
							</Paper>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Paper className={classNames('paper')}>D</Paper>
						</Grid>
					</Grid>
				</Grid>
			</div>
		);
	}
}
