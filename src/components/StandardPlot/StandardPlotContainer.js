import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  getStandardPlotDataById,
  getStandardPlotLoadingState,
} from "../../states/standardplots/selector";
import {
  getSpecById,
  getFacetById,
} from "../../states/specifications/selector.js";
import { getSpecificationId } from "../../states/plots/selector.js";
import StandardPlot from "./StandardPlot";

class StandardPlotContainer extends React.Component {
  static propTypes = {
    plotData: PropTypes.object,
    specification: PropTypes.object,
    facets: PropTypes.object,
    layout: PropTypes.object,
    id: PropTypes.number,
    loading: PropTypes.bool,
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

const mapStateToProps = (state, ownProps) => {
  return {
    plotData: getStandardPlotDataById(state, ownProps.id),
    specification: getSpecById(state, getSpecificationId(state, ownProps.id)),
    facets: getFacetById(state, getSpecificationId(state, ownProps.id)),
  };
};

export default connect(mapStateToProps, null)(StandardPlotContainer);
