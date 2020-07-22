import React, { Component } from "react";
import { connect } from "react-redux";
import { getModelNameById } from "../../states/models/selector";
import { mockData } from "./mockdata";
import GraphComponent from "./GraphTest";
import fetchData from "../../utils/fetch";
import { BASE_URL } from "../../constants/query";
import { hidePCIGraph } from "../../states/models/actions";
import { selectActiveModelId } from "../../states/visualizations/selector";

/**
 * Container class for communicating to the models store.
 * It has as state the nodes and edges which are taken from the store.
 */
class PCIGraphContainer extends React.Component {
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

  /**
   * From the react life cycle
   * @param prevProps
   * @param preState
   */
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

  onPlotClose = () => {
    this.setState({
      nodes: null,
      edges: null,
      }
    );
    const { modelId, hideThisPCIGraph } = this.props;
    hideThisPCIGraph(modelId);
  };


  render() {
    const nodes = this.state.nodes;
    const edges = this.state.edges;

    return (
      <GraphComponent
        edges={edges}
        nodes={nodes}
        onPlotClose={this.onPlotClose}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  plots: state.plots.plots,
  activePlotId: state.plots.activePlotId,
  activeModelId: selectActiveModelId(state),
});

const mapDispatchToProps = (dispatch) => {
  return {
    hideThisPCIGraph: (id) =>
      dispatch(hidePCIGraph(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PCIGraphContainer);


