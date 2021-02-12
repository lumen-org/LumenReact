import React from "react";
import PropTypes from "prop-types";
import { slide as Menu } from 'react-burger-menu'
import LayoutSetting from "../LayoutSetting";
import MarkerSetting from "../MarkerSetting";

import "./SettingsMenu.scss"
import SubSettingsGenerator from "../SubSettingsGenerator";

class SettingsMenu extends React.Component {
  static propTypes = {

  };
  // TODO: Make Plot Setting for Different Plots
  render() {
    const settings = this.props.settings
    return (
      <Menu right noOverlay>
        <p> {settings.name}</p>
        <LayoutSetting />
        <MarkerSetting title="Prediction Marker" />
        <MarkerSetting title="Data Marker" />
        {
          Object.keys(settings.subSettings).map(
            (key) => {
              return (
                <SubSettingsGenerator
                  settings={settings.subSettings[key]}
                  settingKey={this.props.settingKey}
                  subSettingKey={key}
                />
              )
            }
          )
        }
      </Menu>
    );
  }
}


export default SettingsMenu;
