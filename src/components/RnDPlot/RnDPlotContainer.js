import React, { Component } from "react";
import { connect } from "react-redux";
import { getPlotData, getLayoutInformation } from "../../utils/plotData";
import { createNewPlot } from "../../states/plots/actions";
import PropTypes from "prop-types";
import RnDPlot from "./RnDPlot";

class RnDPlotContainer extends React.Component {
  static propTypes = {
    id: PropTypes.number,
    modelName: PropTypes.string,
    specifications: PropTypes.object,
  };
  state = {
    plotData: [],
    layout: {},
  };
  componentDidMount() {
    const { modelName, specifications } = this.props;
  }
  componentDidUpdate(prevProps, preState) {
    // update the plot according to the change of specifications
    if (
      prevProps.modelName !== this.props.modelName ||
      prevProps.specifications !== this.props.specifications
    ) {
      const { modelName, specifications } = this.props;
      console.log(modelName, specifications);
      getPlotData(specifications, modelName).then((payload) => {
        this.setState({
          plotData: [],
        });
        payload[0].map((payload) => {
          payload.then((payload) => {
            this.setState({
              plotData: [...this.state.plotData, payload],
            });
          });
        });
      });
      this.setState({
        layout: getLayoutInformation(specifications),
      });
    }
  }
  render() {
    const { modelName } = this.props;
    const { plotData, layout } = this.state;
    console.log(plotData);
    return (
      <RnDPlot modelName={modelName} plotData={plotData} layout={layout} />
    );
  }
}

export default connect(null, null)(RnDPlotContainer);

// this is a good prime example that history is not only to be retained, but also brought forward to a new age
