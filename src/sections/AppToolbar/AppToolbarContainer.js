import React, { Component } from "react";
import PropTypes from "prop-types";
import AppToolbar from "./AppToolbar";
import { connect } from "react-redux";
import { changeActivePlot, deletePlot } from "../../states/plots/actions";
import { showPCIGraph } from "../../states/models/actions";
import { selectActiveModelId } from "../../states/visualizations/selector";

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
    const { activeModelId } = this.props;
    showPCIGraph(activeModelId);
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
  activeModelId: selectActiveModelId,
});

const mapDispatchToProps = (dispatch) => {
  return {
    showPCIGraph: (
      modelId
    ) => dispatch(showPCIGraph(modelId)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppToolbarContainer);

