import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import fetchData from "../../utils/fetch";
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

  componentDidMount() {
    const { modelName } = this.props;

    FETCH_SCHEMA.FROM = modelName;
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

const mapStateToProps = state => ({
  modelName: state.app.currentModel
});

export default connect(mapStateToProps, null)(SchemaContainer);
