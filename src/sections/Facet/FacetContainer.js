import React, { Component } from "react";
import PropTypes from "prop-types";
import Facet from "./Facet";
import { connect } from "react-redux";
import { updateFacetState } from "../../states/specifications/actions";
import { selectActiveSpecificationId } from "../../states/visualizations/selector";
import {
  fetchTrainingDataPoints,
  fetchModelDataPoints,
} from "../../states/standardplots/actions";
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
    const {
      changeFacets,
      activeSpecification,
      facets,
      fetchTrainingDataPoints,
    } = this.props;

    if (facets[key].data === false && key === "Data Points") {
      fetchTrainingDataPoints();
    }

    if (facets[key].data === false && key === "Prediction") {
    }

    if (facets[key].data === false && key === "Marginals") {
    }

    if (facets[key].data === false && key === "Density") {
    }

    changeFacets(activeSpecification, key, "data");
  };

  updateFacetModel = (key) => {
    const {
      changeFacets,
      activeSpecification,
      fetchModelDataPoints,
      facets,
    } = this.props;
    if (facets[key].model === false && key === "Data Points") {
      fetchModelDataPoints();
    }

    if (facets[key].model === false && key === "Prediction") {
    }

    if (facets[key].model === false && key === "Marginals") {
    }

    if (facets[key].model === false && key === "Density") {
    }
    changeFacets(activeSpecification, key, "model");
  };
}

const mapStateToProps = (state) => {
  return {
    activeSpecification: selectActiveSpecificationId(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTrainingDataPoints: () => dispatch(fetchTrainingDataPoints()),
    fetchModelDataPoints: () => dispatch(fetchModelDataPoints()),

    changeFacets: (id, item, type) =>
      dispatch(updateFacetState({ id: id, type: type, key: item })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FacetContainer);
