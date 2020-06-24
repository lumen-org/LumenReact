import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getLayoutInformation,
  nextActiveId,
} from "../../utils/plotData";
import { changeActivePlot, deletePlot } from "../../states/plots/actions";
import {
  //changeActiveSpecifications,
  resetSpecifications,
} from "../../states/specifications/actions";
import { getModelNameById } from "../../states/visualizations/selector";
import { updateActiveModel } from "../../states/app/actions";
import PropTypes from "prop-types";
import DependencyGraph from "./DependencyGraph";
import { mockData } from "./mockdata";
import GraphComponent from "./GraphTest";
import fetchData from "../../utils/fetch";
import { BASE_URL } from "../../constants/query";

class DependencyGraphContainer extends React.Component {
  static propTypes = {
    id: PropTypes.number,
    activePlotId: PropTypes.number,
    zIndex: PropTypes.number,
  };

  state = {
    nodes: [
      { id: 0, label: "node 0"},
      { id: 1, label: "node 1"},
      { id: 2, label: "node 2"},
      { id: 3, label: "node 3"},
      { id: 4, label: "node 4"},
    ],
    edges: [
      {from: 0, to: 1, weight: 1},
      {from: 1, to: 2, weight: 1},
      {from: 2, to: 0, weight: 1},
      {from: 0, to: 4, weight: 1},
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
    /*
    const {
      deletePlot,
      plots,
      changeActivePlot,
      changeActiveVisualization,
    } = this.props;
    const nextId = nextActiveId(plots.allIds);
    const nextPlot = plots.allIds.filter((plot) => {
      return id === nextId;
    });
    changeActivePlot(nextId);
    if (nextPlot.length !== 0) {
      changeActiveVisualization(nextId);
    }
    deletePlot(id);*/
    this.setState({
      nodes: null,
      edges: null,
      }
    )
  };

  onActivePlotChange = (id) => {
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
  };



  render() {
    const { activePlotId, id, zIndex } = this.props;
    const { plotData, layout } = this.state;
    const nodes = this.state.nodes;
    const edges = this.state.edges;

    return (
      <GraphComponent
        edges={edges}
        nodes={nodes}
        plotData={plotData}
        zIndex={zIndex}
        layout={layout}
        id={id}
        activePlotId={activePlotId}
        onPlotClose={this.onPlotClose}
        onActivePlotChange={this.onActivePlotChange}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  plots: state.plots.plots,
  activePlotId: state.plots.activePlotId,
  //modelname: state.models.
});

const mapDispatchToProps = (dispatch) => {
  return {
    changeActivePlot: (
      newActivePlotId // this function change the zIndex of plot and bring it to the front
    ) => dispatch(changeActivePlot(newActivePlotId)),
    /*changeActiveSpecifications: (
      newspecifictions // this function trigger the update of specification
    ) => dispatch(changeActiveSpecifications(newspecifictions)),*/
    updateActiveModel: (
      newActiveModel // this function trigger the update of schema
    ) => dispatch(updateActiveModel(newActiveModel)),
    deletePlot: (id) => dispatch(deletePlot(id)),
    resetSpecifications: () => dispatch(resetSpecifications()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DependencyGraphContainer);

// this is a good prime example that history is not only to be retained, but also brought forward to a new age


