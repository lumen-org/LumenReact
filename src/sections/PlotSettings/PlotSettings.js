import React, { Component } from "react";
//import PropTypes from "prop-types";
import GridLayout from "react-grid-layout";

import "./PlotSettings.css";
import Schema from "../Schema";
import { MODEL_POST_RESULT } from "../../mockdata";

class PlotSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetch_query: MODEL_POST_RESULT
    };
    this.data_list = this.get_data_list(this.state.fetch_query);
    console.log(this.data_list);
  }

  get_data_list(data) {
    const categorical_vals = ["string"];
    let obj = { Quantitative: [], Categorical: [] };
    obj.Categorical = data.fields
      .filter(field => categorical_vals.indexOf(field.dtype) !== -1)
      .map(field => field.name);
    obj.Quantitative = data.fields
      .filter(field => categorical_vals.indexOf(field.dtype) === -1)
      .map(field => field.name);
    return obj;
  }

  render() {
    const { layoutKey } = this.props;
    const layout2 = [
      { i: "schema", x: 0, y: 0, w: 1, h: 10, static: true },
      { i: "specification", x: 1, y: 0, w: 1, h: 10, static: true }
    ];
    return (
      <GridLayout
        className="plotSettings-container"
        layout={layout2}
        width={400}
        cols={2}
        rowHeight={100}
      >
        <div key="schema" className="layout-schema">
          <Schema
            titles={Object.keys(this.data_list)}
            data_lists={this.data_list}
          />
        </div>
        <div key="specification" className="layout-specification">
          {" "}
          Specification{" "}
        </div>
      </GridLayout>
    );
  }
}

export default PlotSettings;
