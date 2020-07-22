import React from "react";
import Graph from "react-graph-vis";
import { Rnd } from "react-rnd";
import CloseButton from "../../components/Button/CloseButton";

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
    const { onPlotClose } = this.props;
    onPlotClose();
  };
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
      //solver: 'myOwnSolver',

    },
    edges: {
      color: "#000000"
    },
    //height: "300px"
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
      className="RndPlot-container"
      style={{
        border: "#dbdbdb 3px solid",
        borderRadius: "10px",
      }}>
      <div className={"RndPlot-titlebar"}>
        <CloseButton handleClose={this.handleClose} />
      </div>
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