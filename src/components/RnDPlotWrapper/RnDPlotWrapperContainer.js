import React from "react";
import { connect } from "react-redux";
import { nextActiveId } from "../../utils/plotData";
import { changeActivePlot, deletePlot } from "../../states/plots/actions";
import { updateActiveModel } from "../../states/app/actions";
import PropTypes from "prop-types";
import RnDPlotWrapper from "./RnDPlotWrapper";
import { changeActiveVisualization } from "../../states/visualizations/actions";
import { selectActiveSpecificationId } from "../../states/visualizations/selector";

class RnDPlotWrapperContainer extends React.Component {
  static propTypes = {
    id: PropTypes.number,
    activePlotId: PropTypes.number,
    zIndex: PropTypes.number,
  };

  onPlotClose = (id) => {
    const {
      deletePlot,
      plots,
      changeActivePlot,
      changeActiveVisualization,
    } = this.props;
    const nextId = nextActiveId(plots.allIds);
    const nextPlot = plots.allIds.filter((plot) => {
      return id === nextId;
    });
    changeActivePlot(nextId);
    if (nextPlot.length !== 0) {
      changeActiveVisualization(nextId);
    }
    deletePlot(id);
  };

  onActivePlotChange = (id) => {
    const {
      changeActivePlot,
      updateActiveModel,
      modelName,
      changeActiveVisualization,
      visualizationId
    } = this.props;
    changeActiveVisualization(visualizationId);
    changeActivePlot(id);
    updateActiveModel(modelName);
  };

  render() {
    const { activePlotId, id, zIndex } = this.props;
    return (
      <RnDPlotWrapper
        zIndex={zIndex}
        id={id}
        activePlotId={activePlotId}
        onPlotClose={this.onPlotClose}
        onActivePlotChange={this.onActivePlotChange}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  plots: state.plots.plots,
  activePlotId: state.plots.activePlotId,
  activeSpecification: selectActiveSpecificationId(state),
});

const mapDispatchToProps = (dispatch) => {
  return {
    changeActiveVisualization: (newActiveModelId) =>
      dispatch(changeActiveVisualization(newActiveModelId)),
    changeActivePlot: (
      newActivePlotId // this function change the zIndex of plot and bring it to the front
    ) => dispatch(changeActivePlot(newActivePlotId)),
    updateActiveModel: (
      newActiveModel // this function trigger the update of models
    ) => dispatch(updateActiveModel(newActiveModel)),
    deletePlot: (id) => dispatch(deletePlot(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RnDPlotWrapperContainer);
