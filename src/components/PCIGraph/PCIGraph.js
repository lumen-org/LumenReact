import React from "react";
import Graph from "react-graph-vis";
import { Rnd } from "react-rnd";
import CloseButton from "../Button/CloseButton";
import ThresholdBar from "../ThresholdBar";
import PropTypes from "prop-types";

class PCIGraph extends React.Component {
  static propTypes = {
    onPlotClose: PropTypes.func,
    updateEdges: PropTypes.func,
    nodes: PropTypes.array,
    edges: PropTypes.array,
    modelId: PropTypes.string,
  };

  state = {
    plotWindowsWidth: 500,
    plotWindowsHeight: 500,
    plotWindowsPosX: 600,
    plotWindowsPosY: 100,
    network: {},
  };

  setNewPos = (dragIndex) => {
    this.setState({
      plotWindowsPosX: dragIndex.x,
      plotWindowsPosY: dragIndex.y,
    });
  };

  onDragStop = (event, dragIndex) => {
    this.setNewPos(dragIndex);
  };

  onResizeStop = (event, direction, ref, delta, position) => {
    this.setState({
      plotWindowsWidth: ref.style.width,
      plotWindowsHeight: ref.style.height,
      ...position,
    });
    this.state.network.fit(ref.style.width, ref.style.height)
  };

  /**
   *  handles the plot closing
   */
  handleClose = () => {
    const { onPlotClose } = this.props;
    onPlotClose();
  };

  /*
    function that finds the highest edge value for display at the threshold bar
   */
  findMaxEdgeValue(){
    let heaviestEdgeWeight = 0;
    for (let edge of this.props.edges) {
      if (edge.weight > heaviestEdgeWeight) {
        heaviestEdgeWeight = edge.weight;
      }
    }
    return heaviestEdgeWeight;
  }

  /**
   * updates the edge visibility based on the selected edge threshold
   * @param {number}thresholdValue current slider position
   */
  updateEdgesBasedOnThreshold = (thresholdValue) => {
    const { nodes, edges} = this.props;
    const { network } = this.state;
    if(thresholdValue) {
      let shouldRender = false;
      for (let i = 0; i < edges.length; i++) {
        if (parseFloat(edges[i].label) < parseFloat(thresholdValue)) {
          if (!edges[i].hidden) {
            shouldRender = true;
          }
          edges[i].hidden = true;
        } else {
          if (edges[i].hidden) {
            shouldRender = true;
          }
          edges[i].hidden = false;
        }
      }
    }
    network.setData({nodes: nodes, edges: edges});
    network.redraw();
  }

  /**
   *
   * @returns {null|*}
   */
  render() {
  const graph = {
    nodes: this.props.nodes,
    edges: this.props.edges,
  };

  const options = {
    layout: {
      hierarchical: false,
      improvedLayout: false,
    },
    physics: {
      enabled: false,
    },
    edges: {
      color: "#000000"
    },
    autoResize: false,
  };

  const events = {
    select: function(event) {
      let { nodes, edges } = event;
    }
  };
    const {
      plotWindowsHeight,
      plotWindowsWidth,
      plotWindowsPosX,
      plotWindowsPosY,
    } = this.state;
    const {
      modelId,
    } = this.props;
    if(!this.props.nodes||!this.props.edges){
      return null;
    }
  return (
    <Rnd
      size={{ width: plotWindowsWidth, height: plotWindowsHeight }}
      position={{ x: plotWindowsPosX, y: plotWindowsPosY }}
      onDragStop={this.onDragStop}
      onResizeStop={this.onResizeStop}
      className="RndPlot-container"
      style={{
        border: "#dbdbdb 3px solid",
        borderRadius: "10px",
      }}>
      <div className={"RndPlot-titlebar"}>
        <CloseButton handleClose={this.handleClose} />
      </div>
        <ThresholdBar
          name={modelId+"pciThreshold"}
          onThresholdChange={this.updateEdgesBasedOnThreshold}
          maxValue={this.findMaxEdgeValue()}
        />
        <Graph
          graph={graph}
          options={options}
          events={events}
          getNetwork={network => {
            //  if you want access to vis.js network api you can set the state in a parent component using this property
                this.setState({ network: network }) }}
        />
    </Rnd>
  );
  }
}

export default PCIGraph;