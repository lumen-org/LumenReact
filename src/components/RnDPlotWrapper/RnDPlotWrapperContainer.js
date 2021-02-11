import React from "react";
import { connect } from "react-redux";
import { changeActivePlot, deletePlot } from "../../states/plots/actions";
import { updateActiveModel, _updateActiveModel } from "../../states/app/actions";
import PropTypes from "prop-types";
import RnDPlotWrapper from "./RnDPlotWrapper";
import {
  _changeActiveVisualization,
  deleteVisualization,
} from "../../states/visualizations/actions";
import { selectActiveSpecificationId } from "../../states/visualizations/selector";

class RnDPlotWrapperContainer extends React.Component {
  static propTypes = {
    id: PropTypes.number, // refractor needed, change id to visId
    activePlotId: PropTypes.number,
    zIndex: PropTypes.number,
    plotType: PropTypes.string,
  };

  onPlotClose = (id) => {
    const {
      deletePlot,
      plots,
      _changeActiveVisualization,
      deleteVisualization,
      _updateActiveModel, // for updating the app store
    } = this.props;
    const nextId = plots.allIds[0];
    const getVisualizationId = (plotId) => plots.byId[plotId].visualizationId;
    _changeActiveVisualization(getVisualizationId(nextId));
    deletePlot(id);
    deleteVisualization(getVisualizationId(id));
    _updateActiveModel();
  };

  onActivePlotChange = (id) => {
    const {
      changeActivePlot,
      _updateActiveModel,
      _changeActiveVisualization,
      visualizationId,
    } = this.props;
    _changeActiveVisualization(visualizationId);
    changeActivePlot(id);
    _updateActiveModel();
  };

  render() {
    const { activePlotId, id, zIndex, plotType } = this.props;
    return (
      <RnDPlotWrapper
        zIndex={zIndex}
        id={id}
        activePlotId={activePlotId}
        onPlotClose={this.onPlotClose}
        onActivePlotChange={this.onActivePlotChange}
        plotType={plotType}
      >
        {this.props.children}
      </RnDPlotWrapper>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  plots: state.plots.plots,
  activePlotId: state.plots.activePlotId,
  activeSpecification: selectActiveSpecificationId(state),
});

const mapDispatchToProps = (dispatch) => {
  return {
    _changeActiveVisualization: (id) =>
      dispatch(_changeActiveVisualization(id)),
    changeActivePlot: (
      newActivePlotId // this function change the zIndex of plot and bring it to the front
    ) => dispatch(changeActivePlot(newActivePlotId)),
    updateActiveModel: (
      newActiveModel // this function trigger the update of models
    ) => dispatch(updateActiveModel(newActiveModel)),
    _updateActiveModel: () => dispatch(_updateActiveModel()),
    deleteVisualization: (id) => dispatch(deleteVisualization(id)),
    deletePlot: (id) => dispatch(deletePlot(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RnDPlotWrapperContainer);
