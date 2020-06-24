import React from "react";
import ReactDOM from "react-dom";
import Graph from "react-graph-vis";
import { Rnd } from "react-rnd";
import CloseButton from "../../components/Button/CloseButton";

//import "./styles.css";
// need to import the vis network css in order to show tooltip
//import "./network.css";

class GraphComponent extends React.Component {
  state = {
    plotWindowsWidth: 500,
    plotWindowsHeight: 500,
    plotWindowsPosX: 100,
    plotWindowsPosY: 100,
  };

  setNewPos = (dragIndex) => {
    this.setState({
      plotWindowsPosX: dragIndex.x,
      plotWindowsPosY: dragIndex.y,
    });
  };

  onDragStop = (event, dragIndex) => {
    const { id, onActivePlotChange, activePlotId } = this.props;
    if (id !== activePlotId) {
      onActivePlotChange(id);
    }
    this.setNewPos(dragIndex);
  };

  onResizeStop = (event, direction, ref, delta, position) => {
    this.setState({
      plotWindowsWidth: ref.style.width,
      plotWindowsHeight: ref.style.height,
      ...position,
    });
  };

  handleClose = () => {
    const { onPlotClose, id } = this.props;
    onPlotClose(id);
  };
  render() {

  const graph = {
    nodes: this.props.nodes,
    edges: this.props.edges,
  };

  const options = {
    layout: {
      hierarchical: true
    },
    edges: {
      color: "#000000"
    },
    height: "300px"
  };

  const events = {
    select: function(event) {
      var { nodes, edges } = event;
    }
  };
    const {
      plotWindowsHeight,
      plotWindowsWidth,
      plotWindowsPosX,
      plotWindowsPosY,
    } = this.state;
    if(!this.props.nodes||!this.props.edges){
      return null;
    }
  return (
    <Rnd
      size={{ width: plotWindowsWidth, height: plotWindowsHeight }}
      position={{ x: plotWindowsPosX, y: plotWindowsPosY }}
      onDragStop={this.onDragStop}
      onResizeStop={this.onResizeStop}
      //className="RndPlot-container"
      style={{
        border: "#dbdbdb 3px solid",
        borderRadius: "10px",
      }}>
      <CloseButton handleClose={this.handleClose} />
    <Graph
      graph={graph}
      options={options}
      events={events}
      getNetwork={network => {
        //  if you want access to vis.js network api you can set the state in a parent component using this property
      }}
    />
    </Rnd>
  );
  }
}

export default GraphComponent;