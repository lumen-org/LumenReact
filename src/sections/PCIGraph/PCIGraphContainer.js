import React, { Component } from "react";
import { connect } from "react-redux";
import { changeActivePlot, deletePlot } from "../../states/plots/actions";
import {
  resetSpecifications,
} from "../../states/specifications/actions";
import { getModelNameById } from "../../states/models/selector";
import { updateActiveModel } from "../../states/app/actions";
import PropTypes from "prop-types";
import DependencyGraph from "./PCIGraph";
import { mockData } from "./mockdata";
import GraphComponent from "./GraphTest";
import fetchData from "../../utils/fetch";
import { BASE_URL } from "../../constants/query";

class PCIGraphContainer extends React.Component {
  static propTypes = {
    id: PropTypes.number,
    activePlotId: PropTypes.number,
    zIndex: PropTypes.number,
  };

  state = {
    nodes: [
      { id: 0, label: "survived"},
      { id: 1, label: "pclass"},
      { id: 2, label: "sex"},
      { id: 3, label: "embarked"},
      { id: 4, label: "age"},
      { id: 5, label: "fare"}
    ],
    edges: [
      {from: 0, to: 4, weight: 0.148},
      {from: 1, to: 3, weight: 0.182},
      {from: 5, to: 3, weight: 0.251},
      {from: 1, to: 4, weight: 0.719},
      {from: 0, to: 1, weight: 0.844},
      {from: 3, to: 1, weight: 0.844},
      {from: 0, to: 2, weight: 1.87},
      {from: 1, to: 5, weight: 2.08},
    ]

  };
/*
  componentDidMount() {
    const modelname = getModelNameById(this.props.activePlotId);
    console.log(modelname);
    let body = {
      "FROM": modelname,
      'PCI_GRAPH.GET': true,
    };
    fetchData(BASE_URL, body).then(response => this.transformGraphData(response), error => console.log("Something went wrong: "+ error));
  }*/

  componentDidUpdate(prevProps, preState) {
    // update the plot according to the change of specifications
    console.log(this.props.activePlotId);
    if (
      prevProps.activePlotId !== this.props.activePlotId
    ) {
      // here should be stuff that fetches the data from the backend
      try {
        const modelname = getModelNameById(this.props.activePlotId);
        console.log(modelname);
        let body = {
          "FROM": modelname,
          'PCI_GRAPH.GET': true,
        };
        fetchData(BASE_URL, body).then(response => this.transformGraphData(response), error => console.log("Something went wrong: "+ error));
      }
      catch (e) {
        console.log(e);
        this.transformGraphData(false);
      }

    }
  }

  transformGraphData(graphData){
    let graph = graphData;
    if (!graphData){
      // load mock data
      graph = mockData;
    }

    console.log(graph);
    let lut = {};
    for (let i = 0; i< graph._nodes.length; i++){
      console.log(graph._nodes[i])
      graph._nodes[i].id = i;
      lut[graph._nodes[i].label] = i;
    }
    console.log(lut);
    for (let edge of graph._edges){
      edge.to = lut[edge.source];
      edge.from = lut[edge.target];
    }

    console.log(graph._nodes, graph._edges);
    this.setState({
      nodes: graph._nodes,
      edges: graph._edges,
    });

  }

  onPlotClose = (id) => {
    this.setState({
      nodes: null,
      edges: null,
      }
    )
  };


  render() {
    const { activePlotId, id, zIndex } = this.props;
    const nodes = this.state.nodes;
    const edges = this.state.edges;

    return (
      <GraphComponent
        edges={edges}
        nodes={nodes}
        id={id}
        onPlotClose={this.onPlotClose}
        onActivePlotChange={this.onActivePlotChange}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  plots: state.plots.plots,
  activePlotId: state.plots.activePlotId,
});

const mapDispatchToProps = (dispatch) => {
  return {
    changeActivePlot: (
      newActivePlotId // this function change the zIndex of plot and bring it to the front
    ) => dispatch(changeActivePlot(newActivePlotId)),
    updateActiveModel: (
      newActiveModel // this function trigger the update of schema
    ) => dispatch(updateActiveModel(newActiveModel)),
    deletePlot: (id) => dispatch(deletePlot(id)),
    resetSpecifications: () => dispatch(resetSpecifications()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PCIGraphContainer);

// this is a good prime example that history is not only to be retained, but also brought forward to a new age


