import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPlotData } from "../../utils/fetch";
import { FETCH_PLOT } from "../../constants/query";

import PropTypes from "prop-types";
import RnDPlot from "./RnDPlot";

class RnDPlotContainer extends React.Component {
  static propTypes = {
    modelName: PropTypes.string,
  };
  componentDidMount() {
    const { modelName, specifications } = this.props;
  }
  componentDidUpdate() {
    const { modelName, specifications } = this.props;
    const { X_Axis, Y_Axis } = specifications;
    const POST_BODY = {
      SELECT: ["sepal_width", "sepal_length"],
      FROM: "mcg_iris_map",
    };
  }
  render() {
    const { modelName } = this.props;
    return <RnDPlot modelName={modelName} />;
  }
}

const mapStateToProps = (state) => ({
  specifications: state.model.specifications,
});

export default connect(mapStateToProps, null)(RnDPlotContainer);
