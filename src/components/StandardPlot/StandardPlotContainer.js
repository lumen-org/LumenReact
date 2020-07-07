import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  getPlotDataById,
  getPlotLayoutById,
} from "../../states/plots/selector";
import { getSpecById } from "../../states/specifications/selector.js";
import StandardPlot from "./StandardPlot";
import { fetchPlotData, fetchPlotLayout } from "../../states/plots/actions";
class StandardPlotContainer extends React.Component {
  static propTypes = {
    fetchPlotData: PropTypes.func,
    fetchPlotLayout: PropTypes.func,
    plotData: PropTypes.array,
    layout: PropTypes.object,
    id: PropTypes.number,
  };

  getPlotInfo = () => {
    const { fetchPlotLayout, fetchPlotData, id } = this.props;
    fetchPlotData(id);
    fetchPlotLayout(id);
  };

  componentDidUpdate(prevProps) {
    if (prevProps.specifications !== this.props.specifications) {
      this.getPlotInfo();
    }
  }

  render() {
    const { plotData, layout } = this.props;
    return <StandardPlot plotData={plotData} layout={layout} />;
  }
}

const mapDispatchToProps = {
  fetchPlotData,
  fetchPlotLayout,
};

const mapStateToProps = (state, ownProps) => {
  return {
    plotData: getPlotDataById(state, ownProps.id),
    layout: getPlotLayoutById(state, ownProps.id),
    specifications: getSpecById(state, ownProps.id),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StandardPlotContainer);
