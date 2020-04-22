import React, { Component } from "react";
import PropTypes from "prop-types";
import Facet from "./Facet";
import { connect } from "react-redux";
import { addDataFacet } from "../../states/model/actions";

class FacetContainer extends React.Component {
  render() {
    const { facets } = this.props;
    return <Facet facets={facets} />;
  }

  updateFacetData(){
    
  }
}

const mapStateToProps = state => {
  return {
    facets: state.model.facets
  };
};

const mapDispatchToProps = dispatch => {
  return {
    facets: dataArray1 => dispatch(addDataFacet(dataArray1))
  };
}

export default connect(mapStateToProps, null)(FacetContainer);
