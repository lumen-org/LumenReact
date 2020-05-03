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
    const { plots, activeModel, specifications, createPlot } = this.props;
    if (plots.length === 0) {
      createPlot(specifications, activeModel);
    }
  }

  componentDidUpdate(prevProps, preState) {
    const {
      activeModel,
      specifications,
      createPlot,
      updateSpec,
      activePlotId,
    } = this.props;
    if (prevProps.activeModel !== activeModel) {
      createPlot(specifications, activeModel);
    } else if (prevProps.specifications !== this.props.specifications) {
      updateSpec(activePlotId, specifications);
    }
  }

  render() {
    const { plots } = this.props;
    return <VisualizationCanvas plots={plots} />;
  }
}

const mapStateToProps = (state) => ({
  activeModel: state.app.activeModel,
  specifications: state.model.specifications,
  plots: state.plots.plots,
  activePlotId: state.plots.activePlotId,
});

const mapDispatchToProps = (dispatch) => {
  return {
    createPlot: (specifications, activeModel) =>
      dispatch(createNewPlot(specifications, activeModel)),
    updateSpec: (id, newSpecifications) =>
      dispatch(updatePlotSpecifictions(id, newSpecifications)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VisualizationCanvasContainer);
