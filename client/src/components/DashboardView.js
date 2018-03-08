import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import classNames from 'classnames';

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
			<div className={classNames('App')}>
				<h1>Votes</h1>
				{this.state.votes.map(vote=>
					<div key={vote.id}>{vote.vote.author} voted {vote.vote.vote}</div>
				)}
			</div>
		);
	} 
}