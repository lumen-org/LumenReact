import React from "react";
import "./FielItem.css";
import CloseButton from "../Button/CloseButton";
import FieldModal from "../FieldModal/FieldModal";


const FieldItem = ({ value, handleClick = null, handleClose = null, handleModal = null, isOpen = false, input_dom=null }) => {
  return (
    <div className="field-item-container draggable">
      {handleClose && <CloseButton handleClose={handleClose}/>}
      <div className={"field-item"} onClick={handleClick}>
        {value}
      </div>
      <FieldModal title={value} isOpen={isOpen} handleClose={handleModal}/>
    </div>
  );
};


export default FieldItem;
