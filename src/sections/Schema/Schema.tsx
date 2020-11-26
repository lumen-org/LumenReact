import React, { Component } from "react";
import PropTypes from "prop-types";
import TitleH1 from "../../components/Titles/TitleH1";
import Field from "../../components/Field";
import "./Schema.css";

type SchemaProps = {
  quantitative: object,
  categorical: object
}

/**
 * lets talk about this next week:
 * https://stackoverflow.com/questions/41746028/proptypes-in-a-typescript-react-application
 */
class Schema extends Component<SchemaProps> {
  static propTypes = {
    quantitative: PropTypes.array.isRequired,
    categorical: PropTypes.array.isRequired
  };

  render() {
    const { quantitative, categorical } = this.props;
    return (
      <div className="Schema">
        <TitleH1 value={"Schema"} />
        <Field title={"Quantitative"} data={quantitative} dropable={false} />
        <Field title={"Categorical"} data={categorical} dropable={false} />
      </div>
    );
  }
}

export default Schema;
