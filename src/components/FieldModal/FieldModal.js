import React from "react";
import classNames from "classnames";
import "./FieldModal.css";
import TitleH1Bar from "../TitleBar/TitleH1Bar";
import Modal from "react-modal";

const FieldModal = ({ isOpen, handleClose, title = "Unkown", input_dom=null}) => {
  const showFieldModal = isOpen ? "show-field-modal" : "hide-field-modal";
  let fieldClasses = classNames(["field-modal", showFieldModal]);
  return (
    <Modal isOpen={isOpen} onRequestClose={handleModal}>

    </Modal>

  );
};


export default FieldModal;
