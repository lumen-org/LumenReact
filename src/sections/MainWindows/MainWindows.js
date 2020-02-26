import React, { Component } from "react";
import PlotSettings from "../PlotSettings";
import Playground from "../Playground";
import AppToolbar from "../AppToolbar";
import MainWindowsModal from "../../components/MainWindowsModal";
import "./MainWindows.css";

// TODO: Make it responsive according to tablet size
class MainWindows extends Component {
  state = {
    openModal: false
  };

  handleModelClose = () => {
    this.setState({
      openModal: false
    });
  };
  render() {
    const { openModal } = this.state;

    return (
      <div className="MainWindows-MainContainer">
        <AppToolbar />
        <MainWindowsModal
          open={openModal}
          handleModelClose={this.handleModelClose}
        />

        <div className="MainWindows-Container">
          <PlotSettings />
          <Playground />
        </div>
      </div>
    );
  }
}

export default MainWindows;
