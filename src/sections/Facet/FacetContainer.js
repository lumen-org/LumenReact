import React, { Component } from "react";
import PropTypes from "prop-types";
import Facet from "./Facet";
import { connect } from "react-redux";
import { updateFacetState } from "../../states/specifications/actions";
import { selectActiveSpecificationId } from "../../states/models/selector";

class FacetContainer extends React.Component {
  render() {
    return (
          <Facet
            facets={this.props.facets}
            onFacetDataUpdate={this.updateFacetData}
            onFacetModelUpdate={this.updateFacetModel}
          />
    );
  }

  updateFacetData = (key) => {
    const { changeFacets, activeSpecification } = this.props;
    changeFacets(activeSpecification, key, "data");
  };

  updateFacetModel = (key) => {
    const { changeFacets, activeSpecification } = this.props;
    changeFacets(activeSpecification, key, "model");
  };
}

const mapStateToProps = (state) => {
  return {
    activeSpecification: selectActiveSpecificationId(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeFacets: (id, key, type) =>
      dispatch(updateFacetState({ id: id, type: type, key: key })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FacetContainer);
