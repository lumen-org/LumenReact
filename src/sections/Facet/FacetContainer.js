import React, { Component } from "react";
import PropTypes from "prop-types";
import Facet from "./Facet";
import { connect } from "react-redux";
import { updateFacetState } from "../../states/model/actions";

class FacetContainer extends React.Component {
  render() {
    const { facets } = this.props;
    return (
      <Facet
        facets={facets}
        onFacetDataUpdate={this.updateFacetData}
        onFacetModelUpdate={this.updateFacetModel}
      />
    );
  }

  updateFacetData = (key) => {
    const { changeFacets } = this.props;
    changeFacets(key, "data");
  };

  updateFacetModel = (key) => {
    const { changeFacets } = this.props;
    changeFacets(key, "model");
  };

}

const mapStateToProps = (state) => {
  return {
    facets: state.model.facets,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeFacets: (key, type) =>
      dispatch(updateFacetState({ type: type, key: key })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FacetContainer);
