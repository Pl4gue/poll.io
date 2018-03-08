import React, { Component } from 'react';
import classNames from 'classnames';

import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';

import '../styles/css/DashboardView.css';

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
							<Paper className={classNames('paper')}>A</Paper>
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