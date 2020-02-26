import React, { Component } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import "./MainWindowsModal.css";

class MainWindowsModal extends Component {
  static propTypes = {
    open: PropTypes.bool,
    handleModalClose: PropTypes.func
  };

  render() {
    const { open, handleModalClose } = this.props;
    return (
      <Modal open={open} onClose={handleModalClose}>
        <div className="MainWindowsModal">
          <h2>Text in a modal</h2>
          <p>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>
        </div>
      </Modal>
    );
  }
}

export default MainWindowsModal;
