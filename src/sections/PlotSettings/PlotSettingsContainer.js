import React, { Component } from "react";
import { MODEL_POST_RESULT } from "../../mockdata";
import PlotSettings from "./PlotSettings";
import { connect } from "react-redux";

class PlotSettingsContainer extends Component {
  render() {
    return <PlotSettings />;
  }
}

export default PlotSettingsContainer;
