import React, { useState } from "react";
import DataItem from "./DataItem";
import "./DataList.css";

function DataList({ data_list }) {

  const listItems = data_list.map((values) =>
    <DataItem value={values}/>
  );
  return (
    <div  className="data-list">
      {listItems}
    </div>
  );
}

export default DataList;
