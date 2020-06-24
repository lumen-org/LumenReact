import React from "react";
import { connect } from "react-redux";
import Schema from "./Schema";
import { selectActiveModelId } from "../../states/visualizations/selector";
import { selectSchemeNames } from "../../states/models/selector";
import { EMPTY } from "../../states/constants";

class SchemaContainer extends React.Component {


  // TODO: CAN WE THINK OF A BETTER NAME THANK SCHEMA, AND FEILDS?
  // TODO2: Refactor this function to utils/fetch.js

  render() {
    const { schemeNames } = this.props;
    return (
      <div>
        {this.props.activeModel !== EMPTY && (
          <Schema
            quantitative={schemeNames.quantitative}
            categorical={schemeNames.categorical}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    schemeNames: selectSchemeNames(state),
  };
};

export default connect(mapStateToProps, null)(SchemaContainer);
