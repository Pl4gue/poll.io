import React from 'react';
<<<<<<< HEAD
=======
import { Route, withRouter } from 'react-router-dom';
>>>>>>> master
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import { Drawer, AppBar, Toolbar, Typography, Divider, IconButton } from 'material-ui';
import List, { ListItem, ListItemText } from 'material-ui/List';

<<<<<<< HEAD
import AddIcon from 'material-ui-icons/Add';
import PollIcon from 'material-ui-icons/Poll';
import MenuIcon from 'material-ui-icons/Menu';
import SettingsIcon from 'material-ui-icons/Settings';
import ComputerIcon from 'material-ui-icons/Computer';
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';

import DashboardView from './DashboardView';
import NewPollView from './NewPollView';
import SettingsView from './SettingsView';
import AboutView from './AboutView';

import theme from '../styles/LandingDrawerStyle';
import Strings from '../assets/Strings';

class LandingDrawer extends React.Component {
  state = {
    open: false,
    anchor: 'left',
    contentView: 'dashboard',
    appBarTitle: Strings.dashboard
  };
=======
import PollIcon from 'material-ui-icons/Poll';
import AddIcon from 'material-ui-icons/Add';
import VoteIcon from 'material-ui-icons/RateReview';
import SettingsIcon from 'material-ui-icons/Settings';
import ComputerIcon from 'material-ui-icons/Computer';

import MenuIcon from 'material-ui-icons/Menu';
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';

import Strings from '../assets/Strings';
import theme from '../styles/LandingDrawerStyle';

class LandingDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      anchor: 'left',
      contentView: 'myPolls',
      appBarTitle: this.props.title
    };
  }
>>>>>>> master

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleChangeAnchor = event => {
    this.setState({
      anchor: event.target.value,
    });
  };

<<<<<<< HEAD
  handleChangeContentContainer = (dest) => {
    let title;
    switch (dest) {
      case 'dashboard':
        title = Strings.dashboard
        break;
      case 'newPoll':
        title = Strings.newPoll
        break;
      case 'settings':
        title = Strings.settings
        break;
      case 'about':
        title = Strings.about
        break;
      default:
        title = Strings.dashboard
    }
    this.setState({
      contentView: dest,
      appBarTitle: title
    });
    this.handleDrawerClose();
  }
=======
  pollsListItem = withRouter(({ history }) => (
    <ListItem button onClick={() => { history.push('/') }}>
      <PollIcon />
      <ListItemText primary={Strings.myPolls} />
    </ListItem>
  ));

  newListItem = withRouter(({ history }) => (
    <ListItem button onClick={() => { history.push('/new') }}>
      <AddIcon />
      <ListItemText primary={Strings.newPoll} />
    </ListItem>
  ));

  voteListItem = withRouter(({ history }) => (
    <ListItem button onClick={() => { history.push('/vote') }}>
      <VoteIcon />
      <ListItemText primary={Strings.vote} />
    </ListItem>
  ));

  settingsListItem = withRouter(({ history }) => (
    <ListItem button onClick={() => { history.push('/settings') }}>
      <SettingsIcon />
      <ListItemText primary={Strings.settings} />
    </ListItem>
  ));

  aboutListItem = withRouter(({ history }) => (
    <ListItem button onClick={() => { history.push('/about') }}>
      <ComputerIcon />
      <ListItemText primary={Strings.about} />
    </ListItem>
  ));

>>>>>>> master

  render() {
    const { classes } = this.props;
    const { anchor, open } = this.state;

    const drawer = (
      <Drawer
        variant="persistent"
        anchor={anchor}
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={this.handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
<<<<<<< HEAD
          <ListItem button onClick={() => this.handleChangeContentContainer('dashboard')}>
            <PollIcon />
            <ListItemText classes={{ primary: classes.drawerItemText }} primary={Strings.dashboard} />
          </ListItem>
          <ListItem button onClick={() => this.handleChangeContentContainer('newPoll')}>
            <AddIcon />
            <ListItemText classes={{ primary: classes.drawerItemText }} primary={Strings.newPoll} />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button onClick={() => this.handleChangeContentContainer('settings')}>
            <SettingsIcon />
            <ListItemText classes={{ primary: classes.drawerItemText }} primary={Strings.settings} />
          </ListItem>
          <ListItem button onClick={() => this.handleChangeContentContainer('about')}>
            <ComputerIcon />
            <ListItemText classes={{ primary: classes.drawerItemText }} primary={Strings.about} />
          </ListItem>
=======
          <this.pollsListItem />
          <this.newListItem />
        </List>
        <Divider />
          <this.voteListItem />
        <Divider />
        <List>
          <this.settingsListItem />
          <this.aboutListItem />
>>>>>>> master
        </List>
      </Drawer>
    );

<<<<<<< HEAD
    const contentContainer = () => {
      switch (this.state.contentView) {
        case 'polls':
          return ( <DashboardView /> )
        case 'newPoll':
          return ( <NewPollView /> )
        case 'settings':
          return ( <SettingsView /> )
        case 'about':
          return ( <AboutView /> )
        default:
          return ( <DashboardView /> )
      }
    }

=======
>>>>>>> master
    let before = null;
    let after = null;

    if (anchor === 'left') {
      before = drawer;
    } else {
      after = drawer;
    }

    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <AppBar
            className={classNames(classes.appBar, {
              [classes.appBarShift]: open,
              [classes[`appBarShift-${anchor}`]]: open,
            })}
          >
            <Toolbar disableGutters={!open}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={this.handleDrawerOpen}
                className={classNames(classes.menuButton, open && classes.hide)}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="title" color="inherit" noWrap>
                poll.io
                <span className={classNames(classes.dynamicAppBarTitle)}> - {this.state.appBarTitle}</span>
              </Typography>
            </Toolbar>
          </AppBar>
          {before}
          <main
            className={classNames(classes.content, classes[`content-${anchor}`], {
              [classes.contentShift]: open,
              [classes[`contentShift-${anchor}`]]: open,
            })}
          >
            <div className={classes.drawerHeader} />
            <Typography>{
<<<<<<< HEAD
              contentContainer()
=======
              this.props.contentContainer
>>>>>>> master
            }</Typography>
          </main>
          {after}
        </div>
      </div>
    );
  }
}

LandingDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(theme, { withTheme: true })(LandingDrawer);