import React from "react";
import { connect } from "react-redux";
import VisualizationCanvas from "./VisualizationCanvas";

class VisualizationCanvasContainer extends React.Component {

  render() {
    const { plots, specifications } = this.props;
    return <VisualizationCanvas plots={plots} specifications={specifications}/>;
  }
}

const mapStateToProps = (state) => ({
  plots: state.plots.plots.byId,
  specifications: state.specifications.specifications
});

export default connect(
  mapStateToProps,
  null
)(VisualizationCanvasContainer);
