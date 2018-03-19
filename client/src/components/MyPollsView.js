import React, { Component } from 'react';
import classNames from 'classnames';

import Select from 'react-select';
import 'react-select/dist/react-select.css';

import { Grid, Paper } from 'material-ui';

import PollTile from './myPolls/PollTile';
import DetailsTile from './myPolls/DetailsTile';

import '../styles/css/MyPollsView.css';

export default class MyPollsView extends Component {
    state = {
    	selectedOption: '',
	}
	
    handleChange = (selectedOption) => {
    	this.setState({
    		selectedOption
    	});
    }

	render() {  
		const { selectedOption } = this.state;
		const value = selectedOption && selectedOption.value;

		return(
			<div className={classNames('root')}>
				<Select
						name="Select Poll"
						className={classNames('selector')}
						value={value}
						onChange={this.handleChange}
						options={[
						{ value: 'one', label: 'One' },
						{ value: 'two', label: 'Two' },
						]} />
				<Grid container spacing={24} direction={'row'}>
					<Grid container direction={'row'}>
						<Grid item xs={12} sm={8}>
							<Paper className={classNames('paper')}>
								<PollTile />
							</Paper>
						</Grid>
						<Grid item xs={12} sm={4}>
							<Paper className={classNames('paper')}>
								<DetailsTile />
							</Paper>
						</Grid>
					</Grid>
				</Grid>
			</div>
		);
	} 
}