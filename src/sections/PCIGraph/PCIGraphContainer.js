import React from "react";
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
  constructor(props) {
    super(props);
    this.state = {
      nodes: [
        { id: 0, label: "survived"},
        { id: 1, label: "pclass"},
        { id: 2, label: "sex"},
        { id: 3, label: "embarked"},
        { id: 4, label: "age"},
        { id: 5, label: "fare"}
      ],
      edges: [
        {source: 0, target: 4, weight: 0.148},
        {source: 1, target: 3, weight: 0.182},
        {source: 5, target: 3, weight: 0.251},
        {source: 1, target: 4, weight: 0.719},
        {source: 0, target: 1, weight: 0.844},
        {source: 3, target: 1, weight: 0.844},
        {source: 0, target: 2, weight: 1.87},
        {source: 1, target: 5, weight: 2.08},
      ]
    }
  }

  /**
   * From the react life cycle
   */
  componentDidMount() {
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

  /**
   * This function prepares the data given by the backend (or from the mockdata.js file if the backend is not able to provide sufficient
   * data) to be used later.
   * If graphData is false, the mock data is used (values are from the pci graph based on the titanic data set), it was created to mimic
   * how real data would look like.
   * The data comes as string labels for each node and the edges' sources and targets are described with string labels, too. But the used graph
   * layout algorithms needs them to be integer values.
   * @param graphData is either a false if there is no available data in the backend or returns an object containing nodes and edges.
   */
  transformGraphData(graphData){
    let graph = graphData;
    if (!graphData){
      // load mock data
      graph = mockData;
    }

    console.log(graph);
    let lut = {};
    for (let i = 0; i< graph._nodes.length; i++){
      graph._nodes[i].id = i;
      lut[graph._nodes[i].label] = i;
    }
    console.log(lut);
    for (let i = 0; i< graph._edges.length; i++){
      graph._edges[i].id = i;
      graph._edges[i].source = lut[graph._edges[i].source];
      graph._edges[i].target = lut[graph._edges[i].target];
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


