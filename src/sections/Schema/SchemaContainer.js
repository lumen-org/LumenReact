import React from "react";
import { connect } from "react-redux";
import Schema from "./Schema";
import { selectSchemeNames } from "../../states/schemes/selector";

class SchemaContainer extends React.Component {
  render() {
    const { schemeNames } = this.props;
    return (
      <div>
        {this.props.activeSchema !== -1 && (
          <Schema
            quantitative={schemeNames.quantitative}
            categorical={schemeNames.categorical}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    schemeNames: selectSchemeNames(state),
  };
};

export default connect(mapStateToProps, null)(SchemaContainer);
