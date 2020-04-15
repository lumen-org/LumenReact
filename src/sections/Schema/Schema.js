import React, { Component } from "react";
import PropTypes from "prop-types";
import TitelH1 from "../../components/Titles/TitelH1";
import Field from "../../components/Field";
import "./Schema.css";

class Schema extends Component {
  static propTypes = {
    quantitative: PropTypes.array.isRequired,
    categorical: PropTypes.array.isRequired
  };

  render() {
    const { quantitative, categorical } = this.props;
    return (
      <div className="Schema">
        <TitelH1 value={"Schema"} />
        <Field title={"Quantitative"} data={quantitative} dropable={false} />
        <Field title={"Categorical"} data={categorical} dropable={false} />
      </div>
    );
  }
}

export default Schema;
