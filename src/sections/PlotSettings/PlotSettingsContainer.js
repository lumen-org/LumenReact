import React, { Component } from "react";
import { MODEL_POST_RESULT } from "../../mockdata";
import PlotSettings from "./PlotSettings";
import { connect } from "react-redux";

class PlotSettingsContainer extends Component {
  render() {
    const { modelName } = this.props;
    return <PlotSettings currentModel={modelName} />;
  }
}
const mapStateToProps = state => ({
  modelName: state.app.currentModel
});
export default connect(mapStateToProps, null)(PlotSettingsContainer);
