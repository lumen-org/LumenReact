import React from "react";
import { connect } from "react-redux";
import { EMPTY } from "../../states/constants";
import StandardSpecification from "./StandardSpecification";

class StandardSpecificationContainer extends React.Component {
    static propTypes = {
        specificationId: PropTypes.number,
    };

    render() {
        const specifications = this.props.standardSpecifications.byId;
        const { specificationId } = this.props
        return (<div>
            {
                (specificationId !== EMPTY && specifications[specificationId]) &&
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
        specifications: state.standardSpecifications.standardSpecifications,
    };
};

export default connect(mapStateToProps, null)(StandardSpecificationContainer);
