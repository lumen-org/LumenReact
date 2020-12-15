import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getSelectedFieldObjectById } from "../../states/standardplots/utils";
import { getStandardPlotDataById } from "../../states/standardplots/selector";
import {
  getSpecById,
  getFacetById,
} from "../../states/standardspecifications/selector.js";

import {
  fetchOnSpecChange,
  deriveSubmodelsOnSpecChange,
} from "../../states/standardplots/actions";
import { getSpecificationId } from "../../states/plots/selector.js";
import { getModelNameById } from "../../states/models/selector";
import StandardPlot from "./StandardPlot";

class StandardPlotContainer extends React.Component {
  static propTypes = {
    plotData: PropTypes.object,
    specification: PropTypes.object,
    facets: PropTypes.object,
    layout: PropTypes.object,
    id: PropTypes.number,
    loading: PropTypes.bool,
    modelName: PropTypes.string,
    axisFields: PropTypes.object,
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
      const { fetchOnSpecChange, deriveSubmodelsOnSpecChange } = this.props;
      this.getDisplayTraces();
      deriveSubmodelsOnSpecChange();
      fetchOnSpecChange();
    }

    if (
      prevProps.facets !== this.props.facets ||
      prevProps.specification !== this.props.specification
    ) {
      this.getDisplayTraces();
    }
  }

  render() {
    const { plotData, specification, axisFields, modelName } = this.props;

    const { displayTraces } = this.state;
    return (
      <StandardPlot
        plotData={plotData}
        displayTraces={displayTraces}
        specification={specification}
        axisFields={axisFields}
        modelName={modelName}
      />
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchOnSpecChange: () => dispatch(fetchOnSpecChange()),
    deriveSubmodelsOnSpecChange: () => dispatch(deriveSubmodelsOnSpecChange()),
  };
};
const mapStateToProps = (state, ownProps) => {
  return {
    plotData: getStandardPlotDataById(state, ownProps.id),
    specification: getSpecById(state, getSpecificationId(state, ownProps.id)),
    facets: getFacetById(state, getSpecificationId(state, ownProps.id)),
    axisFields: getSelectedFieldObjectById(state, ownProps.id),
    modelName: getModelNameById(state, ownProps.id),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StandardPlotContainer);
