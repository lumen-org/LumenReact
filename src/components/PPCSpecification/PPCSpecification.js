import React, { Component } from "react";
import PropTypes from "prop-types";
import TitelH1 from "../Titles/TitleH1";
import TitelH2 from "../Titles/TitleH2";
import Field from "../Field";

class PPCSpecification extends Component {
  static propTypes = {
    specifications: PropTypes.object.isRequired,
  };

  handleDrop = item => {
  };

  render() {
    const { specifications } = this.props;
    return (
      <div className="specification">
        <TitelH1 value={"Specification"}/>
        {Object.entries(specifications).map((item, index) => (
          <Field
            title={item[0]}
            data={item[1]}
            dropable={true}
          />
        ))}
      </div>
    );
  }
}

export default PPCSpecification;