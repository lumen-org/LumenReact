import React, { Component } from "react";
import PropTypes from "prop-types";
import PlotSettings from "../PlotSettings";
import Playground from "../Playground";
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
        <AppToolbar />
        <ListModal open={openModal} handleModalClose={this.handleModalClose} />

        <div className="MainWindows-Container">
          <PlotSettings />
          <Playground />
        </div>
      </div>
    );
  }
}

export default MainWindows;
