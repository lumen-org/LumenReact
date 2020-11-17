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
      x: plotData.dataMarginals.x.x,
      y: plotData.dataMarginals.x.y,
    };
  };

  getNewDataYHistogramTrace = () => {
    const { plotData } = this.props;
    return {
      ...defaultPlot.yHistogramTrace,
      y: plotData.dataMarginals.y.x,
      x: plotData.dataMarginals.y.y,
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
      x: plotData.modelMarginals.x.x,
      y: plotData.modelMarginals.x.y,
    };
  };

  getNewModelYHistogramTrace = () => {
    const { plotData } = this.props;
    return {
      ...defaultPlot.modelYHistogramTrace,
      y: plotData.modelMarginals.y.x,
      x: plotData.modelMarginals.y.y,
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

  // TODO: implement a callback so that the plot state are saved in the store
  setPlotData = () => {
    const { displayTraces, modelName } = this.props;
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
      if (traceinfo.name === "Prediction" && traceinfo.from === "data") {
        data.push(this.getNewDataPredictionTrace());
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
      if (traceinfo.name === "Prediction" && traceinfo.from === "model") {
        data.push(this.getNewModelPredictionTrace());
      }
    });

    this.setState({
      layout: { ...defaultPlot.layout, title: modelName },
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
