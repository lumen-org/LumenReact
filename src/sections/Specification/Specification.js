import React, { Component } from "react";
import TitelH1 from "../../components/Titles/TitelH1";
import Field from "../../components/Field";
import TitelH2 from "../../components/Titles/TitleH2";
import "./Specification.css"

class Specification extends Component {

  specification_values() {
    return Object.entries(this.props.data_lists).map(([title, data]) =>
      <Field title={title} data={data} dropable={true}/>
    );
  }

  render() {
    return (
      <div className="specification">
        <TitelH1 value={"Schema"}/>
        {this.specification_values()}
        <TitelH2 value={"Drop here to remove"}/>
      </div>
    );
  }
}

export default Specification;
