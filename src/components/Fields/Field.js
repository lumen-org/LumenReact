import React from "react";
import TitelH2 from "../Titles/TitleH2";
import DataList from "../DataList";

function Field(props) {
  return (
      <div className="field">
        <TitelH2 value={props.title}/>
        <DataList value={props.data}/>
      </div>
  )
}

export default Field
