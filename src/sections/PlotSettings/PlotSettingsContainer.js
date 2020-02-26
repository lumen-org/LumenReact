import React, { Component } from "react";
import { MODEL_POST_RESULT } from "../../mockdata";
import PlotSettings from "./PlotSettings";

class PlotSettingsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetch_query: MODEL_POST_RESULT
    };
    this.schema_list = this.get_data_list(this.state.fetch_query);
    this.specificaiton_list = this.get_data_list(this.state.fetch_query);
  }

  get_data_list(data) {
    const categorical_vals = ["string"];
    let obj = { "Quantitative": [], "Categorical": [] };
    obj.Categorical = data.fields.filter(field => categorical_vals.indexOf(field.dtype) !== -1).map(field => field.name);
    obj.Quantitative = data.fields.filter(field => categorical_vals.indexOf(field.dtype) === -1).map(field => field.name);
    return obj;
  }

  render() {
    return <PlotSettings schema_list={this.schema_list} specification_list={this.specificaiton_list}/>;
  }
}

export default PlotSettingsContainer
