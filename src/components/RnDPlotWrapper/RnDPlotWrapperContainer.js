import React from "react";
import { connect } from "react-redux";
import { nextActiveId } from "../../utils/plotData";
import { changeActivePlot, deletePlot } from "../../states/plots/actions";
import { updateActiveModel } from "../../states/app/actions";
import PropTypes from "prop-types";
import RnDPlotWrapper from "./RnDPlotWrapper";
import {
  changeActiveVisualization,
  deleteVisualization,
} from "../../states/visualizations/actions";
import {
  selectActiveSpecificationId,
  selectActivePlotType,
} from "../../states/visualizations/selector";
import { getPlotTypeById } from "../../states/plots/selector";

class RnDPlotWrapperContainer extends React.Component {
  static propTypes = {
    id: PropTypes.number, // refractor needed, change id to visId
    activePlotId: PropTypes.number,
    activePlotType: PropTypes.string,
    zIndex: PropTypes.number,
  };

  onPlotClose = (id) => {
    const {
      deletePlot,
      plots,
      changeActivePlot,
      changeActiveVisualization,
      deleteVisualization,
      activePlotType,
    } = this.props;
    const nextId = plots.allIds[0];
    const getVisualizationId = (plotId) => plots.byId[plotId].visualizationId;
    changeActiveVisualization(getVisualizationId(nextId));
    // deleteSpecification(getVisualizationId(id));
    // deleteModel(id);
    deletePlot(id, activePlotType);
    deleteVisualization(getVisualizationId(id));
  };

  onActivePlotChange = (id) => {
    const {
      changeActivePlot,
      updateActiveModel,
      modelName,
      deleteVisualization,
      changeActiveVisualization,
      visualizationId,
    } = this.props;
    changeActiveVisualization(visualizationId);
    changeActivePlot(id);
    updateActiveModel(modelName);
  };

  componentDidMount() {}

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

const mapStateToProps = (state, ownProps) => ({
  plots: state.plots.plots,
  activePlotId: state.plots.activePlotId,
  activeSpecification: selectActiveSpecificationId(state),
  activePlotType: selectActivePlotType(state),
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
    deleteVisualization: (id) => dispatch(deleteVisualization(id)),
    deletePlot: (id, activePlotType) =>
      dispatch(deletePlot(id, activePlotType)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RnDPlotWrapperContainer);
