import React, { Component } from "react";
import { connect } from "react-redux";
import { getPlotData, getLayoutInformation } from "../../utils/plotData";
import { changeActivePlot } from "../../states/plots/actions";
import PropTypes from "prop-types";
import RnDPlot from "./RnDPlot";

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
  componentDidMount() {
    const { modelName, specifications } = this.props;
    // open a warning banner if there are no specifications
  }

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

  componentDidUpdate(prevProps, preState) {
    // update the plot according to the change of specifications
    if (
      prevProps.modelName !== this.props.modelName ||
      prevProps.specifications !== this.props.specifications
    ) {
      this.setPlotData();
    }
  }

  onActivePlotChange = (id) => {
    const { changeActivePlot } = this.props;
    changeActivePlot(id);
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
        onActivePlotChange={this.onActivePlotChange}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  activeModel: state.app.activeModel,
  activePlotId: state.plots.activePlotId,
});

const mapDispatchToProps = (dispatch) => {
  return {
    changeActivePlot: (newActivePlotId) =>
      dispatch(changeActivePlot(newActivePlotId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RnDPlotContainer);

// this is a good prime example that history is not only to be retained, but also brought forward to a new age
