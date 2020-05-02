import React, { Component } from "react";
import { connect } from "react-redux";
import {
  createNewPlot,
  updatePlotSpecifictions,
} from "../../states/plots/actions";
import PropTypes from "prop-types";
import VisualizationCanvas from "./VisualizationCanvas";

class VisualizationCanvasContainer extends React.Component {
  componentDidMount() {
    const { plots, currentModel, specifications, createPlot } = this.props;
    if (plots.length === 0) {
      createPlot(specifications, currentModel);
    }
  }

  componentDidUpdate(prevProps, preState) {
    const {
      currentModel,
      specifications,
      createPlot,
      updateSpec,
      currentPlotId,
    } = this.props;
    if (prevProps.currentModel !== currentModel) {
      createPlot(specifications, currentModel);
    } else if (prevProps.specifications !== this.props.specifications) {
      updateSpec(currentPlotId, specifications);
    }
  }

  render() {
    const { plots } = this.props;
    return <VisualizationCanvas plots={plots} />;
  }
}

const mapStateToProps = (state) => ({
  currentModel: state.app.currentModel,
  specifications: state.model.specifications,
  plots: state.plots.plots,
  currentPlotId: state.plots.currentPlotId,
});

const mapDispatchToProps = (dispatch) => {
  return {
    createPlot: (specifications, currentModel) =>
      dispatch(createNewPlot(specifications, currentModel)),
    updateSpec: (id, newSpecifications) =>
      dispatch(updatePlotSpecifictions(id, newSpecifications)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VisualizationCanvasContainer);
