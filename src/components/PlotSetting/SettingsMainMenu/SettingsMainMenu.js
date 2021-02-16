import { List, ListItem } from "@material-ui/core"
import React from "react"
import { slide as Slider } from 'react-burger-menu'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import SettingsMenu from "../SettingsMenu/SettingsMenu"

const SettingsMainMenu = ({ settings }) => {
    return (
        <Slider right noOverlay>
            {
                Object.keys(settings).map((key) => {
                    const onClick = (event) => {
                        console.log(event.currentTarget)
                        const anchorEl = event.currentTarget;
                        const handleClose = () => {
                            anchorEl = null
                        }
                        return (
                            <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >

        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
                                {/* <SettingsMenu settings={settings[key]} settingsKey={key} /> */}
                            </Menu>
                        )
                    }
                    return (
                        <List>
                            <ListItem button aria-controls="simple-menu" aria-haspopup="true" onClick={onClick}>
                                {settings[key].title}
                            </ListItem>
                        </List>
                    )
                })
            }
        </Slider>
    )
}

export default SettingsMainMenu