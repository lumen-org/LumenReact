import React, { Component } from "react";
import PropTypes from "prop-types";
import Facet from "./Facet";
import { connect } from "react-redux";

class FacetContainer extends React.Component {
  render() {
    const { facets } = this.props;
    return <Facet facets={facets} />;
  }
}

const mapStateToProps = state => {
  return {
    facets: state.model.facets
  };
};

export default connect(mapStateToProps, null)(FacetContainer);
