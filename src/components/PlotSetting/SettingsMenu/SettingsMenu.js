import React from "react";
import PropTypes from "prop-types";
import { slide as Menu } from 'react-burger-menu'
import LayoutSetting from "../LayoutSetting";
import MarkerSetting from "../MarkerSetting";

import "./SettingsMenu.scss"
import SubSettingsGenerator from "../SubSettingsGenerator";
import { Divider } from "@material-ui/core";

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    // width: '100%',
  },
}));

const SettingsMenu = ({settings, settingKey}) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      {
        Object.keys(settings.subSettings).map(
          (key) => {
            return (
                <SubSettingsGenerator
                  settings={settings.subSettings[key]}
                  settingKey={settingKey}
                  subSettingKey={key}
                />
            )
          }
        )
      }
    </div>
  );
}


export default SettingsMenu;
