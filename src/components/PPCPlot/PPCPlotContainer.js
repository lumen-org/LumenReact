import React from "react";
import {connect} from "react-redux";
import PPCPlot from "./PPCPlot";
import { BASE_URL } from "../../constants/query";
import fetchData from "../../utils/fetch";

class PPCPlotContainer extends React.Component  {
  render() {
    return (
      <PPCPlot
      />
    );
  }

  fetchData() {
    // here should be stuff that fetches the data from the backend
    try {
      const modelname = this.props.activeModelName;
      console.log(modelname, " modelname");
      let body = {
        FROM: modelname,
        PPC: '*',
        OPTS: {
          TEST_QUANTITY: this.defaults.statistic,
          k: this.defaults.k,
          n: this.defaults.n,
        }
      };
      fetchData(BASE_URL, body).then(
        (response) => {
          console.log(response, " response");
          console.log(JSON.parse(JSON.stringify(response)), " after ")
        },
        (error) => console.log("Something went wrong: " + error)
      );
    } catch (e) {
    }
    finally {
    }
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
  };
};
const mapStateToProps = (state, ownProps) => {
  return {
    currentValues: state.ppcspecification.ppcspecification[ownProps.specificationId],
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(PPCPlotContainer);