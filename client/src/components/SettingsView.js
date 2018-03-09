import React from 'react';
import classNames from 'classnames';

import '../styles/css/SettingsView.css';

export default class SettingsView extends React.Component {
	render() {
		return(
			<div className={classNames('root')}>
				<h1>Settings</h1>
			</div>
		);
	}
}