import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { EMPTY } from "../../states/constants";
import StandardSpecification from "./StandardSpecification";

class StandardSpecificationContainer extends React.Component {
    static propTypes = {
        specificationId: PropTypes.number,
    };

    render() {
        const { specifications, specificationId } = this.props
        return (<div>
            {
                (specificationId && specificationId !== EMPTY && specifications[specificationId]) &&
                <StandardSpecification
                    specifications={specifications[specificationId].specification}
                    facets={specifications[specificationId].facets}
                />
            }
        </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        specifications: state.standardspecifications.standardspecifications,
    };
};

export default connect(mapStateToProps, null)(StandardSpecificationContainer);
