import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import fetchData, { fetchPlotData } from "../../utils/fetch";
import Schema from "./Schema";
import { BASE_URL, FETCH_SCHEMA } from "../../constants/query";

class SchemaContainer extends React.Component {
  static propTypes = {
    modelName: PropTypes.string.isRequired,
  };

  state = {
    quantitativeFields: [],
    categoricalFields: [],
  };

  // TODO: CAN WE THINK OF A BETTER NAME THANK SCHEMA, AND FEILDS?
  // TODO2: Refactor this function to utils/fetch.js

  getData = (POST_BODY) => {
    fetchData(BASE_URL, POST_BODY).then((response) =>
      this.setState({
        categoricalFields: response["fields"]
          .filter((field, index) => {
            return field.dtype === "string";
          })
          .map((field) => field.name),
        quantitativeFields: response["fields"]
          .filter((field, index) => {
            return field.dtype === "numerical";
          })
          .map((field) => field.name),
      })
    );
  };

  componentDidMount() {
    const { modelName } = this.props;
    const POST_BODY = { ...FETCH_SCHEMA, FROM: modelName };
    this.getData(POST_BODY);
  }

  componentDidUpdate(prevProps, preState) {
    if (prevProps.modelName !== this.props.modelName) {
      const { modelName } = this.props;
      const POST_BODY = { ...FETCH_SCHEMA, FROM: modelName };
      this.getData(POST_BODY);
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
