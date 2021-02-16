import Plot from "react-plotly.js";
import React from "react";
import Loader from "react-loader-spinner";
import { defaultPlot } from "../StandardPlot/defaultPlot";
import PropTypes from "prop-types";

class PPCPlot extends React.Component {
  static propTypes = {
    getData: PropTypes.func,
    loading: PropTypes.bool,
  };


  render() {
    const { loading, plotData, layout } = this.props;
    console.log(plotData, " plotData");
    console.log(layout, " layout");
    if (plotData !== []) {
      return (
        <div>
          <Plot
            data={plotData}
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
}
export default PPCPlot;