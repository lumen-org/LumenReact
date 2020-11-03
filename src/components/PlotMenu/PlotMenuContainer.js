import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import PlotMenu from "./PlotMenu";
import { createNewPlot } from "../../states/plots/actions";
import { createNewSpecification } from "../../states/specifications/actions";
import {
  changeActiveVisualization,
  createNewVisualization,
  fillVisualization,
} from "../../states/visualizations/actions";
import { STANDARD_PLOT, MULTI_PLOT, PCI_PLOT } from "../../constants/plotTypes";
class PlotMenuContainer extends React.Component {
  static propTypes = {
    activeModel: PropTypes.string,
  };

  onCreateStandardPlot = () => {
    this.createNewPlot(STANDARD_PLOT);
  };
  onCreateMultiPlot = () => {
    this.createNewPlot(MULTI_PLOT);
  };
  onCreatePCIPlot = () => {
    this.createNewPlot(PCI_PLOT);
  };

  createNewPlot = (plotType) => {
    const {
      activeModel,
      changeActiveVisualization,
      createPlot,
      addSpecifications,
      createNewVisualization,
      fillVisualization,
    } = this.props;

    addSpecifications();
    createNewVisualization();
    createPlot(activeModel, plotType);
    fillVisualization();
    changeActiveVisualization();
  };
  render() {
    return (
      <PlotMenu
        onCreateMultiPlot={this.onCreateMultiPlot}
        onCreateStandardPlot={this.onCreateStandardPlot}
        onCreatePCIPlot={this.onCreatePCIPlot}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    activeModel: state.app.activeModel,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createNewVisualization: () => dispatch(createNewVisualization()),
    changeActiveVisualization: () => dispatch(changeActiveVisualization()),
    createPlot: (activeModel, plotType) =>
      dispatch(createNewPlot(activeModel, plotType)),
    addSpecifications: () => dispatch(createNewSpecification()),
    fillVisualization: () => dispatch(fillVisualization()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlotMenuContainer);
