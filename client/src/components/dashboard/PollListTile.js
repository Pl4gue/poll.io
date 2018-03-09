import React from 'react';
import List, { ListItem, ListItemText } from 'material-ui/List';
import { Divider } from 'material-ui';

import OpenIcon from 'material-ui-icons/OpenInNew';
import AppsIcon from 'material-ui-icons/Apps';

export default class PollListTile extends React.Component {
	render() {
		return(
			<List>
				<ListItem>
					<AppsIcon />
					<ListItemText primary='Poll One' />
				</ListItem>
				<Divider />
				<ListItem button>
					<OpenIcon />
					<ListItemText primary='Poll One' />
				</ListItem>
				<ListItem button>
					<OpenIcon />
					<ListItemText primary='Poll Two' />
				</ListItem>
			</List>
		);
	}
}