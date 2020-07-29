import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getStandardPlotDataById } from "../../states/plots/selector";
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

  state = {
    displayTraces: [
      {
        name: "Data Points",
        from: "data",
      },
      {
        name: "Marginals",
        from: "data",
      },
    ],
  };

  getPlotInfo = () => {
    const { fetchStandardPlotData, id } = this.props;
    fetchStandardPlotData(id);
  };

  // refractor this to utility? This function filter the facets and return of an array
  // of items that the plot should display.
  getDisplayTraces = () => {
    const { facets } = this.props;
    var displayTraces = [];
    const keys = Object.keys(facets);

    keys.map((key, ind) => {
      if (facets[key]["data"] === true) {
        displayTraces.push({
          name: key,
          from: "data",
        });
      }
      if (facets[key]["model"] === true) {
        displayTraces.push({
          name: key,
          from: "model",
        });
      }
    });
    this.setState({
      displayTraces,
    });
  };

  componentDidUpdate(prevProps) {
    if (prevProps.specification !== this.props.specification) {
      this.getPlotInfo();
      this.getDisplayTraces();
    }

    if (
      prevProps.facets !== this.props.facets ||
      prevProps.specification !== this.props.specification
    ) {
      this.getDisplayTraces();
    }
  }

  render() {
    const { plotData, specification } = this.props;
    const { displayTraces } = this.state;
    return (
      <StandardPlot
        plotData={plotData}
        displayTraces={displayTraces}
        specification={specification}
      />
    );
  }
}

const mapDispatchToProps = {
  fetchStandardPlotData,
};

const mapStateToProps = (state, ownProps) => {
  return {
    plotData: getStandardPlotDataById(state, ownProps.id),
    specification: getSpecById(state, ownProps.id),
    facets: getFacetById(state, ownProps.id),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StandardPlotContainer);
