import React, { Component } from "react";
import { connect } from "react-redux";
import {
  createNewPlot,
  updatePlotSpecifictions,
} from "../../states/plots/actions";
import PropTypes from "prop-types";
import VisualizationCanvas from "./VisualizationCanvas";
import { selectCurrentSpecification } from "../../states/model/selector";

class VisualizationCanvasContainer extends React.Component {
  componentDidUpdate(prevProps, preState) {
    const { specifications, updateSpec, activePlotId } = this.props;

    if (prevProps.specifications !== this.props.specifications) {
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
  specifications: selectCurrentSpecification(state.model).specification,
  plots: state.plots.plots,
  activePlotId: state.plots.activePlotId,
});

const mapDispatchToProps = (dispatch) => {
  return {
    createPlot: (activeModel) => dispatch(createNewPlot(activeModel)),
    updateSpec: (id, newSpecifications) =>
      dispatch(updatePlotSpecifictions(id, newSpecifications)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VisualizationCanvasContainer);
