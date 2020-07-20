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
          <div className="col-12 col-xl-3 col-sm-6 mr-0 pr-2 pt-2 pb-1">
            <PlotSettings  />
          </div>
          <div className="col-12 col-xl-9 col-sm-6 ml-0 pl-2 pt-2 pb-1">
            <VisualizationCanvas />
          </div>
        </div>
      </div>
    );
  }
}

export default MainWindows;
