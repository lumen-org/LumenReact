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
    schemaFields: []
  };

  // TODO: CAN WE THINK OF A BETTER NAME THANK SCHEMA, AND FEILDS?

  componentWillMount() {
    const { modelName } = this.props;
    FETCH_SCHEMA.FROM = modelName;
    fetchData(BASE_URL, FETCH_SCHEMA).then(response =>
      this.setState({
        schemaFields: response["fields"]
      })
    );
  }

  render() {
    const { schemaFields } = this.state;
    return <Schema fields={schemaFields} />;
  }
}

const mapStateToProps = state => ({
  modelName: state.app.currentModel
});

export default connect(mapStateToProps, null)(SchemaContainer);
