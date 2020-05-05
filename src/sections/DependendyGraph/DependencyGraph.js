import React from "react";
import solve from "./utils/weakConstraintBasedGraphLayoutAlgorithm";

//import {CSVReader} from 'react-papaparse'
//'use strict';

/**
 * Widget component -> parent to all other operations inside
 */
let justData;

class DependencyGraphComponent extends React.Component {
  constructor(props) {
    super(props);
    //this.state = { liked: false };
    this.state = {
      nodes: undefined,
      edges: undefined,
      drawn: false,
      network: undefined,
      temporaryData: undefined,
      edgesAreOmitted: false,
      edgeThreshold: "0",
      keepLayout: false,

    };
    this.updateEdges = this.updateEdges.bind(this);
    this.updateNodes = this.updateNodes.bind(this);
    this.adjustNetwork = this.adjustNetwork.bind(this);
    this.updateTempData = this.updateTempData.bind(this);
    this.updateOmitEdgesCheckbox = this.updateOmitEdgesCheckbox.bind(this);
    this.updateThresholdValue = this.updateThresholdValue.bind(this);
    this.updateKeepLayout = this.updateKeepLayout.bind(this);


  }

  updateNodes(nodes_) {
    this.setState(({
      nodes: nodes_,

    }));

  }

  updateEdges(edges_) {

    this.setState(({
      edges: edges_,

    }));
    console.log(this.state.edges);

  }

  adjustNetwork(network) {
    this.setState({
      network: network,
    });
  }

  updateTempData(data) {
    this.setState({
      temporaryData: data,
    });
  }

  updateOmitEdgesCheckbox(value) {
    this.setState({
      edgesAreOmitted: value,
    });
  }

  updateThresholdValue(value) {
    this.setState({
      edgeThreshold: value,
    });
  }

  updateKeepLayout(value) {
    this.setState({
      keepLayout: value,
    });
  }


  render() {
    return (
      <div>
        <GraphRawLoad nodesFunc={this.updateNodes} edgesFunc={this.updateEdges}
                      temporaryData={this.state.temporaryData} tempDataFunc={this.updateTempData}
                      adjustFunc={this.adjustNetwork}
        />
        <GraphInteractionCanvas drawnState={this.state.drawn} nodes={this.state.nodes} edges={this.state.edges}
                                network={this.state.network} adjustFunc={this.adjustNetwork}
                                omitEdgeValue={this.state.edgesAreOmitted}
                                omitEdgeFunc={this.updateOmitEdgesCheckbox}
                                edgeThreshold={this.state.edgeThreshold}
                                edgeTresholdFunc={this.updateThresholdValue}
                                nodesFunc={this.updateNodes}
                                keepLayout={this.state.keepLayout}
                                keepLayoutFunc={this.updateKeepLayout}
                                edgesFunc={this.updateEdges}

        />
      </div>

    )
  }
}

/**
 * part of widget where the input parameters for the weak constraint based algorithm are given
 */


function GraphDisplayCanvas(props) {
  return <div style={{height: '800px', borderStyle: 'solid', borderColor: 'black'}} id={props.id}/>//<p>bla</p>//<div id="graph-network-canvas">{createNetwork("graph-network-canvas")}</div>
}

/**
 * GraphInteractionCanvas: manages all the operation done in and around the network
 *
 */
class GraphInteractionCanvas extends React.Component {
  constructor(props) {
    super(props);
    this.canvas_id = 'graph_canvas_';
    this.drawGraph = this.drawGraph.bind(this);
    this.adjustNetwork = this.adjustNetwork.bind(this);
    this.adjustEdgeThreshold = this.adjustEdgeThreshold.bind(this);
    this.highlightAllConnectedNodes = this.highlightAllConnectedNodes.bind(this);
    this.redrawGraph = this.redrawGraph.bind(this);

  }

  /**
   * function that destroys the graph amd calls the update function passed down
   */
  killingTheGraph() {
    if (typeof this.props.network !== "undefined") {

      let oldprops = this.props.network;
      this.props.network.destroy();

      this.props.network = undefined;
      if (this.props.network !== oldprops) {
        this.props.adjustFunc(this.props.network);
        console.log("not the same");
      }
    } else {
      document.getElementById("warning").innerHTML = "No network drawn";
    }

  }

