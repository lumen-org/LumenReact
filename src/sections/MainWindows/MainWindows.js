import React, { Component } from "react";
import PropTypes from "prop-types";
import PlotSettings from "../PlotSettings";
import VisualizationCanvas from "../VisualizationCanvas";
import AppToolbar from "../AppToolbar";
import ListModal from "../../components/ListModal";
import "./MainWindows.css";

// TODO: Make it responsive according to tablet size
class MainWindows extends Component {
  static propTypes = {
    openModal: PropTypes.bool.isRequired,
    handleModalClose: PropTypes.func.isRequired
  };

  state = {
    openModal: true
  };

  handleModalClose = () => {
    this.setState({
      openModal: false
    });
  };

  render() {
    const { openModal } = this.state;

    return (
      <div className="MainWindows-MainContainer">
        <AppToolbar/>
        <ListModal open={openModal} handleModalClose={this.handleModalClose} />
        <div className="row MainWindows-Container">
          <div className="col-12 col-sm-3 mr-0 pt-2 pb-1 h-100">
            <PlotSettings  />
          </div>
          <div className="col-12 col-sm-9 ml-0 pt-2 pb-1 h-100">
            <VisualizationCanvas />
          </div>
        </div>
      </div>
    );
  }
}

export default MainWindows;
