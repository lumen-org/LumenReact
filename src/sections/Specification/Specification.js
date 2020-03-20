import React, { Component } from "react";
import TitelH1 from "../../components/Titles/TitelH1";
import Field from "../../components/Field";
import TitelH2 from "../../components/Titles/TitleH2";
import "./Specification.css";

class Specification extends Component {
  handleDrop(item) {}
  /* 
  specification_values() {
    return Object.entries(this.props.data_lists).map(([title, data]) =>
      <Field title={title} data={data} dropable={true} onDrop={this.handleDrop}/>
    );
  } */

  render() {
    return (
      <div className="specification">
        hello
        {/*         <TitelH1 value={"Spezification"}/>
        {this.specification_values()}
        <TitelH2 value={"Drop here to remove"}/> */}
      </div>
    );
  }
}

export default Specification;
