import React from 'react';
import { Paper, TextField, Button } from 'material-ui';
import classNames from 'classnames';

import PollOptionsTile from './vote/PollOptionsTile';

import '../styles/css/VoteView.css';

export default class VoteView extends React.Component {
	state = {
		pollID: ''
	}

	handleChange = pollID => event => {
		this.setState({
			[pollID]: event.target.value,
		});
	};

	render() {
		return(
			<div className={classNames('root')}>
				<h1>Submit a new Vote</h1>
				<form className={classNames('container')} noValidate autoComplete="off">
					<TextField
						id="pollIDField"
						label="Poll ID"
						className={classNames('textfield')}
						value={this.state.pollID}
						onChange={this.handleChange('pollID')}
						margin="normal"
					/>
					<Button variant="raised" className={classNames('pollIDButton')}>
						Show Poll
					</Button>
				</form>
				<Paper className={classNames('pollOptionsPaper')}>
					<PollOptionsTile />
				</Paper>
			</div>
		);
	}
}
