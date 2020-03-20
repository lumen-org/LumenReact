import React, { Component } from "react";
import PropTypes from "prop-types";
import TitelH1 from "../../components/Titles/TitelH1";
import Field from "../../components/Field";
import "./Schema.css";

class Schema extends Component {
  static propTypes = {
    fields: PropTypes.array.isRequired
  };

  /*   function schema_values(data_list) {
    return Object.entries(data_list).map(([title, data]) =>
      <Field title={title} data={data} draggable={true}/>
    ); */

  render() {
    const { fields } = this.props;
    return (
      <div className="Schema">
        <TitelH1 value={"Schema"} />
        {fields.map((item, key) => (
          <Field title={item.name} data={"data"} dropable />
        ))}
      </div>
    );
  }
}

export default Schema;
