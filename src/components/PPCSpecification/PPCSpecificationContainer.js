import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { EMPTY } from "../../states/constants";
import PPCSpecification from "./PPCSpecification";

class PPCSpecificationContainer extends React.Component {
  static propTypes = {
    specificationId: PropTypes.number,
  };

  render() {
    const { specifications, specificationId } = this.props
    return (<div>
        {
          (specificationId && specificationId !== EMPTY && specifications[specificationId]) &&
          <PPCSpecification
            specifications={specifications[specificationId].specification}
          />
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    specifications: state.ppcspecification.ppcspecification,
  };
};

export default connect(mapStateToProps, null)(PPCSpecificationContainer);