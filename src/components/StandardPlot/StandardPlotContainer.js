import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  getPlotDataById,
  getPlotLayoutById,
} from "../../states/plots/selector";
import {
  getSpecById,
  getFacetById,
} from "../../states/specifications/selector.js";
import StandardPlot from "./StandardPlot";
import { fetchStandardPlotData } from "../../states/plots/actions";
class StandardPlotContainer extends React.Component {
  static propTypes = {
    fetchStandardPlotData: PropTypes.func,
    plotData: PropTypes.array,
    specification: PropTypes.object,
    facets: PropTypes.object,
    layout: PropTypes.object,
    id: PropTypes.number,
  };

  getPlotInfo = () => {
    const { fetchStandardPlotData, id } = this.props;
    fetchStandardPlotData(id);
  };

  componentDidUpdate(prevProps) {
    if (prevProps.specification !== this.props.specification) {
      this.getPlotInfo();
    }
  }

  render() {
    const { plotData, specification, facets } = this.props;
    return (
      <StandardPlot
        plotData={plotData}
        specification={specification}
        facets={facets}
      />
    );
  }
}

const mapDispatchToProps = {
  fetchStandardPlotData,
};

const mapStateToProps = (state, ownProps) => {
  return {
    plotData: getPlotDataById(state, ownProps.id),
    specification: getSpecById(state, ownProps.id),
    facets: getFacetById(state, ownProps.id),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StandardPlotContainer);
