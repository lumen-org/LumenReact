import React, { Component } from "react";
import PlotSettings from "../PlotSettings";
import Playground from "../Playground";
import AppToolbar from "../AppToolbar";
import "./MainWindows.css";

// TODO: Make it responsive according to tablet size
class MainWindows extends Component {
  render() {
    return (
      <div className="MainWindows-MainContainer">
        <AppToolbar />
        <div className="MainWindows-Container">
          <PlotSettings />
          <Playground />
        </div>
      </div>
    );
  }
}

export default MainWindows;
