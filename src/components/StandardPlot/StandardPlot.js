import React, { Component } from "react";
import PropTypes from "prop-types";
import "./StandardPlot.css";
import { defaultPlot } from "./defaultPlot";
// We need to import Plotly in this strange way due to heap memory
// See issue: https://github.com/plotly/react-plotly.js/issues/135
import createPlotlyComponent from "react-plotly.js/factory";
const Plotly = window.Plotly;
const Plot = createPlotlyComponent(Plotly);

var xf = Array.from({ length: 50 }, () => Math.random() * (8 - 4 + 1) + 4);
var yf = Array.from({ length: 50 }, () => Math.random() * (8 - 2 + 1) + 2);
class StandardPlot extends Component {
  static propTypes = {
    plotData: PropTypes.array,
    displayTraces: PropTypes.array,
    specification: PropTypes.object,
  };

  state = {
    layout: defaultPlot.layout,
    data: [],
  };

  getNewDataScatterTrace = () => {
    const { plotData } = this.props;
    return {
      ...defaultPlot.scatterTrace,
      x: plotData.x,
      y: plotData.y,
    };
  };

  getNewDataXHistogramTrace = () => {
    const { plotData } = this.props;
    return {
      ...defaultPlot.xHistogramTrace,
      x: plotData.x,
    };
  };

  getNewDataYHistogramTrace = () => {
    const { plotData } = this.props;
    return {
      ...defaultPlot.yHistogramTrace,
      y: plotData.y,
    };
  };

  // TODO: query prediction data, now there are just fake data

  getNewModelScatterTrace = () => {
    const { plotData } = this.props;
    return {
      ...defaultPlot.modelScatterTrace,
      x: xf,
      y: yf,
    };
  };

  // TODO: implement a callback so that the plot state are saved in the store
  setPlotData = () => {
    const { displayTraces } = this.props;
    const data = [];
    displayTraces.map((traceinfo, ind) => {
      if (traceinfo.name === "Data Points" && traceinfo.from === "data") {
        data.push(this.getNewDataScatterTrace());
      }
      if (traceinfo.name === "Data Points" && traceinfo.from === "model") {
        data.push(this.getNewModelScatterTrace());
      }
      if (traceinfo.name === "Marginals" && traceinfo.from === "data") {
        data.push(this.getNewDataXHistogramTrace());
        data.push(this.getNewDataYHistogramTrace());
      }
    });

    this.setState({
      layout: defaultPlot.layout,
      data,
    });
  };

  componentDidMount() {
    this.setPlotData();
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setPlotData();
    }
  }

  render() {
    const { layout, data } = this.state;
    return (
      <Plot
        data={data}
        layout={layout}
        useResizeHandler={true}
        className="StandardPlot-plot"
      />
    );
  }
}

export default StandardPlot;
