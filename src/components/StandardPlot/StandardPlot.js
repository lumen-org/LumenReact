import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import React, { Component } from "react";
import PropTypes from "prop-types";
import "./StandardPlot.css";
import { defaultPlot } from "./defaultPlot";
// We need to import Plotly in this strange way due to heap memory
// See issue: https://github.com/plotly/react-plotly.js/issues/135
import createPlotlyComponent from "react-plotly.js/factory";
const Plotly = window.Plotly;
const Plot = createPlotlyComponent(Plotly);

class StandardPlot extends Component {
  static propTypes = {
    plotData: PropTypes.array,
    displayTraces: PropTypes.array,
    specification: PropTypes.object,
    loading: PropTypes.bool,
  };

  state = {
    layout: defaultPlot.layout,
    data: [],
  };

  getNewDataScatterTrace = () => {
    const { plotData } = this.props;
    return {
      ...defaultPlot.scatterTrace,
      x: plotData.trainingDataPoints.x,
      y: plotData.trainingDataPoints.y,
    };
  };

  getNewDataXHistogramTrace = () => {
    const { plotData } = this.props;
    return {
      ...defaultPlot.xHistogramTrace,
      x: plotData.trainingDataPoints.x,
    };
  };

  getNewDataYHistogramTrace = () => {
    const { plotData } = this.props;
    return {
      ...defaultPlot.yHistogramTrace,
      y: plotData.trainingDataPoints.y,
    };
  };

  getNewDataDensityTrace = () => {
    const { plotData } = this.props;
    return {
      ...defaultPlot.densityTrace,
      x: plotData.trainingDataPoints.x,
      y: plotData.trainingDataPoints.y,
    };
  };

  getNewModelScatterTrace = () => {
    const { plotData } = this.props;
    return {
      ...defaultPlot.modelScatterTrace,
      x: plotData.modelDataPoints.x,
      y: plotData.modelDataPoints.y,
    };
  };

  getNewModelXHistogramTrace = () => {
    const { plotData } = this.props;
    return {
      ...defaultPlot.modelXHistogramTrace,
      x: plotData.modelDataPoints.x,
    };
  };

  getNewModelYHistogramTrace = () => {
    const { plotData } = this.props;
    return {
      ...defaultPlot.modelYHistogramTrace,
      y: plotData.modelMarginals.y,
    };
  };

  getNewModelDensityTrace = () => {
    const { plotData } = this.props;
    return {
      ...defaultPlot.modelDensityTrace,
      x: plotData.modelDensity.x || [],
      y: plotData.modelDensity.y || [],
      z: plotData.modelDensity.z || [],
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
      if (traceinfo.name === "Density" && traceinfo.from === "data") {
        data.push(this.getNewDataDensityTrace());
      }
      if (traceinfo.name === "Marginals" && traceinfo.from === "data") {
        data.push(this.getNewDataXHistogramTrace());
        data.push(this.getNewDataYHistogramTrace());
      }
      if (traceinfo.name === "Data Points" && traceinfo.from === "model") {
        data.push(this.getNewModelScatterTrace());
      }
      if (traceinfo.name === "Density" && traceinfo.from === "model") {
        data.push(this.getNewModelDensityTrace());
      }
      if (traceinfo.name === "Marginals" && traceinfo.from === "model") {
        data.push(this.getNewModelXHistogramTrace());
        data.push(this.getNewModelYHistogramTrace());
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
    const { loading } = this.props.plotData;
    return (
      <div>
        <Plot
          data={data}
          layout={layout}
          useResizeHandler={true}
          className="StandardPlot-plot"
        />
        {loading && (
          <Loader
            className={"standardplot-spinner"}
            type="TailSpin"
            color="#6465a1"
            height={80}
            width={80}
          />
        )}
      </div>
    );
  }
}

export default StandardPlot;
