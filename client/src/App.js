import React, { Component } from 'react';
import LandingDrawer from './components/LandingDrawer';

import MyPollsView from './components/MyPollsView';
import NewPollView from './components/NewPollView';
import VoteView from './components/VoteView';
import SettingsView from './components/SettingsView';
import AboutView from './components/AboutView';

import Strings from './assets/Strings';

import {
	BrowserRouter as Router,
	Route,
} from 'react-router-dom';
  
class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Route exact path="/" render={ () => (
						<LandingDrawer contentContainer={<MyPollsView />} title={Strings.myPolls}/>					
					)}/>
					<Route exact path="/new" render={ () => (
						<LandingDrawer contentContainer={<NewPollView />} title={Strings.newPoll}/>					
					)}/>
					<Route exact path="/vote" render={ () => (
						<LandingDrawer contentContainer={<VoteView />} title={Strings.vote}/>					
					)}/>
					<Route exact path="/settings" render={ () => (
						<LandingDrawer contentContainer={<SettingsView />} title={Strings.settings}/>					
					)}/>
					<Route exact path="/about" render={ () => (
						<LandingDrawer contentContainer={<AboutView />} title={Strings.about}/>					
					)}/>
				</div>
			</Router>
		);
	}
}

export default App;