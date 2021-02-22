import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import ListModal from "../../components/ListModal";
import PlotMenu from "../../components/PlotMenu";
import toolbarConfig from "../../configs/appToolbar";
import SettingsIcon from '@material-ui/icons/Settings';
import IconButton from '@material-ui/core/IconButton';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { withStyles } from "@material-ui/core/styles";

// import "./AppToolbar.scss";
import SettingsMainMenu from "../../components/PlotSetting/SettingsMainMenu";

import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';

import Drawer from '@material-ui/core/Drawer';
import { CssBaseline } from "@material-ui/core";

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },

  drawer: {
    // width: drawerWidth,
    // flexShrink: 0,
    backgroundColor: "transparent",
    boxShadow: 'none',
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  drawerContainer: {
    overflow: 'auto',
  },

  appBar: {
    // zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },

  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  grow: {
    flexGrow: 1,
  },
  hide: {
    display: 'none',
  },

  menuButtons: {
    position: 'relative',
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
});

class AppToolbar extends Component {
  static propTypes = {
    handleQueryClick: PropTypes.func,
    handleCloneClick: PropTypes.func,
    handleUndoClick: PropTypes.func,
    handleRedoClick: PropTypes.func,
    handleClearClick: PropTypes.func,
    handleConfigClick: PropTypes.func,
    handleGraphClick: PropTypes.func,
    handleNewPlotClick: PropTypes.func,
  };

  state = {
    settingsAnchor: false,
    openModal: false
  }

  onButtonClick = (buttonKey) => {
    if (buttonKey === 0) {
      this.setState({
        ...this.state,
        openModal: true,
      });
    }
  };

  // toggleSettingsDrawer = (event) => {
  //   console.log(event)
  //   return <SettingsMainMenu />
  // }

  toggleSettingsDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    this.setState({
      ...this.state,
      settingsAnchor: open
    })
  };

  handleModalClose = () => {
    this.setState({
      ...this.state,
      openModal: false,
    });
  };

  render() {
    const { classes } = this.props
    const { items } = toolbarConfig;
    const { openModal } = this.state;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <ListModal open={openModal} handleModalClose={this.handleModalClose} />
        <AppBar
          className={classes.appBar}
        >
          <Toolbar>
            <Typography variant="h6" noWrap className={classes.title}>
              Lumen
          </Typography>
            {items.map((item, key) => (
              <div className={classes.menuButtons}>
                <Button
                  className={classes.menuButtons}
                  variant={item.variant || "outlined"}
                  color={"default"}
                  endIcon={<img src={item.icon} alt="" />}
                  size="small"
                  key={key}
                  onClick={() => this.onButtonClick(key)}
                >
                  {item.name}
                </Button>
              </div>
            ))}
            <PlotMenu
              className={classes.menuButtons}
            />
            <div className={classes.grow} />
            <div className={classes.sectionRight}>
              <IconButton
                size="medium"
                onClick={this.toggleSettingsDrawer(true)}>
                <SettingsIcon fontSize="medium" />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {/* <div className="navbar navbar-dark navbar-expand fixed-top navbar-custom">
          <ListModal open={openModal} handleModalClose={this.handleModalClose} />

          <a className="navbar-brand">Lumen</a>
          <ul className="navbar-nav mr-auto">
            {items.map((item, key) => (
              <li className="nav-item appToolbar-buttonContainer">
                <Button
                  variant={item.variant || "outlined"}
                  color={"default"}
                  endIcon={<img src={item.icon} alt="" />}
                  size="small"
                  key={key}
                  onClick={() => this.onButtonClick(key)}
                >
                  {item.name}
                </Button>
              </li>
            ))}
            <li className="nav-item appToolbar-buttonContainer">
              <PlotMenu />
            </li>
            <SettingsMainMenu />
            <li className="nav-item" type="button" data-toggle="drawer" data-target="#dw-s2">

            </li>
          </ul>
          
        </div> */}
        <Drawer
          variant="persistent"
          className={classes.drawer}
          classes={{
            paper: classes.drawerPaper,
          }}
          anchor="right"
          open={this.state.settingsAnchor}
          onClose={this.toggleSettingsDrawer(false)}
        >
          {/* <Toolbar /> */}
          <div className={classes.drawerHeader}>
            <IconButton
              onClick={this.toggleSettingsDrawer(false)}
            >
              <ChevronRightIcon />
            </IconButton>
          </div>

          <div className={classes.drawerContainer}>
            <SettingsMainMenu />
          </div>
        </Drawer>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(AppToolbar);
