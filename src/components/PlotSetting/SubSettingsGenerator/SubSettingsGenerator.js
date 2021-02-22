import React from "react";
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import EnumHandler from "../EnumHandler";

import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from "@material-ui/core";
import Tooltip from '@material-ui/core/Tooltip';
import Collapse from '@material-ui/core/Collapse';

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}))

const SubSettingsGenerator = (props) => {
    const classes = useStyles()
    const {title, hint, settings } = props.settings
    const { updateSetting } = props

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return <List disablePadding>
        <Tooltip title={hint ? hint : ""} placement="left">
        <ListItem className={classes.nested} alignItems="flex-start" button onClick={handleClick}>
            <ListItemText primary={title} />
            {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        </Tooltip>
        <Collapse className={classes.nested} in={open} timeout="auto" unmountOnExit>
            {Object.keys(settings).map(
                (key) => {
                    const { name, type, value, hint } = settings[key]
                    return (
                        <div>
                            {(type === "enum") ?
                                (
                                    <EnumHandler
                                        name={name}
                                        extend={settings[key].extend}
                                        defaultValue={value}
                                        valueKey={key}
                                        updateFunction={updateSetting}
                                    />
                                ) : null}
                        </div>
                    )
                }
            )}
        </Collapse>
    </List>
}

export default SubSettingsGenerator;