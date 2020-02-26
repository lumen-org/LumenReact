import React, { Component } from "react";
import TitelH1 from "../../components/Titles/TitelH1";
import Field from "../../components/Fields/Field";
import TitelH2 from "../../components/Titles/TitleH2";
import "./Schema.css"

class Schema extends Component {

  schema_values() {
    return this.props.titles.map((title) =>
      <Field title={title} data={this.props.data_lists[title]}/>
    );
  }

  render() {
    return (
      <div className="Schema">
        <TitelH1 value={"Schema"}/>
        {this.schema_values()}
        <TitelH2 value={"Drop here to remove"}/>
      </div>
    );
  }
}

export default Schema;
