import React from "react";
import PropTypes from "prop-types";
import { slide as Menu } from 'react-burger-menu'
import LayoutSetting from "../LayoutSetting";
import MarkerSetting from "../MarkerSetting";

import "./PlotSettingMenu.scss"

class PlotSettingMenu extends React.Component {
  static propTypes = {
    
  };
  // TODO: Make Plot Setting for Different Plots
  render() {
    return (
      <Menu right noOverlay>
        <p> Standard Plot Setting</p>
        <LayoutSetting />
        <MarkerSetting title = "Prediction Marker"/>
        <MarkerSetting title = "Data Marker"/>
      </Menu>
    );
  }
}


export default PlotSettingMenu;
