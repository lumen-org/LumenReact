import React from "react";
import Field from "../../components/Field/FieldContainer";
import Checkbox from "styled-components"
import PropTypes from "prop-types";

class Facet extends React.Component {

  static propTypes = {
    facets: PropTypes.object.isRequired
  };

  handleDataClick = key => {
    this.props.onFacetDataUpdate(key);
  };

  handleModelClick = key => {
    this.props.onFacetModelUpdate(key);
  };

  render(){
    const { facetsActions } = specificationFacetConfig;
    const { facets } = this.props;
    const { openModal } = true;
    return (
      <div className="facet-bar ">
        {facetsActions.map((item, key) => (
          <div className="facet-label">
            <div>
              <img src={item.icon} alt="" />
              {item.name}<input type="checkbox" onClick={() => this.handleModelClick(key)}
                                checked={facets[key].model}
            /><input type="checkbox" onClick={() => this.handleDataClick(key)}
                     checked={facets[key].data}
            />
            </div>
          </div>
        ))}
      </div>
    )
  }

}
export default Facet;
