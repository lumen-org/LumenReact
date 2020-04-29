import React from "react";
import specificationFacetConfig from "../../configs/specificationFacetsConfig";
import "./Facet.css";
import PropTypes from "prop-types";

class Facet extends React.Component {
  static propTypes = {
    facets: PropTypes.object.isRequired,
  };

  handleDataClick = (key) => {
    const { onFacetDataUpdate } = this.props;
    onFacetDataUpdate(key);
  };

  handleModelClick = (key) => {
    const { onFacetModelUpdate } = this.props;
    onFacetModelUpdate(key);
  };

  render() {
    const { facetsActions } = specificationFacetConfig;
    const { facets } = this.props;
    return (
      <div className="facet-bar ">
        {facetsActions.map((item, key) => (
          <div className="facet-label">
            <div className="specifications-facets-item">
              <img
                src={item.icon}
                alt=""
                className="specifications-facets-img"
              />
              {item.name}
              <input
                type="checkbox"
                onClick={() => this.handleModelClick(key)}
                checked={facets[key].model}
              />
              <input
                type="checkbox"
                onClick={() => this.handleDataClick(key)}
                checked={facets[key].data}
              />
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default Facet;
