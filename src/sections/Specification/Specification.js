import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Specification.css";
import { MULTI_SPECIFICATION, STANDARD_SPECIFICATION } from "../../states/specifications/specificationTypes";
import StandardSpecification from "../../components/StandardSpecification";
import { EMPTY } from "../../states/constants";
import MultiSpecification from "../../components/MultiSpecification";

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
        ) : specificationType === MULTI_SPECIFICATION ? (
          <MultiSpecification specificationId={specificationId} />
        ) : EMPTY
        }
      </div>
    );
  }
}

export default Specification;
