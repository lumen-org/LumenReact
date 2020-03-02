import React from "react";
import "./FielItem.css"


const FieldItem = (props) => {
  return (
      <div className="field-item draggable">
        {props.value}
      </div>
  )
};

export default FieldItem
