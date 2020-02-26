import React, { Component } from "react";
// import PropTypes from "prop-types";
import GridLayout from "react-grid-layout";

import "./PlotSettings.css";
import Schema from "../Schema";
import Specification from "../Specification";

class PlotSettings extends Component {
  render() {
    const { layoutKey } = this.props;
    const layout2 = [
      { i: "schema", x: 0, y: 0, w: 1.5, h: 10, static: true },
      { i: "specification", x: 1.5, y: 0, w: 1.5, h: 10, static: true }
    ];
    return (
      <GridLayout className="hello" layout={layout2} width={600} cols={4} rowHeight={100}>
        <div key="schema" className="layout-schema">
          <Schema titles={Object.keys(this.props.schema_list)} data_lists={this.props.schema_list}/>
        </div>
        <div key="specification" className="layout-specification">
          <Specification titles={Object.keys(this.props.specification_list)} data_lists={this.props.specification_list}/>
        </div>
      </GridLayout>
    );
  }
}

// PlotSettings.propTypes = {
//
// }

export default PlotSettings;
