import React, { Component } from "react";
import PropTypes from "prop-types";
import "./StandardPlot.css";
import { defaultPlotTraces } from "./defaultPlotTraces";
// We need to import Plotly in this strange way due to heap memory
// See issue: https://github.com/plotly/react-plotly.js/issues/135
import createPlotlyComponent from "react-plotly.js/factory";
const Plotly = window.Plotly;
const Plot = createPlotlyComponent(Plotly);

class StandardPlot extends Component {
  static propTypes = {
    plotData: PropTypes.array,
    specification: PropTypes.object,
    facets: PropTypes.object,
  };

  state = {
    layout: {
      autosize: true,
      xaxis: {
        domain: [0, 0.85],
      },
      yaxis: {
        domain: [0, 0.85],
      },
      xaxis2: {
        domain: [0.85, 1],
      },
      yaxis2: {
        domain: [0.85, 1],
      },
    },
    data: [
      {
        x: [],
        y: [],
        from: "data",
        ...defaultPlotTraces.scatterTrace,
      },
      {
        y: [],
        from: "data",
        ...defaultPlotTraces.yHistogramTrace,
      },
      {
        x: [],
        from: "data",
        ...defaultPlotTraces.xHistogramTrace,
      },
      {
        x: [],
        y: [],
        from: "model",
        ...defaultPlotTraces.scatterTrace,
      },
      {
        y: [],
        from: "model",
        ...defaultPlotTraces.yHistogramTrace,
      },
      {
        x: [],
        from: "model",
        ...defaultPlotTraces.xHistogramTrace,
      },
    ],
  };

  setDefaultPlotState = () => {
    const { plotData } = this.props;
    const { data } = this.state;
    console.log("plotData:", plotData);
    const newScatterTrace = {
      ...data[0],
      x: plotData.x,
      y: plotData.y,
    };

    const newYHistogramTrace = {
      ...data[1],
      y: plotData.y,
    };
    const newXHistogramTrace = {
      ...data[2],
      x: plotData.x,
    };
    this.setState({
      data: [
        newScatterTrace,
        newYHistogramTrace,
        newXHistogramTrace,
        ...this.state.data.slice(3),
      ],
    });
  };

  // TODO: implement a callback so that the plot state are saved in the store

  componentDidMount() {
    // set the initial state according to the default state in facets
    this.setDefaultPlotState();
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.plotData !== this.props.plotData ||
      prevProps.specification !== this.props.specification ||
      prevProps.facets !== this.props.facets
    ) {
      this.setDefaultPlotState();
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
