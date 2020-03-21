import React, { Component } from "react";
import PropTypes from "prop-types";
import TitelH1 from "../../components/Titles/TitelH1";
import TitelH2 from "../../components/Titles/TitelH1";
import Field from "../../components/Field";
import "./Schema.css";

class Schema extends Component {
  static propTypes = {
    quantitative: PropTypes.array.isRequired,
    categorical: PropTypes.array.isRequired
  };

  /*   function schema_values(data_list) {
    return Object.entries(data_list).map(([title, data]) =>
      <Field title={title} data={data} draggable={true}/>
    ); */

  render() {
    const { quantitative, categorical } = this.props;
    console.log(quantitative, categorical);
    return (
      <div className="Schema">
        <Field title={"Quantitative"} data={quantitative} dropable={true} />
        <Field title={"Categorical"} data={categorical} dropable={true} />
      </div>
    );
  }
}

export default Schema;
