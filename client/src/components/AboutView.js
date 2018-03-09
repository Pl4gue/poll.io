import React from 'react';
import classNames from 'classnames';

import '../styles/css/AboutView.css';

export default class AboutView extends React.Component {
	render() {
		return(
			<div className={classNames('root')}>
				<h1>About</h1>
			</div>
		);
	}
}