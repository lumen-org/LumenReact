import React  from "react";
import { connect } from "react-redux";
import Schema from "./Schema";
import { selectActiveSchemeId } from "../../states/models/selector";

class SchemaContainer extends React.Component {

  state = {
    quantitativeFields: [],
    categoricalFields: []
  };

  // TODO: CAN WE THINK OF A BETTER NAME THANK SCHEMA, AND FEILDS?
  // TODO2: Refactor this function to utils/fetch.js

  render() {
    const schemes = this.props.schemes.byId;
    return (
      <div>
        {this.props.activeSchema !== -1 &&
        <Schema
          quantitative={schemes[this.props.activeSchema].quantitativeFields}
          categorical={schemes[this.props.activeSchema].categoricalFields}
        />
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    schemes: state.schemes.schemes,
    activeSchema: selectActiveSchemeId(state)
  };
};

export default connect(mapStateToProps, null)(SchemaContainer);
