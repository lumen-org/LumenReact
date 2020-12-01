import React from "react";
import { connect } from "react-redux";
import standardspecifications from "../../states/standardspecifications/reducer";
import VisualizationCanvas from "./VisualizationCanvas";

class VisualizationCanvasContainer extends React.Component {

  render() {
    const { plots, specifications, models} = this.props;
    return <VisualizationCanvas plots={plots} specifications={specifications} standardspecifications={standardspecifications} models={models}/>;
  }
}

const mapStateToProps = (state) => ({
  plots: state.plots.plots.byId,
  models: state.models.models.byId,
  specifications: state.specifications.specifications.byId,
  standardspecifications : state.standardspecifications.standardspecifications
});

export default connect(
  mapStateToProps,
  null
)(VisualizationCanvasContainer);
