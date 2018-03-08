import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';

import AddIcon from 'material-ui-icons/Add';
import PollIcon from 'material-ui-icons/Poll';
import MenuIcon from 'material-ui-icons/Menu';
import SettingsIcon from 'material-ui-icons/Settings';
import ComputerIcon from 'material-ui-icons/Computer';
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';

import DashboardView from './DashboardView';
import AddPollView from './AddPollView';
import SettingsView from './SettingsView';
import AboutView from './AboutView';

import theme from '../styles/LandingDrawerStyle';

class LandingDrawer extends React.Component {
  state = {
    open: false,
    anchor: 'left',
    contentView: 'polls',
    appBarTitle: 'Dashboard'
  };

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

  handleChangeContentContainer = (dest) => {
    let title;
    switch (dest) {
      case 'dashboard':
        title = 'Dashboard'
        break;
      case 'addPoll':
        title = 'Add A Poll'
        break;
      case 'settings':
        title = 'Settings'
        break;
      case 'about':
        title = 'About poll.io'
        break;
      default:
        title = 'Dashboard'
    }
    this.setState({
      contentView: dest,
      appBarTitle: title
    });
    this.handleDrawerClose();
  }

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
          <ListItem button onClick={() => this.handleChangeContentContainer('dashboard')}>
            <PollIcon />
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button onClick={() => this.handleChangeContentContainer('addPoll')}>
            <AddIcon />
            <ListItemText primary="Add Poll" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button onClick={() => this.handleChangeContentContainer('settings')}>
            <SettingsIcon />
            <ListItemText primary="Settings" />
          </ListItem>
          <ListItem button onClick={() => this.handleChangeContentContainer('about')}>
            <ComputerIcon />
            <ListItemText primary="About poll.io" />
          </ListItem>
        </List>
      </Drawer>
    );

    const contentContainer = () => {
      switch (this.state.contentView) {
        case 'polls':
          return ( <DashboardView /> )
        case 'addPoll':
          return ( <AddPollView /> )
        case 'settings':
          return ( <SettingsView /> )
        case 'about':
          return ( <AboutView /> )
        default:
          return ( <DashboardView /> )
      }
    }

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
              contentContainer()
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