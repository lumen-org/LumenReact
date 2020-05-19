import React, { Component } from "react";
import PropTypes from "prop-types";
import Facet from "./Facet";
import { connect } from "react-redux";
import { updateFacetState } from "../../states/specifications/actions";
import { selectCurrentSpecification } from "../../states/specifications/selector";

class FacetContainer extends React.Component {
  render() {
    const { facets } = this.props.specifications;
    return (
      <Facet
        facets={facets}
        onFacetDataUpdate={this.updateFacetData}
        onFacetModelUpdate={this.updateFacetModel}
      />
    );
  }

  updateFacetData = (isBoxChecked) => {
    const { changeFacets } = this.props;
    changeFacets(isBoxChecked, "data");
  };

  updateFacetModel = (isBoxChecked) => {
    const { changeFacets } = this.props;
    changeFacets(isBoxChecked, "model");
  };
}

const mapStateToProps = (state) => {
  return {
    specifications: selectCurrentSpecification(state.specifications),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeFacets: (isBoxChecked, type) =>
      dispatch(updateFacetState({ type: type, key: isBoxChecked })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FacetContainer);