  /**
   * initial draw action of graph
   */

  drawingButtonClicked() {
    if (typeof this.props.nodes !== "undefined" && typeof this.props.edges !== "undefined") {
      console.log(this.props.nodes, this.props.edges);
      let oldprops = this.props.network;

      this.props.network = this.drawGraph(this.canvas_id);
      if (this.props.network !== oldprops) {
        this.props.adjustFunc(this.props.network);
        console.log("not the same");
      }
    } else if (typeof this.props.nodes === "undefined" && typeof this.props.edges === "object") {
      let decision = confirm("Should the nodes be autoconfigurated?");
      if (decision) {
        let old_edges = this.props.edges;
        let labels = [];

        for (let edge of this.props.edges) {
          labels.push(edge.source);
          labels.push(edge.target);
        }
        let label_set = new Set(labels);

        let i = 0;
        let referenceObject = {};
        for (let label of label_set) {
          referenceObject[label] = i;

          i++;
        }

        for (let edge of this.props.edges) {
          let oldSource = edge.source;
          let oldTarget = edge.target;
          edge.source = referenceObject[oldSource];
          edge.target = referenceObject[oldTarget];

        }
        let nodes = new Array(referenceObject.size);
        i = 0;
        for (let item in referenceObject) {

          let node = {
            id: referenceObject[item],
            label: item,
          };

          nodes[referenceObject[item]] = node;
          i++;

        }
        if (old_edges !== this.props.edges) {
          console.log("THEY DIFFER!");
          this.props.edgesFunc(this.props.edges);
        }
        this.props.nodesFunc(nodes);


      } else {
        document.getElementById("warning").innerHTML = "Please load nodes";
      }

    } else {
      document.getElementById("warning").innerHTML = "No data loaded";
    }

  }

  /**
   * calls the update function passed down as props to update the network
   * @param vis_js_network {vis.Network} passed down network
   */

  adjustNetwork(vis_js_network) {
    this.props.adjustFunc(vis_js_network);
  }

  /**
   * responsible for each drawing operation
   * @param id {string} canvas id; where to put the network
   * @param isLocationProvided {boolean} whether to run the weak constrait algorithm again
   * @param shouldStretch
   * @returns {vis.Network}
   */

