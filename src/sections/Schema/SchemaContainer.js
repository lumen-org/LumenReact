import React  from "react";
import { connect } from "react-redux";
import Schema from "./Schema";
import { selectActiveModelId } from "../../states/visualizations/selector";

class SchemaContainer extends React.Component {

  state = {
    quantitativeFields: [],
    categoricalFields: []
  };

  // TODO: CAN WE THINK OF A BETTER NAME THANK SCHEMA, AND FEILDS?
  // TODO2: Refactor this function to utils/fetch.js

  render() {
    const models = this.props.models.byId;
    return (
      <div>
        {this.props.activeModel !== -1 &&
        <Schema
          quantitative={models[this.props.activeModel].quantitativeFields}
          categorical={models[this.props.activeModel].categoricalFields}
        />
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    models: state.models.models,
    activeModel: selectActiveModelId(state)
  };
};

export default connect(mapStateToProps, null)(SchemaContainer);
