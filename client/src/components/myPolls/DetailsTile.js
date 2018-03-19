import React from 'react';
import classNames from 'classnames';

import '../../styles/css/myPolls/DetailsTile.css';

export default class DetailsTile extends React.Component {
	render() {
		return(
			<div className={classNames('detailsContainer')} >
				<span className={classNames('detailsTitle')}>Poll Details</span>
			</div>
		);
	}
}