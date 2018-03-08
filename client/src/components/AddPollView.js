import React from 'react';
import classNames from 'classnames';

import '../styles/css/AddPollView.css';

export default class AddPollView extends React.Component {
	render() {  
		return(
			<div className={classNames('root')}>
				<h1>Add a Poll</h1>
			</div>
		);
	} 
}