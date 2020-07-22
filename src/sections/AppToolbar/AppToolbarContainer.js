import React, { Component } from "react";
import PropTypes from "prop-types";
import AppToolbar from "./AppToolbar";
import { connect } from "react-redux";
import { changeActivePlot, deletePlot } from "../../states/plots/actions";
import { selectActiveModelId } from "../../states/visualizations/selector";
import { showPCIGraph } from "../../states/models/actions";

class AppToolbarContainer extends React.Component {
  handleQueryClick = () => {
    console.log("query...");
  };

  handleCloneClick = () => {
    console.log("query...");
  };

  handleUndoClick = () => {
    console.log("query...");
  };

  handleRedoClick = () => {
    console.log("query...");
  };

  handleClearClick = () => {
    console.log("query...");
  };

  handleConfigClick = () => {
    console.log("query...");
  };
  handleGraphClick = () => {
    const { activeModelId, showThisPCIGraph } = this.props;
    console.log(activeModelId);
    showThisPCIGraph(activeModelId);
  };
  handleSyncModelClick = () => {
    console.log("query...");
  };
  render() {
    return (
      <AppToolbar
        handleClearClick={this.handleClearClick}
        handleCloneClick={this.handleCloneClick}
        handleConfigClick={this.handleConfigClick}
        handleQueryClick={this.handleQueryClick}
        handleGraphClick={this.handleGraphClick}
        handleRedoClick={this.handleSyncModelClick}
        handleUndoClick={this.handleUndoClick}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  models: state.models.models.byId,
  activeModelId: selectActiveModelId(state),
});

const mapDispatchToProps = (dispatch) => {
  return {
    showThisPCIGraph: (
      modelId
    ) => dispatch(showPCIGraph(modelId)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppToolbarContainer);

