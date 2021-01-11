import React, { Component } from "react"
import { connect } from "react-redux";
import { EMPTY } from "../../states/constants";
import MultiSpecification from "./MultiSpecification";

class MultiSpecificationContainer extends Component {
    render() {
        console.log(this.props)
        const { multispecification, specificationId } = this.props
        return (
            <div>
                {
                    (specificationId && specificationId !== EMPTY && multispecification[specificationId]) &&
                    <MultiSpecification
                        specifications={multispecification[specificationId].specification}
                    />
                }

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        multispecification: state.multispecifications.multispecifications
    }
}

export default connect(mapStateToProps, null)(MultiSpecificationContainer)