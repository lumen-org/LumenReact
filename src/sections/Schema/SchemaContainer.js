import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import fetchData from "../../utils/fetch";
import Schema from "./Schema";
import { BASE_URL } from "../../constants/query";

class SchemaContainer extends React.Component {
  static propTypes = {
    modelName: PropTypes.string.isRequired
  };

  state = {
    quantitativeFields: [],
    categoricalFields: []
  };

  // TODO: CAN WE THINK OF A BETTER NAME THANK SCHEMA, AND FEILDS?

  getData = FETCH_SCHEMA => {
    fetchData(BASE_URL, FETCH_SCHEMA).then(response =>
      this.setState({
        categoricalFields: response["fields"]
          .filter((field, index) => {
            return field.dtype === "string";
          })
          .map(field => field.name),
        quantitativeFields: response["fields"]
          .filter((field, index) => {
            return field.dtype === "numerical";
          })
          .map(field => field.name)
      })
    );
  };

  componentDidMount() {
    const { modelName } = this.props;
    const FETCH_SCHEMA = { SHOW: "HEADER", FROM: modelName };
    console.log("model name:", modelName);

    this.getData(FETCH_SCHEMA);
  }

  componentDidUpdate(prevProps, preState) {
    if (prevProps.modelName !== this.props.modelName) {
      const { modelName } = this.props;
      const FETCH_SCHEMA = { SHOW: "HEADER", FROM: modelName };
      console.log("model name:", modelName);

      this.getData(FETCH_SCHEMA);
    }
  }
  render() {
    const { quantitativeFields, categoricalFields } = this.state;
    return (
      <Schema
        quantitative={quantitativeFields}
        categorical={categoricalFields}
      />
    );
  }
}

export default SchemaContainer;
