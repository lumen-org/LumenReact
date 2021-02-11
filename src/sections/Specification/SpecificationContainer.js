import React from "react";
import { connect } from "react-redux";
import { selectActiveSpecificationId } from "../../states/visualizations/selector";
import { EMPTY } from "../../states/constants";
import Specification from "./Specification";

class SpecificationContainer extends React.Component {

  render() {
    const {activeSpecificationId, specifications} = this.props;
    return activeSpecificationId !== EMPTY && <Specification
      specificationType={specifications[activeSpecificationId].specificationType}
      specificationId={activeSpecificationId}
    />
  }
}

const mapStateToProps = state => {
  return {
    specifications: state.specifications.specifications.byId,
    activeSpecificationId: selectActiveSpecificationId(state)
  };
};

export default connect(mapStateToProps, null)(SpecificationContainer);
