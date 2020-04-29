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
  state = {
    X: [],
    Y: [],
  };
  componentDidMount() {
    const { modelName, specifications } = this.props;
  }
  componentDidUpdate(prevProps, preState) {
    // this is only an example of how it can work. We need to further discuss
    // about how to set up branches when there are more than one element in each sections,
    // how to handle exceptions , etc.
    if (
      prevProps.modelName !== this.props.modelName ||
      prevProps.specifications !== this.props.specifications
    ) {
      const { modelName, specifications } = this.props;
      const X_Axis = [...specifications.X_Axis];
      const Y_Axis = [...specifications.Y_Axis];
      const SELECT = [X_Axis[0], Y_Axis[0]];
      const POST_BODY = {
        SELECT: SELECT,
        FROM: modelName,
      };
      fetchPlotData(POST_BODY).then((data) =>
        this.setState({
          X: data.X,
          Y: data.Y,
        })
      );
    }
  }
  render() {
    const { modelName } = this.props;
    const { X, Y } = this.state;
    return <RnDPlot modelName={modelName} X={X} Y={Y} />;
  }
}

const mapStateToProps = (state) => ({
  specifications: state.model.specifications,
});

export default connect(mapStateToProps, null)(RnDPlotContainer);
