import React from "react";
import Specification from "./Specification";
import { connect } from "react-redux";
import { selectActiveSpecificationId } from "../../states/visualizations/selector";
import { EMPTY } from "../../states/constants";

class SpecificationContainer extends React.Component {
  render() {
    const specifications = this.props.specifications.byId;
    return (<div>
        { 
          this.props.activeSpecification !== EMPTY &&
          <Specification
            specifications={specifications[this.props.activeSpecification].specification}
            facets={specifications[this.props.activeSpecification].facets}
          />
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    specifications: state.specifications.specifications,
    activeSpecification: selectActiveSpecificationId(state)
  };
};

export default connect(mapStateToProps, null)(SpecificationContainer);
