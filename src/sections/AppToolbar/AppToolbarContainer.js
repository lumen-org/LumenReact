import React, { Component } from "react";
import PropTypes from "prop-types";
import AppToolbar from "./AppToolbar";
import { connect } from "react-redux";

class AppToolbarContainer extends React.Component {
  handleQueryClick = () => {
    console.log("query...");
  };

  handleCloneClick = () => {
    console.log("query...");
  };

  handleQueryClick = () => {
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
    console.log("query...");
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
        handleQueryClick={this.handleQueryClick}
        handleRedoClick={this.handleSyncModelClick}
        handleUndoClick={this.handleUndoClick}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  models: state.models.models.byId,
});

export default connect(
  mapStateToProps,
  null
)(AppToolbarContainer);

