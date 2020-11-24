import React, { Component } from "react";
import PropTypes from "prop-types";
import TitelH1 from "../../components/Titles/TitelH1";
import TitelH2 from "../../components/Titles/TitleH2";
import Field from "../../components/Field";
import Facet from "../../components/Facet";
import "./Specification.css";
import { STANDARD_SPECIFICATION } from "../../states/specifications/specificationTypes";
import StandardSpecification from "../../components/StandardSpecification";
import { EMPTY } from "../../states/constants";

class Specification extends Component {
  static propTypes = {
    specificationsType: PropTypes.object.isRequired
  };

  handleDrop = item => {
  };

  render() {
    const { specificationType, specificationId } = this.props;
    return (
      <div className="specification">
        {specificationType === STANDARD_SPECIFICATION ? (
          <StandardSpecification specificationId={specificationId} />
        ) : EMPTY
        }
      </div>
    );
  }
}

export default Specification;
