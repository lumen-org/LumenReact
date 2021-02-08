import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { EMPTY } from "../../states/constants";
import DMPSpecification from "./DMPSpecification";

class DMPSpecificationContainer extends React.Component {
    static propTypes = {
        specificationId: PropTypes.number,
    };

    render() {
        const { specifications, specificationId } = this.props
        return (<div>
            {
                (specificationId && specificationId !== EMPTY && specifications[specificationId]) &&
                <DMPSpecification
                    specifications={specifications[specificationId].specification}
                />
            }
        </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        specifications: state.dmpspecifications.DMPSpecifications,
    };
};

export default connect(mapStateToProps, null)(DMPSpecificationContainer);
