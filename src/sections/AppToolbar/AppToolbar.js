import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import ListModal from "../../components/ListModal";
import PlotMenu from "../../components/PlotMenu";
import toolbarConfig from "../../configs/appToolbar";

import "./AppToolbar.scss";

class AppToolbar extends Component {
  static propTypes = {
    handleQueryClick: PropTypes.func,
    handleCloneClick: PropTypes.func,
    handleUndoClick: PropTypes.func,
    handleRedoClick: PropTypes.func,
    handleClearClick: PropTypes.func,
    handleConfigClick: PropTypes.func,
    handleGraphClick: PropTypes.func,
    handleNewPlotClick: PropTypes.func,
  };

  onButtonClick = (buttonKey) => {
    if (buttonKey === 0) {
      this.setState({
        openModal: true,
      });
    }
  };

  state = {
    openModal: false,
  };

  handleModalClose = () => {
    this.setState({
      openModal: false,
    });
  };

  render() {
    const { items } = toolbarConfig;
    const { openModal } = this.state;
    return (
      <div className="navbar navbar-dark navbar-expand fixed-top">
        <ListModal open={openModal} handleModalClose={this.handleModalClose} />

        <a class="navbar-brand">Lumen</a>
        <ul className="navbar-nav mr-auto">
          {items.map((item, key) => (
            <li className="nav-item appToolbar-buttonContainer">
              <Button
                variant={item.variant || "outlined"}
                color={item.color || "default"}
                endIcon={<img src={item.icon} alt="" />}
                size="small"
                key={key}
                onClick={() => this.onButtonClick(key)}
              >
                {item.name}
              </Button>
            </li>
          ))}
          <li className="nav-item appToolbar-buttonContainer">
            <PlotMenu />
          </li>
        </ul>
      </div>
    );
  }
}

export default AppToolbar;
