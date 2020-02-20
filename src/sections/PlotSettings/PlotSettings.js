import React, { Component } from "react";
//import PropTypes from "prop-types";
import GridLayout from "react-grid-layout";

import "./PlotSettings.css";

class PlotSettings extends Component {
  render() {
    const { layoutKey } = this.props;
    const layout2 = [
      { i: "schema", x: 0, y: 0, w: 1.5, h: 10, static: true },
      { i: "specification", x: 1.5, y: 0, w: 1.5, h: 10, static: true }
    ];
    return (
      <GridLayout layout={layout2} width={600} cols={4} rowHeight={100}>
        <div key="schema" className="layout-component">
          {" "}
          Schema{" "}
        </div>
        <div key="specification" className="layout-component">
          {" "}
          Specification{" "}
        </div>
      </GridLayout>
    );
  }
}

export default PlotSettings;
