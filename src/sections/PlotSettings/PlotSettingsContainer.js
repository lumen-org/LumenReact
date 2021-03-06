import React, { Component } from "react";
import PlotSettings from "./PlotSettings";
import { connect } from "react-redux";

class PlotSettingsContainer extends Component {
  render() {
    const { modelName } = this.props;
    return <PlotSettings class="jumbotron" activeModel={modelName} />;
  }
}
const mapStateToProps = (state) => ({
  modelName: state.app.activeModel,
});
export default connect(mapStateToProps, null)(PlotSettingsContainer);
