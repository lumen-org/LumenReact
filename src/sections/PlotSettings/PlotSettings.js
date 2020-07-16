import React, { Component } from "react";
import PropTypes from "prop-types";
import GridLayout from "react-grid-layout";

import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";

import "./PlotSettings.css";
import Schema from "../Schema";
import Specification from "../Specification";

class PlotSettings extends Component {
  static propTypes = {
    activeModel: PropTypes.string.isRequired,
  };

  render() {
    const { activeModel } = this.props;
    const layout2 = [
      { i: "schema", x: 0, y: 0, w: 1, h: 10, static: true },
      { i: "specification", x: 1, y: 0, w: 1, h: 10, static: true },
    ];
    return (
      <div className="row plotSettings-container">
      <DndProvider backend={Backend}>
          <div key="schema" className="col-6 layout-schema">
            <Schema modelName={activeModel} />
          </div>
          <div key="specification" className=" col-6 layout-specification">
            <Specification />
          </div>
      </DndProvider>
      </div>
    );
  }
}

export default PlotSettings;
