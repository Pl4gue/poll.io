import React from 'react';
import classNames from 'classnames';

import { Paper } from 'material-ui';

import '../styles/css/NewPollView.css';

export default class NewPollView extends React.Component {
	render() {  
		return(
			<div className={classNames('root')}>
				<Paper></Paper>
			</div>
		);
	} 
}