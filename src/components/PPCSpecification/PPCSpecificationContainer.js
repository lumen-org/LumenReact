import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { EMPTY } from "../../states/constants";
import PPCSpecification from "./PPCSpecification";
import fetchData from "../../utils/fetch";
import { BASE_URL } from "../../constants/query";
import solve from "../PCIGraph/utils/weakConstraintBasedGraphLayoutAlgorithm";
import { getModelNameById } from "../../states/models/selector";
import { statistics } from "../../configs/ppcspecificationConfig";
import { hidePCIGraph } from "../../states/models/actions";
import { changeSpecificationValue } from "../../states/ppcspecification/actions";


class PPCSpecificationContainer extends React.Component {
  static propTypes = {
    specificationId: PropTypes.number,
  };

  onSpecificationChange = (type, value) => {
    if (type === "statistic"){
      //console.log("changed statistic");
      const values = {
        statistic: value,
      }
      this.props.changeSpecificationValue(this.props.specificationId, values)
    }
    else if (type === "k"){
      //console.log("changed k");
      const values = {
        k: value,
      }
      this.props.changeSpecificationValue(this.props.specificationId, values)
    }
    else if (type === "n"){
      //console.log("changed n");
      const values = {
        n: value,
      }
      this.props.changeSpecificationValue(this.props.specificationId, values)
    }


  }

  render() {
    const { ppcspecifications, specificationId } = this.props
    return (<div>
        {
          (specificationId && specificationId !== EMPTY && ppcspecifications[specificationId]) &&
          <PPCSpecification
            statisticsLabel={statistics}
            onSpecificationChange={this.onSpecificationChange}
            defaults={this.props.currentValues}
          />
        }
      </div>
    );
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    activeModelName: getModelNameById(state, state.plots.activePlotId),
    ppcspecifications: state.ppcspecification.ppcspecification,
    currentValues: state.ppcspecification.ppcspecification[ownProps.specificationId],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeSpecificationValue: (id, values) => dispatch(changeSpecificationValue(id, values)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PPCSpecificationContainer);