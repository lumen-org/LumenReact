import React, { Component } from "react";
import { connect } from "react-redux";
import {
  createNewPlot,
  updatePlotSpecifictions,
} from "../../states/plots/actions";
import PropTypes from "prop-types";
import VisualizationCanvas from "./VisualizationCanvas";
import { selectCurrentSpecification } from "../../states/specifications/selector";

class VisualizationCanvasContainer extends React.Component {

  render() {
    const { plots, specifications } = this.props;
    return <VisualizationCanvas plots={plots} specifications={specifications}/>;
  }
}

const mapStateToProps = (state) => ({
  activeModel: state.app.activeModel,
  plots: state.plots.plots.byId,
  specifications: state.specifications.specifications
});

const mapDispatchToProps = (dispatch) => {
  return {
    createPlot: (activeModel) => dispatch(createNewPlot(activeModel)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VisualizationCanvasContainer);
