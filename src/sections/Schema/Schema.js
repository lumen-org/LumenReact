import React, { Component } from "react";
import TitelH1 from "../../components/Titles/TitelH1";
import Field from "../../components/Field";
import "./Schema.css";


function Schema(props) {
  function schema_values(data_list) {
    return Object.entries(data_list).map(([title, data]) =>
      <Field title={title} data={data} draggable={true}/>
    );
  }
  return (
    <div className="Schema">
      <TitelH1 value={"Schema"}/>
      {schema_values(props.data_lists)}
    </div>
  );
}

 export default Schema;
