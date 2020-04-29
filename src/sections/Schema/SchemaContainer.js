import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchSchemaData } from "../../utils/fetch";
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

  fetchData = () => {
    const { modelName } = this.props;
    const POST_BODY = { ...FETCH_SCHEMA, FROM: modelName };
    fetchSchemaData(POST_BODY).then((response) =>
      this.setState({
        categoricalFields: response.categoricalFields,
        quantitativeFields: response.quantitativeFields,
      })
    );
  };

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps, preState) {
    if (prevProps.modelName !== this.props.modelName) {
      this.fetchData();
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
