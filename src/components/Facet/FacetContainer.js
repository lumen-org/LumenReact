import React, { Component } from "react";
import PropTypes from "prop-types";
import Facet from "./Facet";
import { connect } from "react-redux";
import { updateFacetState } from "../../states/standardspecifications/actions";
import { selectActiveSpecificationId } from "../../states/visualizations/selector";
import {
  fetchTrainingDataPoints,
  fetchModelDataPoints,
  fetchModelMarginals,
  fetchModelDensityData,
  fetchModelPrediction,
  fetchDataDensity,
  fetchDataMarginals,
  fetchDataPrediction,
} from "../../states/standardplots/actions";
import { aggregationName, densityName, marginalName, samplesName } from "../../configs/specificationFacetsConfig";
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
      fetchDataMarginals,
      fetchDataDensity,
      fetchDataPrediction,
    } = this.props;

    if (facets[key].data === false && key === samplesName) {
      fetchTrainingDataPoints();
    }

    if (facets[key].data === false && key === aggregationName) {
      fetchDataPrediction();
    }

    if (facets[key].data === false && key === marginalName) {
      fetchDataMarginals();
    }

    if (facets[key].data === false && key === densityName) {
      fetchDataDensity();
    }

    changeFacets(activeSpecification, key, "data");
  };

  updateFacetModel = (key) => {
    const {
      changeFacets,
      activeSpecification,
      fetchModelDataPoints,
      fetchModelMarginals,
      fetchModelDensityData,
      fetchModelPrediction,
      facets,
    } = this.props;
    if (facets[key].model === false && key === samplesName) {
      fetchModelDataPoints();
    }

    if (facets[key].model === false && key === aggregationName) {
      fetchModelPrediction();
    }

    if (facets[key].model === false && key === marginalName) {
      fetchModelMarginals();
    }

    if (facets[key].model === false && key === densityName) {
      fetchModelDensityData();
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
    fetchModelMarginals: () => dispatch(fetchModelMarginals()),
    fetchModelDensityData: () => dispatch(fetchModelDensityData()),
    fetchModelPrediction: () => dispatch(fetchModelPrediction()),
    fetchDataDensity: () => dispatch(fetchDataDensity()),
    fetchDataMarginals: () => dispatch(fetchDataMarginals()),
    fetchDataPrediction: () => dispatch(fetchDataPrediction()),
    changeFacets: (id, item, type) =>
      dispatch(updateFacetState({ id: id, type: type, key: item })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FacetContainer);
