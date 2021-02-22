import React from "react"
import SettingsMenu from "../SettingsMenu/SettingsMenu";
import Divider from '@material-ui/core/Divider';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import Collapse from '@material-ui/core/Collapse';
import Tooltip from '@material-ui/core/Tooltip';

const SettingsMainMenu = ({ settings }) => {
    const [open, setState] = React.useState(Object.fromEntries(
        Object.keys(settings).map((key) => [key, false])));

    const handleClick = (key) => {
        setState(prevState => ({
            ...prevState,
            [key]: !prevState[key]
        }));
    };
    return (
        <List
            aria-labelledby="nested-list-subheader"
        >
            {
                Object.keys(settings).map((key) => {
                    return (
                        <div>
                            <Tooltip title={settings[key].hint ? settings[key].hint : ""} placement="left">
                            <ListItem button
                                key={settings[key].title}
                                onClick={() => handleClick(key)}
                            >
                                <ListItemText primary={settings[key].title} />
                                {open[key] ? <ExpandLess /> : <ExpandMore />}
                            </ListItem>
                            </Tooltip>
                            <Collapse in={open[key]} timeout="auto" unmountOnExit>
                                <SettingsMenu settings={settings[key]} settingsKey={key} />
                            </Collapse>
                            <Divider />
                        </div>
                    )
                }
                )
            }
        </List>
    )
}

export default SettingsMainMenu