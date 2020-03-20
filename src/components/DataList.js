import React  from "react";
import FieldItem from "./FieldItem";
import "./DataList.css";

function DataList({ data_list, associated_list_key: title = "" }) {

  const listItems = [...data_list].map((values) =>
    <FieldItem value={values} associated_list_key={title}/>
  );
  return (
    <div  className="data-list">
      {listItems}
    </div>
  );
}

export default DataList;
