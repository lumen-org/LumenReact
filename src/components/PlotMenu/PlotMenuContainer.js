import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import PlotMenu from "./PlotMenu";
import { v4 as uuidv4 } from "uuid";
import { createNewPlot } from "../../states/plots/actions";
import { createNewSpecification } from "../../states/specifications/actions";
import {
  changeActiveVisualization,
  createNewVisualization,
  fillVisualization,
} from "../../states/visualizations/actions";
import { STANDARD_PLOT, MULTI_PLOT, PCI_PLOT, DMP_PLOT } from "../../constants/plotTypes";
import { STANDARD_SPECIFICATION , DMP_SPECIFICATION} from "../../states/specifications/specificationTypes";
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
  onCreateDMPPlot = ()=> {
    this.createNewPlot(DMP_PLOT)
  }
  createNewPlot = (plotType) => {
    const {
      activeModel,
      changeActiveVisualization,
      createPlot,
      addSpecifications,
      createNewVisualization,
      fillVisualization,
    } = this.props;
    if (activeModel !== ""){
      const specificationId = uuidv4();
      if(plotType === DMP_PLOT){
        addSpecifications(DMP_SPECIFICATION, specificationId);
      }
      else{
        addSpecifications(STANDARD_SPECIFICATION, specificationId);
      }
      createNewVisualization(specificationId);
      createPlot(activeModel, plotType, specificationId);
      fillVisualization();
      changeActiveVisualization();
    }
    else {
      alert("No model selected!");
    }

  };
  render() {
    return (
      <PlotMenu
        onCreateMultiPlot={this.onCreateMultiPlot}
        onCreateStandardPlot={this.onCreateStandardPlot}
        onCreatePCIPlot={this.onCreatePCIPlot}
        onCreateDMPPlot= {this.onCreateDMPPlot}
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
    createNewVisualization: (specificationId) => dispatch(createNewVisualization(specificationId)),
    changeActiveVisualization: () => dispatch(changeActiveVisualization()),
    createPlot: (activeModel, plotType, specificationId) =>
      dispatch(createNewPlot(activeModel, plotType, specificationId)),
    addSpecifications: (specificationType, specificationId) => dispatch(createNewSpecification({specificationType, specificationId})),
    fillVisualization: () => dispatch(fillVisualization()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlotMenuContainer);
