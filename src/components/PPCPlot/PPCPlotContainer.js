import React from "react";
import {connect} from "react-redux";
import PPCPlot from "./PPCPlot";
import { getParameter, getPPCSpecDefaults } from "../../states/ppcspecification/selector";
import PropTypes from "prop-types";
import { getModelNameById } from "../../states/models/selector";
import { fetchPPCPlotData } from "../../states/ppcplots/actions";
import { getPPCLayout, getPPCLoadingState, getPPCPlotData } from "../../states/ppcplots/selector";
import { getSpecificationId } from "../../states/plots/selector";

class PPCPlotContainer extends React.Component  {
  static propTypes = {
    id: PropTypes.string,
  };

  getData = () => {
    const { getPPCPlotData } = this.props;
    return getPPCPlotData(this.props.modelname, this.props.id, this.props.k, this.props.n,
      this.props.statistic)
  }

  componentDidUpdate(prevProps) {
    if(prevProps.k !== this.props.k || prevProps.n !== this.props.n || prevProps.statistic !== this.props.statistic){
      this.getData();
    }
  }
  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <PPCPlot getData={this.getData}
               plotData={this.props.plotData}
               loading={this.props.isLoading}
               layout={this.props.layout}
      />
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPPCPlotData: (modelname, id, k, n, statistic) => dispatch(fetchPPCPlotData(modelname,id, k, n, statistic))
  };
};

const mapStateToProps = (state, ownProps) => {
  return {
    defaults: getPPCSpecDefaults(state, ownProps.id),
    modelname: getModelNameById(state, ownProps.id),
    isLoading: getPPCLoadingState(state, ownProps.id),
    plotData: getPPCPlotData(state, ownProps.id),
    k: getParameter(state, getSpecificationId(state, ownProps.id), "k"),
    n: getParameter(state, getSpecificationId(state, ownProps.id), "n"),
    statistic: getParameter(state, getSpecificationId(state, ownProps.id), "statistic"),
    layout: getPPCLayout(state, ownProps.id),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(PPCPlotContainer);