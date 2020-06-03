import React from "react";
import { connect } from "react-redux";
import {
  getPlotData,
  getLayoutInformation,
  nextActiveId,
} from "../../utils/plotData";
import { changeActivePlot, deletePlot } from "../../states/plots/actions";
import { updateActiveModel } from "../../states/app/actions";
import PropTypes from "prop-types";
import RnDPlot from "./RnDPlot";
import { changeActiveModel } from "../../states/models/actions";
import { selectActiveSpecificationId } from "../../states/models/selector";

class RnDPlotContainer extends React.Component {
  static propTypes = {
    id: PropTypes.number,
    activePlotId: PropTypes.number,
    zIndex: PropTypes.number,
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
    if (
      prevProps.specifications !== this.props.specifications
    ) {
      this.setPlotData();
    }
  }

  onPlotClose = (id) => {
    const {
      deletePlot,
      plots,
      changeActivePlot,
      changeActiveModel,
    } = this.props;
    const nextId = nextActiveId(plots.allIds);
    const nextPlot = plots.allIds.filter((plot) => {
      return id === nextId;
    });
    changeActivePlot(nextId);
    if (nextPlot.length !== 0){
      changeActiveModel(nextId)
    }
    deletePlot(id);
  };

  onActivePlotChange = (id) => {
    const {
      changeActivePlot,
      updateActiveModel,
      modelName,
      changeActiveModel,
    } = this.props;
    changeActiveModel(id);
    changeActivePlot(id);
    updateActiveModel(modelName);
  };

  render() {
    const { modelName, activePlotId, id, zIndex } = this.props;
    const { plotData, layout } = this.state;
    return (
      <RnDPlot
        modelName={modelName}
        plotData={plotData}
        zIndex={zIndex}
        layout={layout}
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
  activeSpecification: selectActiveSpecificationId(state)
});

const mapDispatchToProps = (dispatch) => {
  return {
    changeActiveModel: (newActiveModelId) => dispatch(changeActiveModel(newActiveModelId)),
    changeActivePlot: (
      newActivePlotId // this function change the zIndex of plot and bring it to the front
    ) => dispatch(changeActivePlot(newActivePlotId)),
    updateActiveModel: (
      newActiveModel // this function trigger the update of schemes
    ) => dispatch(updateActiveModel(newActiveModel)),
    deletePlot: (id) => dispatch(deletePlot(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RnDPlotContainer);

// this is a good prime example that history is not only to be retained, but also brought forward to a new age
