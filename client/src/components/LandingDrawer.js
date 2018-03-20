import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import { Drawer, AppBar, Toolbar, Typography, Divider, IconButton } from 'material-ui';
import List, { ListItem, ListItemText } from 'material-ui/List';

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
          <this.pollsListItem />
          <this.newListItem />
        </List>
        <Divider />
          <List>
            <this.voteListItem />
          </List>
        <Divider />
        <List>
          <this.settingsListItem />
          <this.aboutListItem />
        </List>
      </Drawer>
    );

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
              this.props.contentContainer
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