import React from "react";
import DataItem from "./DataItem";

function DataList(props) {
  const listItems = props.value.map((values) =>
    <DataItem value={values}/>
  );
  return (
      <div className="data-list">
        {listItems}
      </div>
  )
}

export default DataList
