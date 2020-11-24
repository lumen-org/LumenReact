import React, { Component } from "react";
import PropTypes from "prop-types";
<<<<<<< HEAD
import TitelH1 from "../../components/Titles/TitleH1";
=======
import TitleH1 from "../../components/Titles/TitleH1";
>>>>>>> cb278de8668db187aca51ba72390a048351d5a43
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
        <TitleH1 value={"Schema"} />
        <Field title={"Quantitative"} data={quantitative} dropable={false} />
        <Field title={"Categorical"} data={categorical} dropable={false} />
      </div>
    );
  }
}

export default Schema;
