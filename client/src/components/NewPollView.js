import React from 'react';
import classNames from 'classnames';

import '../styles/css/NewPollView.css';

export default class NewPollView extends React.Component {
	render() {  
		return(
			<div className={classNames('root')}>
				<h1>Add a new Poll</h1>
			</div>
		);
	} 
}