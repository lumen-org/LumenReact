import React from "react";
// import "./FieldItemModal.css";
import TitleH1Bar from "../TitleBar/TitleH1Bar";
import Modal from "react-modal";

const modalStyles = {
  overlay: {
    backgroundColor: null
  },
  content: {
    // top: "50%",
    // left: "50%",
    // right: "auto",
    // bottom: "auto",
    // marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

Modal.setAppElement(".field-modal");

const FieldItemModal = ({ isOpen, handleClose, title = "Unkown", input_dom = null }) => {
  return (
    <div className={"field-modal"}>
      <Modal
        isOpen={isOpen}
        onRequestClose={handleClose}
        style={modalStyles}
      >
        <TitleH1Bar title={title} handleClose={handleClose}/>
      </Modal>
    </div>
  );
};


export default FieldItemModal;
