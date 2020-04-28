import React, { Component } from "react";
import { connect } from "react-redux";

import PropTypes from "prop-types";
import RnDPlot from "./RnDPlot";

class RnDPlotContainer extends React.Component {
  static propTypes = {
    modelName: PropTypes.string,
  };
  render() {
    const { modelName } = this.props;
    return <RnDPlot modelName={modelName} />;
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, null)(RnDPlotContainer);
