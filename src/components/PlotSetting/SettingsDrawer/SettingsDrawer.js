import React from "react"
import { ListItem } from "@material-ui/core"

import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import SettingsMenu from "../SettingsMenu/SettingsMenu"
import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
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
}));

const SettingsDrawer = ({ settings, settingsKey }) => {
    console.log(settingsKey)
    const classes = useStyles()
    const [anchor, setAnchor] = React.useState(false)
    // const [anchor, setAnchor] = React.useState(false)
    const onClick = (event) => {
        setAnchor(true)
    }
    return (
        <ListItem button aria-controls="simple-menu" aria-haspopup="true" onClick={onClick}>
            {/* <SettingsMenu settings={settings[key]} key={key}/> */}
            {settings[settingsKey].title}
            <Drawer
                variant="persistent"
                className={classes.drawer}
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="right"
                open={anchor}
                onClose={setAnchor(false)}
            >
                {/* <Toolbar /> */}
                <div className={classes.drawerHeader}>
                    <IconButton
                        onClick={setAnchor(false)}
                    >
                        <ChevronRightIcon />
                    </IconButton>
                </div>
                <div className={classes.drawerContainer}>
                    Okay
                    {/* <SettingsMenu settings={settings[settingsKey]} settingsKey={settingsKey} /> */}
                </div>
            </Drawer>
        </ListItem>
    )
}

export default SettingsDrawer