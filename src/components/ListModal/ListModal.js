import React, { Component } from "react";
import PropTypes from "prop-types";
import Modal from "react-modal";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import "./ListModal.css";
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

  onItemSelect = item => {
    const { handleItemSelection } = this.props;
    handleItemSelection(item);
  };

  render() {
    const { open, itemList } = this.props;
    return (
      <Modal
        isOpen={open}
        //        onRequestClose={closeModal}
        style={modalStyles}
        contentLabel="Main Windows"
      >
        <div className="ListModal-Header">
          <h3 className="ListModal-Header-Text"> Models Found </h3>
          <IconButton aria-label="delete" onClick={this.onCloseClick}>
            <CloseIcon fontSize="small" />
          </IconButton>{" "}
        </div>
        <List>
          {itemList.map((item, key) => (
            <ListItem button onClick={() => this.onItemSelect(item)} key={key}>
              {item}
            </ListItem>
          ))}
        </List>
      </Modal>
    );
  }
}

export default MainWindowsModal;
