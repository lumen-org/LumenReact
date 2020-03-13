import React  from "react";
import TitelH2 from "../Titles/TitleH2";
import DataList from "../DataList";
import "./Field.css";

function Field({ title, data }) {
  return (
    <div className={Field}>
      <TitelH2 value={title}/>
      <DataList data_list={data}/>
    </div>
  );
}

export default Field;
