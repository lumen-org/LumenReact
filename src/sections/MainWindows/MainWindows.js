import React, { Component } from "react";
import PlotSettings from "../PlotSettings";
import Playground from "../Playground";
import "./MainWindows.css";

class MainWindows extends Component {
  render() {
    return (
      <div className="MainWindows-Container">
        <PlotSettings />
        <Playground />
      </div>
    );
  }
}

export default MainWindows;
