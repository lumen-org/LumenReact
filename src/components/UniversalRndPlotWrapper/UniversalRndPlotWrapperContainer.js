import React from "react";
import { connect } from "react-redux";
import { nextActiveId } from "../../utils/plotData";
import { changeActivePlot, deletePlot } from "../../states/plots/actions";
import { updateActiveModel } from "../../states/app/actions";
import PropTypes from "prop-types";
import RnDPlotWrapper from "./UniversalRndPlotWrapper";
import { changeActiveVisualization, deleteVisualization } from "../../states/visualizations/actions";
import { selectActiveSpecificationId } from "../../states/visualizations/selector";

class RnDPlotWrapperContainer extends React.Component {
  static propTypes = {
    id: PropTypes.number,
    activePlotId: PropTypes.number,
    zIndex: PropTypes.number,
    onPlotClose: PropTypes.func,
    onActivePlotChange: PropTypes.func,
    component: PropTypes.func,
  };


  render() {
    const { activePlotId, id, zIndex, onPlotClose, onActivePlotChange} = this.props;
    return (
      <RnDPlotWrapper
        zIndex={zIndex}
        id={id}
        activePlotId={activePlotId}
        onPlotClose={onPlotClose}
        onActivePlotChange={onActivePlotChange}
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
    deleteVisualization: (id) => dispatch(deleteVisualization(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RnDPlotWrapperContainer);
