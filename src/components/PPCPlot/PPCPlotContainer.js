import React from "react";
import {connect} from "react-redux";
import PPCPlot from "./PPCPlot";

class PPCPlotContainer extends React.Component  {
  render() {
    return (
      <PPCPlot
      />
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
  };
};
const mapStateToProps = (state, ownProps) => {
  return {
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(PPCPlotContainer);