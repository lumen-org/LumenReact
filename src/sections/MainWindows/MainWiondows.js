import React, { Component } from "react";
import PlotSettings from "../PlotSettings";
import Playground from "../Playground";
import "./MainWiondows.css";

class MainWiondows extends Component {
  render() {
    return (
      <div>
        <PlotSettings />
        <Playground />
      </div>
    );
  }
}

export default MainWiondows;
