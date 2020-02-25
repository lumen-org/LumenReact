import React, { Component } from "react";
import GridLayout from "react-grid-layout";
import PlotSettings from "./sections/PlotSettings";
import Playground from "./sections/Playground";
import "./App.css";

class App extends Component {
  render() {
    const layout1 = [
      { i: "settings", x: 0, y: 0.5, w: 3, h: 10, static: true },
      { i: "playground", x: 3, y: 0.5, w: 7, h: 10, static: true }
    ];

    return (
      <GridLayout className="layout" layout={layout1} cols={12} width={2000}>
        <div key="settings">
          <PlotSettings />
        </div>

        <div key="playground" className="layout-playground">
          <Playground />
        </div>
      </GridLayout>
    );
  }
}

export default App;
