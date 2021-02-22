import React from "react"

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
}))
export const AppToolbar = () => {
    return (
        <div className="navbar navbar-expand fixed-top">
            <AppBar>
                <Toolbar className="navbar-brand">
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="end"
                    // onClick={handleDrawerOpen}
                    // className={clsx(open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default AppToolbar