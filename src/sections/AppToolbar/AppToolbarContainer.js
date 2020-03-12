import React, { Component } from "react";
import PropTypes from "prop-types";
import AppToolbar from "./AppToolbar";

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

export default AppToolbarContainer;
