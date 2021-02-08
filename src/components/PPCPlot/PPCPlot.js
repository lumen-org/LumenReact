import Plot from "react-plotly.js";
import React from "react";
import Loader from "react-loader-spinner";
import { defaultPlot } from "../StandardPlot/defaultPlot";

class PPCPlot extends React.Component {
  state = {
    layout: {},//defaultPlot.layout,
    data: [],
  };
  render() {
    const { layout, data } = this.state;
    const { loading } = false;//this.props.plotData;
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
export default PPCPlot;