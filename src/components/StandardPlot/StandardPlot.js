import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import React, { Component } from "react";
import PropTypes from "prop-types";
import "./StandardPlot.css";
import { defaultPlot } from "./defaultPlot";
import Plot from "react-plotly.js";

class StandardPlot extends Component {
  static propTypes = {
    plotData: PropTypes.array,
    displayTraces: PropTypes.array,
    specification: PropTypes.object,
    loading: PropTypes.bool,
    axisField: PropTypes.object,
    modelName: PropTypes.string,
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
      x: plotData.dataMarginals.xAxis.x,
      y: plotData.dataMarginals.xAxis.y,
    };
  };

  getNewDataYHistogramTrace = () => {
    const { plotData } = this.props;
    return {
      ...defaultPlot.yHistogramTrace,
      y: plotData.dataMarginals.yAxis.x,
      x: plotData.dataMarginals.yAxis.y,
    };
  };

  getNewDataDensityTrace = () => {
    const { plotData } = this.props;
    return {
      ...defaultPlot.dataDensityTrace,
      x: plotData.dataDensity.x,
      y: plotData.dataDensity.y,
      z: plotData.dataDensity.z,
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
      x: plotData.modelMarginals.xAxis.x,
      y: plotData.modelMarginals.xAxis.y,
    };
  };

  getNewModelYHistogramTrace = () => {
    const { plotData } = this.props;
    return {
      ...defaultPlot.modelYHistogramTrace,
      y: plotData.modelMarginals.yAxis.x,
      x: plotData.modelMarginals.yAxis.y,
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

  getNewModelPredictionTrace = () => {
    const { plotData } = this.props;
    return {
      ...defaultPlot.modelPredictionTrace,
      x: plotData.modelPrediction.x || [],
      y: plotData.modelPrediction.y || [],
    };
  };

  getNewDataPredictionTrace = () => {
    const { plotData } = this.props;
    return {
      ...defaultPlot.dataPredictionTrace,
      x: plotData.dataPrediction.x || [],
      y: plotData.dataPrediction.y || [],
    };
  };

  setPlotData = () => {
    const { displayTraces, modelName, axisField } = this.props;
    const data = [];
    displayTraces.map((traceinfo, ind) => {
      if (traceinfo.name === "Prediction" && traceinfo.from === "data") {
        data.push(this.getNewDataPredictionTrace());
      }
      if (traceinfo.name === "Prediction" && traceinfo.from === "model") {
        data.push(this.getNewModelPredictionTrace());
      }
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
      layout: {
        ...defaultPlot.layout,
        /*    xaxis: {
          ...defaultPlot.layout.xaxis,
          text: axisField.x,
        },
        yaxis: {
          ...defaultPlot.layout.yaxis,
          text: axisField.y,
        },*/
        title: modelName,
      },
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
