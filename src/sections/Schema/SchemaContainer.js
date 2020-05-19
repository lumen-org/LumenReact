import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchSchemeData } from "../../utils/fetch";
import Schema from "./Schema";
import { BASE_URL, FETCH_SCHEMA } from "../../constants/query";

class SchemaContainer extends React.Component {
  static propTypes = {
    modelName: PropTypes.string.isRequired
  };

  state = {
    quantitativeFields: [],
    categoricalFields: []
  };

  // TODO: CAN WE THINK OF A BETTER NAME THANK SCHEMA, AND FEILDS?
  // TODO2: Refactor this function to utils/fetch.js

  componentDidMount() {
    fetchSchemeData(this.props.modelName).then((response) =>
      {console.log(response);
      this.setState({
        quantitativeFields: response.quantitativeFields,
        categoricalFields: response.categoricalFields
      })}
    );
  }

  componentDidUpdate(prevProps, preState) {
    if (prevProps.modelName !== this.props.modelName) {
      fetchSchemeData(this.props.modelName).then((response) =>
        {console.log(response);
          this.setState({
            quantitativeFields: response.quantitativeFields,
            categoricalFields: response.categoricalFields
          })}
      );
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
