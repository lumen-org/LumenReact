import React, { Component } from "react";
import { connect } from "react-redux";
import { getPlotData, getLayoutInformation } from "../../utils/plotData";
import { createNewPlot } from "../../states/plots/actions";
import PropTypes from "prop-types";
import RnDPlot from "./RnDPlot";

class RnDPlotContainer extends React.Component {
  static propTypes = {
    id: PropTypes.number,
    activePlotId: PropTypes.number,
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

  onActivePlotChange = () => {};
  render() {
    const { modelName, activePlotId, id } = this.props;
    const { plotData, layout } = this.state;
    return (
      <RnDPlot
        modelName={modelName}
        plotData={plotData}
        layout={layout}
        id={id}
        activePlotId={activePlotId}
        onUpdateActivePlo={this.onActivePlotChange}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  activeModel: state.app.activeModel,
  activePlotId: state.plots.activePlotId,
});
export default connect(mapStateToProps, null)(RnDPlotContainer);

// this is a good prime example that history is not only to be retained, but also brought forward to a new age
