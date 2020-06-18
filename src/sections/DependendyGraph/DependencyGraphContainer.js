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
    modelName: PropTypes.string,
    specifications: PropTypes.object,
  };
  state = {
    plotData: [],
    layout: {},
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

  componentDidMount() {
    const modelname = getModelNameById(this.props.activePlotId);
    console.log(modelname);
    let body = {
      "FROM": modelname,
      'PCI_GRAPH.GET': true,
    };
    fetchData(BASE_URL, body).then(response => this.transformGraphData(response), error => console.log("Something went wrong: "+ error));
  }

  componentDidUpdate(prevProps, preState) {
    // update the plot according to the change of specifications
    console.log(this.props.modelName);
    if (
      prevProps.modelName !== this.props.modelName
    ) {
      // here should be stuff that fetches the data from the backend
      const modelname = getModelNameById(this.props.activePlotId);
      console.log(modelname);
      let body = {
        "FROM": modelname,
        'PCI_GRAPH.GET': true,
      };
      fetchData(BASE_URL, body).then(response => this.transformGraphData(response), error => console.log("Something went wrong: "+ error));
    }
  }

  transformGraphData(graphData){
    let graph = graphData;
    if (!graphData){
      // load mock data
      graph = mockData;
    }
    else {
      console.log(graph);
      let id = 0;
      for (let node of graph.nodes){
          node.id = id;
          id++;
      }
      for (let edge of graph.edges){
        edge.to = graph.nodes[edge.source].id;
        edge.from = graph.nodes[edge.target].id;
      }
    }
    console.log(graph.nodes, graph.edges);
    this.setState({
      nodes: graph.nodes,
      edges: graph.edges,
    });

  }

  onPlotClose = (id) => {
    const {
      deletePlot,
      plots,
      changeActivePlot,
      //changeActiveSpecifications,
      resetSpecifications,
      updateActiveModel,
    } = this.props;
    const nextId = nextActiveId(plots, id);
    const nextPlot = plots.filter((plot) => {
      return plot.id === nextId;
    });
    changeActivePlot(nextId);
    if (nextPlot.length === 0) {
      resetSpecifications();
    } else {
      //changeActiveSpecifications(nextPlot[0].specifications);
      updateActiveModel(nextPlot[0].model);
    }
    deletePlot(id);
  };

  onActivePlotChange = (id) => {
    const {
      changeActivePlot,
      //changeActiveSpecifications,
      updateActiveModel,
      specifications,
      modelName,
    } = this.props;
    changeActivePlot(id);
    //changeActiveSpecifications(specifications);
    updateActiveModel(modelName);
  };

  render() {
    const { modelName, activePlotId, id, zIndex } = this.props;
    const { plotData, layout } = this.state;
    const nodes = this.state.nodes;
    const edges = this.state.edges;

    return (
      <GraphComponent
        edges={edges}
        nodes={nodes}
        modelName={modelName}
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


