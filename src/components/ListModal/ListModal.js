import React, { Component } from "react";
import PropTypes from "prop-types";
import Modal from "react-modal";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const modalStyles = {
  content: {
    top: "30%",
    left: "30%",
    right: "30%",
    bottom: "30%"
  }
};

class MainWindowsModal extends Component {
  static propTypes = {
    open: PropTypes.bool.isRequired,
    handleModalClose: PropTypes.func.isRequired,
    itemList: PropTypes.array.isRequired,
    handleItemSelection: PropTypes.func
  };

  onCloseClick = () => {
    const { handleModalClose } = this.props;
    handleModalClose();
  };

  onItemSelect = () => {
    const { handleItemSelection } = this.props;
    handleItemSelection("model");
  };

  render() {
    const { open } = this.props;
    return (
      <Modal
        isOpen={open}
        //        onRequestClose={closeModal}
        style={modalStyles}
        contentLabel="Main Windows"
      >
        <h2> Found Models</h2>
        <List>
          <ListItem button onClick={this.onItemSelect}>
            Model 1
          </ListItem>
          <ListItem button>Model 1</ListItem>
          <ListItem button>Model 1</ListItem>
        </List>
        <button onClick={this.onCloseClick}>close</button>{" "}
      </Modal>
    );
  }
}

export default MainWindowsModal;
