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
  // TODO: We need to think about a way where we could seperate modelName and specifications
  // from this wrapper

  static propTypes = {
    id: PropTypes.number,
    activePlotId: PropTypes.number,
    zIndex: PropTypes.number,
    modelName: PropTypes.string,
    specifications: PropTypes.object,
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
    } = this.props;
    changeActiveVisualization(id);
    changeActivePlot(id);
    updateActiveModel(modelName);
  };

  render() {
    const { modelName, activePlotId, id, zIndex, specifications } = this.props;
    return (
      <RnDPlotWrapper
        modelName={modelName}
        specifications={specifications}
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

// this is a good prime example that history is not only to be retained, but also brought forward to a new age
