import React, { useRef } from "react";
import "./FielItem.scss";
import CloseButton from "../Button/CloseButton";
import FieldItemModal from "../FieldItemModal/FieldItemModal";

const FieldItem = ({
  value,
  handleClick = null,
  handleClose = null,
  handleModal = null,
  isOpen = false,
  input_dom = null,
}) => {
  return (
    <div className="field-item-container draggable">
      {handleClose && <CloseButton handleClose={handleClose} />}
      <div className={"field-item"} onClick={handleClick}>
        {value}
      </div>
      <FieldItemModal title={value} isOpen={isOpen} handleClose={handleModal} />
    </div>
  );
};

export default FieldItem;
