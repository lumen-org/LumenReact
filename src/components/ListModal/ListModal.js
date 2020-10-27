import React, { Component } from "react";
import PropTypes from "prop-types";
import Modal from "react-modal";
import Fab from "@material-ui/core/Fab";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import DeleteIcon from "@material-ui/icons/Delete";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import "./ListModal.css";

const modalStyles = {
  content: {
    top: "30%",
    left: "30%",
    right: "30%",
    bottom: "30%",
  },
  overlay: {
    zIndex: 1000,
  },
};

class ListModdal extends Component {
  static propTypes = {
    open: PropTypes.bool.isRequired,
    handleModalClose: PropTypes.func.isRequired,
    itemList: PropTypes.array.isRequired,
    handleItemSelection: PropTypes.func,
    handleItemlClone: PropTypes.func,
    handleItemDelete: PropTypes.func,
  };

  onCloseClick = () => {
    const { handleModalClose } = this.props;
    handleModalClose();
  };

  onItemSelect = (item) => {
    const { handleItemSelection } = this.props;
    handleItemSelection(item);
  };

  onCloneButtonClick = (item) => {
    const { handleItemlClone } = this.props;
    handleItemlClone();
  };
  onDeleteButtonClick = (item) => {
    const { handleItemDelete } = this.props;
    handleItemDelete();
  };

  render() {
    const { open, itemList, handleModalClose } = this.props;
    return (
      <Modal
        isOpen={open}
        onRequestClose={handleModalClose}
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
            <div className="List-item-div">
              <ListItem
                button
                onClick={() => this.onItemSelect(item)}
                key={key}
              >
                {item}
              </ListItem>

              <IconButton
                aria-label="Delete"
                className={"List-item-delete-button"}
                onClick={() => this.onCloneButtonClick(item)}
              >
                <FileCopyIcon fontSize="small" />
              </IconButton>
              <IconButton
                aria-label="Delete"
                className={"List-item-delete-button"}
                onClick={() => this.onDeleteButtonClick(item)}
              >
                <DeleteIcon fontSize="small" />
              </IconButton>
            </div>
          ))}
        </List>
      </Modal>
    );
  }
}

export default ListModdal;
