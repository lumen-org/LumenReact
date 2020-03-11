import React, { Component } from "react";
import { connect } from "react-redux";

import PropTypes from "prop-types";
import VisualizationCanvas from "./VisualizationCanvas";

class VisualizationCanvasContainer extends React.Component {
  render() {
    return <VisualizationCanvas modelName={this.props.modelName} />;
  }
}

const mapStateToProps = state => ({
  modelName: state.app.currentModel
});

export default connect(mapStateToProps, null)(VisualizationCanvasContainer);
