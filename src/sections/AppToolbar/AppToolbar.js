import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import ListModal from "../../components/ListModal";

import toolbarConfig from "../../configs/appToolbar";
import "./AppToolbar.css";

class AppToolbar extends Component {
  static propTypes = {
    handleQueryClick: PropTypes.func,
    handleCloneClick: PropTypes.func,
    handleUndoClick: PropTypes.func,
    handleRedoClick: PropTypes.func,
    handleClearClick: PropTypes.func,
    handleConfigClick: PropTypes.func,
    handleGraphClick: PropTypes.func,
    handleSyncModelClick: PropTypes.func
  };

  onButtonClick = buttonKey => {
    if (buttonKey === 0) {
      console.log("pressed modal key");
      this.setState({
        openModal: true
      });
    }
    else if (buttonKey === 7) {
      this.props.handleGraphClick();
      console.log("pressed graph key");
    }
  };

  state = {
    openModal: false,
  };

  handleModalClose = () => {
    this.setState({
      openModal: false
    });
  };

  render() {
    const { items } = toolbarConfig;
    const { openModal } = this.state;
    return (
      <div className="appToolbar-container ">
        <ListModal open={openModal} handleModalClose={this.handleModalClose} />

        {items.map((item, key) => (
          <div className="appToolbar-buttonContainer">
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
          </div>
        ))}
      </div>
    );
  }
}

export default AppToolbar;
