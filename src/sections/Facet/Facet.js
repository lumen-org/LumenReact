import React from "react";
import specificationFacetConfig from "../../configs/specificationFacetsConfig";
import "./Facet.css";
import PropTypes from "prop-types";

class Facet extends React.Component {
  static propTypes = {
    facets: PropTypes.object.isRequired,
  };

  handleDataClick = (key) => {
    this.props.onFacetDataUpdate(key);
  };

  handleModelClick = (key) => {
    this.props.onFacetModelUpdate(key);
  };

  render() {
    const { facetsActions } = specificationFacetConfig;
    const { facets } = this.props;
    return (
      <div className="facet-bar ">
        {facetsActions.map((item, key) => (
          <div className="facet-label">
            <div>
              <img src={item.icon} alt="" />
              {item.name}
              <input
                type="checkbox"
                onClick={() => this.handleModelClick(item.name)}
                checked={facets[item.name].model}
              />
              <input
                type="checkbox"
                onClick={() => this.handleDataClick(item.name)}
                checked={facets[item.name].data}
              />
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default Facet;
