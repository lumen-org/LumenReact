import React from "react";
import { connect } from "react-redux";
import { getModelNameById } from "../../states/models/selector";
import { mockdataPCI } from "../../mockdata/mockdataPCI";
import PCIGraph from "./PCIGraph";
import fetchData from "../../utils/fetch";
import { BASE_URL } from "../../constants/query";
import { hidePCIGraph } from "../../states/models/actions";
import { selectActiveModelId } from "../../states/visualizations/selector";
import solve from "./utils/weakConstraintBasedGraphLayoutAlgorithm";
import PropTypes from "prop-types";
import { modelStore1 } from "../../states/models/testData";

/**
 * Container class for communicating to the models store.
 * It has as state the nodes and edges which are taken from the store.
 */
class PCIGraphContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nodes: null,
      edges: null,
    };
  }
  static propTypes = {
    modelId: PropTypes.string,
  };

  /**
   * From the react life cycle
   */
  componentDidMount() {
    // here should be stuff that fetches the data from the backend
    let graph;
    try {
      const modelname = this.props.activeModelName;
      console.log(modelname, " modelname");
      let body = {
        FROM: modelname,
        "PCI_GRAPH.GET": true,
      };
      fetchData(BASE_URL, body).then(
        (response) => {
          console.log(response, " response");
          graph = this.transformGraphData(response);
          console.log(JSON.parse(JSON.stringify(graph)), " after ")
        },
        (error) => console.log("Something went wrong: " + error)
      );
    } catch (e) {
      graph = this.transformGraphData({graph: false});
      console.log(graph, "graph")
    }
    finally {
      graph =this.transformGraphData({graph: false});
    }
    let result = solve(graph.nodes, graph.edges);
    this.setState({
      nodes: result[0],
      edges: result[1],
    });
  }

  /**
   * This function prepares the data given by the backend (or from the mockdataPCI.js file if the backend is not able to provide sufficient
   * data) to be used later.
   * If graphData is false, the mock data is used (values are from the pci graph based on the titanic data set), it was created to mimic
   * how real data would look like.
   * The data comes as string labels for each node and the edges' sources and targets are described with string labels, too. But the used graph
   * layout algorithms needs them to be integer values. This function maps the correct integer value to each label string.
   * @param graphData is either a false if there is no available data in the backend or returns an object containing nodes and edges.
   */
  transformGraphData(graphData) {
    console.log(graphData, "graph data");
    let graph = graphData.graph;
    if (graphData["graph"] === false) {
      // load mock data
      graph = JSON.parse(JSON.stringify(mockdataPCI));
    }
    let lut = {};
    for (let i = 0; i < graph._nodes.length; i++) {
      graph._nodes[i].id = i;
      lut[graph._nodes[i].label] = i;
    }
    for (let i = 0; i < graph._edges.length; i++) {
      graph._edges[i].id = i;
      graph._edges[i].source = lut[graph._edges[i].source];
      graph._edges[i].from = graph._edges[i].source;
      graph._edges[i].target = lut[graph._edges[i].target];
      graph._edges[i].to = graph._edges[i].target;
      graph._edges[i].label = graph._edges[i].weight.toString();
      graph._edges[i].hidden = false;
      graph._edges[i].type = "undirected";
      graph._edges[i].arrow = false;
    }
    return {
      nodes: graph._nodes,
      edges: graph._edges,
    };
  }

  /**
   * gets the hideThisPCIGraph Function from the store to make the state correction accordingly
   */
  onPlotClose = () => {
    const { modelId, hideThisPCIGraph } = this.props;
    hideThisPCIGraph(modelId);
  };

  /**
   *  render function -> returns the PCIGraph
   * @returns {React.Component}
   */
  render() {
    const nodes = this.state.nodes;
    const edges = this.state.edges;
    return (
      <PCIGraph
        edges={edges}
        nodes={nodes}
        onPlotClose={this.onPlotClose}
        updateEdges={this.updateEdges}
        modelId={this.state.activeModelId}
        plotWindowsHeight={this.props.plotWindowsHeight}
        plotWindowsWidth={this.props.plotWindowsWidth}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  plots: state.plots.plots,
  activePlotId: state.plots.activePlotId,
  activeModelId: selectActiveModelId(state),
  activeModelName: getModelNameById(state, state.plots.activePlotId)
});

const mapDispatchToProps = (dispatch) => {
  return {
    hideThisPCIGraph: (id) => dispatch(hidePCIGraph(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PCIGraphContainer);
