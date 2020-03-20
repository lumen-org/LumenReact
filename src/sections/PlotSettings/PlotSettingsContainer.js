import React, { Component } from "react";
import { MODEL_POST_RESULT } from "../../mockdata";
import PlotSettings from "./PlotSettings";
import { connect } from "react-redux";

class PlotSettingsContainer extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      fetch_query: MODEL_POST_RESULT
    };
    this.schema_list = this.get_schema_list(this.state.fetch_query);
    this.specificaiton_list = this.get_specification_list(this.state.fetch_query);
  }

  get_schema_list(data) {
    const categorical_vals = ["string"];
    let obj = { "Quantitative": [], "Categorical": [] };
    obj.Categorical = data.fields.filter(field => categorical_vals.indexOf(field.dtype) !== -1).map(field => field.name);
    obj.Quantitative = data.fields.filter(field => categorical_vals.indexOf(field.dtype) === -1).map(field => field.name);
    return obj;
  }

  get_specification_list(data) {
    // let obj = { "X-Axis": ["Peter"], "Y-Axis": [], "Filter": [], "Detail": [], "Color": [], "Shape": [], "Size": [] };
    return this.props.model_specifications
  }

  render() {
    return <PlotSettings schema_list={this.schema_list} specification_list={this.specificaiton_list}/>;
  }
}

const mapStateToProps = state => {
  return {
    model_specifications: state.model.model_specifications
  }
};

export default connect(mapStateToProps)(PlotSettingsContainer)
