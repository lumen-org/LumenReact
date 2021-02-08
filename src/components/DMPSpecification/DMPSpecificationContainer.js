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
        const { dmpspecifications, specificationId } = this.props
        console.log("DMP dmpSPECIFICATIONS",dmpspecifications)
        return (<div>
            {
                (specificationId && specificationId !== EMPTY && dmpspecifications[specificationId]) &&
                <DMPSpecification
                    dmpspecifications={dmpspecifications[specificationId].specification}
                />
            }
        </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        dmpspecifications: state.dmpspecifications.DMPSpecifications,
    };
};

export default connect(mapStateToProps, null)(DMPSpecificationContainer);
