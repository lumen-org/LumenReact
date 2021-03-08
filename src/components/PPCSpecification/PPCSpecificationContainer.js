import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { EMPTY } from "../../states/constants";
import PPCSpecification from "./PPCSpecification";
import { getModelNameById } from "../../states/models/selector";
import { statistics } from "../../configs/ppcspecificationConfig";
import { changeSpecificationValue } from "../../states/ppcspecification/actions";


class PPCSpecificationContainer extends React.Component {
  static propTypes = {
    specificationId: PropTypes.number,
  };

  onSpecificationValueChange = (type, value) => {
    const modelname = this.props.activeModelName;
    console.log("modelname ", modelname);
    if (type === "statistic"){
      const values = {
        statistic: value,
      }
      this.props.changeSpecificationValue(this.props.specificationId, values, modelname);
    }
    else if (type === "k"){
      const values = {
        k: value,
      }
      this.props.changeSpecificationValue(this.props.specificationId, values, modelname);
    }
    else if (type === "n"){
      const values = {
        n: value,
      }
      this.props.changeSpecificationValue(this.props.specificationId, values, modelname);
    }
  }

  render() {
    const { ppcspecifications, specificationId } = this.props
    return (<div>
        {
          (specificationId && specificationId !== EMPTY && ppcspecifications[specificationId]) &&
          <PPCSpecification
            statisticsLabel={statistics}
            onSpecificationChange={this.onSpecificationValueChange}
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
    ppcspecifications: state.ppcspecifications.ppcspecifications,
    currentValues: state.ppcspecifications.ppcspecifications[ownProps.specificationId],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeSpecificationValue: (id, values, modelname) => dispatch(changeSpecificationValue(id, values, modelname)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PPCSpecificationContainer);