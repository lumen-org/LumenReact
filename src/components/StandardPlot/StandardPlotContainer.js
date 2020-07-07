import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  getPlotDataById,
  getPlotLayoutById,
} from "../../states/plots/selector";
import { getSpecById } from "../../states/specifications/selector.js";
import StandardPlot from "./StandardPlot";
import { fetchStandardPlotData } from "../../states/plots/actions";
class StandardPlotContainer extends React.Component {
  static propTypes = {
    fetchStandardPlotData: PropTypes.func,
    plotData: PropTypes.array,
    specifications: PropTypes.object,
    layout: PropTypes.object,
    id: PropTypes.number,
  };

  getPlotInfo = () => {
    const { fetchStandardPlotData, id } = this.props;
    fetchStandardPlotData(id);
  };

  componentDidUpdate(prevProps) {
    if (prevProps.specifications !== this.props.specifications) {
      this.getPlotInfo();
    }
  }

  render() {
    const { plotData } = this.props;
    console.log(plotData);
    return <StandardPlot plotData={plotData} />;
  }
}

const mapDispatchToProps = {
  fetchStandardPlotData,
};

const mapStateToProps = (state, ownProps) => {
  return {
    plotData: getPlotDataById(state, ownProps.id),
    specifications: getSpecById(state, ownProps.id),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StandardPlotContainer);
