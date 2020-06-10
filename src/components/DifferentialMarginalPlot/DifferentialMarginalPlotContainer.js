import React, { Component } from "react";
import { connect } from "react-redux";
import { getPlotData, getLayoutInformation } from "../../utils/plotData";
import PropTypes from "prop-types";
import DifferentialMarginalPlot from "./DifferentialMarginalPlot";

class DifferentialMarginalPlotContainer extends React.Component {
  static propTypes = {
    modelName: PropTypes.string,
    specifications: PropTypes.object,
  };

  state = {
    plotData: [],
    layout: {},
  };

  setPlotData = () => {
    const { modelName, specifications } = this.props;
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
  };

  componentDidUpdate(prevProps) {
    // update the plot according to the change of specifications
    if (prevProps.specifications !== this.props.specifications) {
      this.setPlotData();
    }
  }

  render() {
    const { modelName } = this.props;
    const { plotData, layout } = this.state;
    return (
      <DifferentialMarginalPlot
        plotData={plotData}
        layout={layout}
        modelName={modelName}
      />
    );
  }
}

export default DifferentialMarginalPlotContainer;