  drawGraph(id, isLocationProvided = false, shouldStretch = false) {
    let network;
    if (this.props.nodes !== [] && this.props.edges !== []) {
      console.log("inside drawGraph");
      console.log("inside drawGraph");
      document.getElementById("warning").innerHTML = "";
      let result_edges, result_nodes;
      if (!isLocationProvided) {
        let result = solve(this.props.nodes, this.props.edges);
        result_nodes = result[0];
        result_edges = result[1];
        let heaviestEdgeWeight = 0;
        let heaviedtEdgeId;
        for (let edge of result_edges) {
          edge.label = edge.weight;
          if (edge.weight > heaviestEdgeWeight) {
            heaviedtEdgeId = edge.id;
            heaviestEdgeWeight = edge.weight;
          }
        }
        document.getElementById("threshold").max = heaviestEdgeWeight;
      } else {
        result_edges = this.props.edges;
        result_nodes = this.props.nodes;
      }


      let parserOptions = {
        edges: {
          inheritColors: false,
        },
        nodes: {
          fixed: true,
          parseColor: false
        }
      };
      let json_data = {
        "nodes": result_nodes,
        "edges": result_edges
      };
      let parsed = vis.parseGephiNetwork(json_data, parserOptions);
      let container = document.getElementById(id);
      let data = {
        nodes: parsed.nodes,
        edges: parsed.edges
      };
      let mult_factor = 1;
      if (shouldStretch) {
        mult_factor = 2;
      }
      for (let node of data.nodes) {
        //node.fixed = true;
        // TODO find a good representation -> according to density or amount of nodes
        node.x = node.x * mult_factor;
        node.y = node.y * mult_factor;
        node.physics = false;
        /*node.scaling = {
            label: false,
        };*/
        //node.shape = "diamond";
        node.chosen = {
          node: (values, id, selected, hovering) => {

          }
        }
        //node.shape = 'circle';
      }
      //console.log(nodes, edges);
      for (let edge of data.edges) {
        edge.smooth = false;
        edge.color = '#000000';
        //edge.label = edge.weight;
        edge.hidden = this.props.omitEdgeValue;
        if (this.props.omitEdgeValue === false) {
          if (parseFloat(edge.label) < parseFloat(this.props.edgeThreshold)) {
            edge.hidden = true;
          }
        }
      }
      let options = {

          manipulation: {
            enabled: false,
            editEdge: () => this.adjustEdgeThreshold(document.getElementById()),

          },
          /*interaction: {
                  hideEdgesOnDrag: true,
          }*/
        }
      ;
      network = new vis.Network(container, data, options);
      console.log(data.nodes);

      network.fit();


      // FIXME
      /*network.on("selectNode", (selectedItems) =>{
          console.log(selectedItems);
          let nodeIDs = selectedItems.nodes;
          for (let id of nodeIDs){
              let connectedNodes = network.getConnectedNodes(parseInt(id));
              //console.log(connectedNodes);
              for (let nodeID of connectedNodes){
                  let node = nodes[nodeID];
                  console.log(node);
                  node.color = '#000000'

              }
              //nodes[parseInt(id)].shadow = true;
          }
          this.redrawGraph(true);
      });
      // FIXME
      network.on("deselectNode", (selectedItems) =>{
          console.log("deselect", selectedItems);
          let nodeIDs = selectedItems.nodes;
          for (let id of nodeIDs){
              let connectedNodes = network.getConnectedNodes(parseInt(id));
              //console.log(connectedNodes);
              for (let nodeID of connectedNodes){
                  let node = nodes[nodeID];
                  node.color = '#2B7CE9';

              }

          }
          this.redrawGraph(true);
      });*/

      return network

    }
  }

  highlightAllConnectedNodes(selectedItems) {
    console.log(selectedItems);
    let nodeIDs = selectedItems.nodes;
    for (let id in nodeIDs) {
      let connectedNodes = network.getConnectedNodes(id);
      console.log(connectedNodes);
      for (let nodeID of connectedNodes) {
        let node = network.nodes[nodeID];
        console.log(node);
        node.color = '#f54242'
      }
    }
    /*
    let connectedNodes = network.getConnectedNodes(id);
    console.log(connectedNodes);
    for (let nodeID of connectedNodes){
        let node = nodes[nodeID];
        console.log(node);
        node.color = '#f54242'
    }
    network.redraw();*/

  }

  /**
   * called when threshold range is moved, should automatically update network
   * @param value {float} given from threshold range; highest possible value is the highest edge weight, min value is 0
   */
  // Fixme not working with meshes (20) -> not working because all the edges are above the max threshold
  adjustEdgeThreshold(value) {
    this.props.edgeTresholdFunc(value);
    if (this.props.omitEdgeValue === false) {
      let oldNetwork = this.props.network;
      this.redrawGraph(true);
      if (oldNetwork !== this.props.network) {
        this.props.adjustFunc(this.props.network);
      }

    }
  }

  /**
   * called when redraw button is pressed or when redrawing is necessary
   * saves the current camera position to avoid jumps when redrawn, just takes in algorithm calculated positions and gives them to the network
   * @param redrawnBySelection
   */

  redrawGraph(redrawnBySelection = false, shouldStretch = false) {
    let cameraPosition = this.props.network.getViewPosition();
    let zoom = this.props.network.getScale();
    let oldprops = this.props.network;
    if (this.props.keepLayout === true || redrawnBySelection) {
      this.killingTheGraph();
      this.props.network = this.drawGraph(this.canvas_id, true, shouldStretch);
    } else {
      this.killingTheGraph();
      this.props.network = this.drawGraph(this.canvas_id, false, shouldStretch);
    }
    /*this.props.network.moveTo({
        position: cameraPosition,
        scale: zoom,
    });*/
    if (this.props.network !== oldprops) {
      this.props.adjustFunc(this.props.network);
      console.log("redraw not the same");
    }

  }


