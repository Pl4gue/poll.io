import React from 'react';
import classNames from 'classnames';

import '../../styles/css/vote/PollOptionsTile.css';

export default class PollOptionsTile extends React.Component {
	render() {
		return(
			<div className={classNames('pollOptionsContainer')} >
				<span className={classNames('pollOptionsTitle')}>OS Vote</span>
			</div>
		);
	}
}