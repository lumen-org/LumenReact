import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  getMultiPlotDataById,
  getPlotLayoutById,
} from "../../states/multiplots/selector";
import { getSpecById } from "../../states/specifications/selector.js";
import { getSpecificationId } from "../../states/plots/selector.js";

import MultiPlot from "./MultiPlot";
import {
  fetchMultiPlotData,
  fetchMultiPlotLayout,
} from "../../states/multiplots/actions";

class MultiPlotContainer extends React.Component {
  static propTypes = {
    fetchPlotData: PropTypes.func,
    fetchPlotLayout: PropTypes.func,
    plotData: PropTypes.array,
    layout: PropTypes.object,
    id: PropTypes.number,
  };

  getPlotInfo = () => {
    const { fetchMultiPlotLayout, fetchMultiPlotData, id } = this.props;
    fetchMultiPlotData(id);
    fetchMultiPlotLayout(id);
  };

  componentDidUpdate(prevProps) {
    if (prevProps.specifications !== this.props.specifications) {
      this.getPlotInfo();
    }
  }

  render() {
    const { plotData, layout } = this.props;
    console.log(layout);
    return <MultiPlot plotData={plotData} layout={layout} />;
  }
}

const mapDispatchToProps = {
  fetchMultiPlotData,
  fetchMultiPlotLayout,
};

const mapStateToProps = (state, ownProps) => {
  return {
    plotData: getMultiPlotDataById(state, ownProps.id),
    layout: getPlotLayoutById(state, ownProps.id),
    specifications: getSpecById(state, getSpecificationId(state, ownProps.id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MultiPlotContainer);
