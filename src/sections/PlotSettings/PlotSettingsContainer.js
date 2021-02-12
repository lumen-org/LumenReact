import React, { Component } from "react";
import { connect } from "react-redux";

import PlotSettings from "./PlotSettings";

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
