import React from "react";
import "./DataItem.css"
function DataItem(props) {
  return (
      <div className="data-item">
        {props.value}
      </div>
  )
}

export default DataItem