  render() {
    return (

      <div>
        <button onClick={() => this.drawingButtonClicked()}>Draw Graph</button>
        <button onClick={() => this.killingTheGraph()}>Clear Graph</button>
        <button onClick={() => this.redrawGraph()}>Redraw</button>
        <button onClick={() => this.redrawGraph(true, true)}>Stretch layout</button>
        <label>Omit edge drawing!<input id="ifEdgesDrawn" type="checkbox" value="omitTrue"

                                        onChange={() => this.props.omitEdgeFunc(document.getElementById("ifEdgesDrawn").checked)}/></label>
        <label>Keep current orientation!<input id="orientationChoice" type="checkbox"
                                               onChange={() => this.props.keepLayoutFunc(document.getElementById("orientationChoice").checked)}/></label>
        <label>Weight threshold<input type="range" id="threshold" min="0" max="3" step="0.01"
                                      onChange={() => this.adjustEdgeThreshold(document.getElementById("threshold").value)}/></label>
        <p id="warning"></p>


        <GraphDisplayCanvas style={{height: '800px'}} id={this.canvas_id}/>
      </div>
    );

  }
}

class GraphRawLoad extends React.Component {
  constructor(props) {
    super(props);
    this.justData = undefined;
    this.handleFiles = this.handleFiles.bind(this);
    this.fileInput = React.createRef();

  }


  handleFiles(files) {
    //justData = undefined;
    let old_justData = this.props.temporaryData;
    let headerNames = [];
    //let justData= this.justData;
    let config = {
      delimitersToGuess: [",", " ", ";"],
      header: true,
      transformHeader: function (h) {
        h = h.toLowerCase();
        return h;

      },
      complete: function (results) {

        //headerNames = results.meta.fields;
        //this.props.temporaryData = results.data;
        justData = results.data;
        //return justData

      },
      skipEmptyLines: true,
      worker: false,


    };


    for (let i = 0; i < files.length; i++) {
      let csvfile = document.getElementById('csvFile').files[i];
      Papa.parse(csvfile, config);


      //console.log("justData", justData);
    }


    this.props.temporaryData = justData;
    if (old_justData !== this.props.temporaryData) {
      this.props.tempDataFunc(this.props.temporaryData);
      console.log("I probably did it!");
    }

    // Todo probably invoke here function to update state
    /*this.setState((state => ({
        temporaryData: justData,
    })));*/
    //this.state.temporaryData = justData;

  }


  prepareNodes() {
    //Todo make independent from global variable
    if (typeof justData !== 'undefined') {
      let prepNodes = justData;//this.state.temporaryData;
      // not very sophisticated
      this.props.nodesFunc(prepNodes);
      console.log("nodes prepared");
      document.getElementById("warning").innerHTML = "";

    } else {
      document.getElementById("warning").innerHTML = "No data was loaded";
      console.log(this.state.temporaryData);
    }
  }

  prepareEdges() {
    //Todo make independent from global variable
    if (typeof justData !== 'undefined') {
      let prepEdges = justData;//this.state.temporaryData;
      this.props.edgesFunc(prepEdges);
      console.log("edges prepared");
      document.getElementById("warning").innerHTML = "";

    } else {
      document.getElementById("warning").innerHTML = "No data was loaded";
    }


  }

  clearBoth() {
    this.props.nodesFunc(undefined);
    this.props.edgesFunc(undefined);
    //this.props.adjustFunc(undefined);

  }


  render() {
    return (
      <div>

        <input type="file" id="csvFile"
               onChange={() => this.handleFiles(document.getElementById('csvFile').files)}/>
        <p id="whatYouSee"></p>
        <div id="graph"></div>
        <p id="userDecision"></p>
        <button
          onClick={() => {
            this.prepareNodes();
          }
          }
        >Import as nodes!
        </button>
        <button onClick={() => this.prepareEdges()}>Import as edges!</button>
        <button onClick={() => this.clearBoth()}>Clear nodes and edges!</button>


      </div>
    );
  }
}



export default DependencyGraphComponent;
