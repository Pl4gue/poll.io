import React, { Component } from 'react';

export default class PollsDashboard extends Component {
    state = {votes: []}

    componentDidMount() {
        fetch('/getPoll')
        .then(res => res.json())
        .then(votes => this.setState({ votes }));
    }
    
	render() {  
		return(
			<div className="App">
				<h1>Votes</h1>
				{this.state.votes.map(vote=>
					<div key={vote.id}>{vote.vote.author} voted {vote.vote.vote}</div>
				)}
			</div>
		);
	} 
}