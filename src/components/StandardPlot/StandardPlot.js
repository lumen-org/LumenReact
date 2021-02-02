import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import React, { Component } from "react";
import PropTypes from "prop-types";
import "./StandardPlot.css";
import { defaultPlot } from "./defaultPlot";
import { markers } from "./markers";
import { createCategoryColorMap } from "./colorPalettes";
import Plot from "react-plotly.js";
class StandardPlot extends Component {
  static propTypes = {
    plotData: PropTypes.array,
    displayTraces: PropTypes.array,
    specification: PropTypes.object,
    loading: PropTypes.bool,
    axisFields: PropTypes.object,
    modelName: PropTypes.string,
    category: PropTypes.array,
  };

  state = {
    layout: defaultPlot.layout,
    data: [],
  };

  getNewDataScatterTrace = (data, categoryColorMap) => {
    const { plotData } = this.props;
    for (var key of Object.keys(plotData.trainingDataPoints.x)) {
      data.push({
        ...defaultPlot.scatterTrace,
        name: "train: " + key,
        x: plotData.trainingDataPoints.x[key],
        y: plotData.trainingDataPoints.y[key],
        marker: {
          ...markers.scatterMarker,
          color: categoryColorMap[key],
        },
      });
    }
  };

  getNewDataXHistogramTrace = (data, categoryColorMap) => {
    const { plotData } = this.props;
    for (var key of Object.keys(plotData.dataMarginals.xAxis.x)) {
      data.push({
        ...defaultPlot.xHistogramTrace,
        x: plotData.dataMarginals.xAxis.x[key],
        y: plotData.dataMarginals.xAxis.y[key],
        marker: {
          ...markers.histogramMarker,
          color: categoryColorMap[key],
        },
      });
    }
  };

  getNewDataYHistogramTrace = (data, categoryColorMap) => {
    const { plotData } = this.props;
    for (var key of Object.keys(plotData.dataMarginals.yAxis.x)) {
      data.push({
        ...defaultPlot.yHistogramTrace,
        x: plotData.dataMarginals.yAxis.y[key],
        y: plotData.dataMarginals.yAxis.x[key],
        marker: {
          ...markers.histogramMarker,
          color: categoryColorMap[key],
        },
      });
    }
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

  getNewModelScatterTrace = (data, categoryColorMap) => {
    const { plotData } = this.props;
    for (var key of Object.keys(plotData.modelDataPoints.x)) {
      data.push({
        ...defaultPlot.modelScatterTrace,
        name: key,
        x: plotData.modelDataPoints.x[key],
        y: plotData.modelDataPoints.y[key],
        marker: {
          ...markers.modelScatterMarker,
          color: categoryColorMap[key],
        },
      });
    }
  };

  getNewModelXHistogramTrace = (data, categoryColorMap) => {
    const { plotData } = this.props;
    for (var key of Object.keys(plotData.modelMarginals.xAxis.x)) {
      data.push({
        ...defaultPlot.modelXHistogramTrace,
        x: plotData.modelMarginals.xAxis.x[key],
        y: plotData.modelMarginals.xAxis.y[key],
        marker: {
          ...markers.modelHistogramMarker,
          color: categoryColorMap[key],
        },
      });
    }
  };

  getNewModelYHistogramTrace = (data, categoryColorMap) => {
    const { plotData } = this.props;
    for (var key of Object.keys(plotData.modelMarginals.yAxis.x)) {
      data.push({
        ...defaultPlot.modelYHistogramTrace,
        x: plotData.modelMarginals.yAxis.y[key],
        y: plotData.modelMarginals.yAxis.x[key],
        marker: {
          ...markers.modelHistogramMarker,
          color: categoryColorMap[key],
        },
      });
    }
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
    const { displayTraces, modelName, axisFields, category } = this.props;
    const categoryColorMap = createCategoryColorMap(category);
    const data = [];
    displayTraces.map((traceinfo, ind) => {
      if (traceinfo.name === "Aggregation" && traceinfo.from === "data") {
        data.push(this.getNewDataPredictionTrace());
      }
      if (traceinfo.name === "Aggregation" && traceinfo.from === "model") {
        data.push(this.getNewModelPredictionTrace());
      }
      if (traceinfo.name === "Samples" && traceinfo.from === "data") {
        this.getNewDataScatterTrace(data, categoryColorMap);
      }
      if (traceinfo.name === "Density" && traceinfo.from === "data") {
        data.push(this.getNewDataDensityTrace());
      }
      if (traceinfo.name === "Marginals" && traceinfo.from === "data") {
        this.getNewDataXHistogramTrace(data, categoryColorMap);
        this.getNewDataYHistogramTrace(data, categoryColorMap);
      }

      if (traceinfo.name === "Samples" && traceinfo.from === "model") {
        this.getNewModelScatterTrace(data, categoryColorMap);
      }
      if (traceinfo.name === "Density" && traceinfo.from === "model") {
        data.push(this.getNewModelDensityTrace());
      }
      if (traceinfo.name === "Marginals" && traceinfo.from === "model") {
        this.getNewModelXHistogramTrace(data, categoryColorMap);
        this.getNewModelYHistogramTrace(data, categoryColorMap);
      }
    });
    this.setState({
      layout: {
        ...defaultPlot.layout,
        xaxis: {
          ...defaultPlot.layout.xaxis,
          title: {
            ...defaultPlot.layout.xaxis.title,
            text: axisFields.x,
          },
        },
        yaxis: {
          ...defaultPlot.layout.yaxis,
          title: {
            ...defaultPlot.layout.yaxis.title,
            text: axisFields.y,
          },
        },
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
