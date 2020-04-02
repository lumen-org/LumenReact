import React  from "react";
import FieldItem from "./FieldItem";
import "./DataList.css";

function DataList({ dataList, fieldName = "" }) {

  const listItems = [...dataList].map((values) =>
    <FieldItem value={values} fieldName={fieldName}/>
  );
  return (
    <div  className="data-list">
      {listItems}
    </div>
  );
}

export default DataList;
