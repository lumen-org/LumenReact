import React from "react"
import specificationFacetConfig from "../../configs/specificationFacetsConfig";
import "./Facet.css"
import PropTypes from "prop-types";

class Facet extends React.Component {

  static propTypes = {
    facets: PropTypes.object.isRequired
  };

  keyToCorrectString = key => {
    switch(key) {
      case 0:
        return "prediction"
      case 1:
        return "dataPoints"
      case 2:
        return "marginals"
      case 3:
        return "density"
    }
  }

  handleDataClick = key => {
    this.props.onFacetDataUpdate(this.keyToCorrectString(key));
  };

  handleModelClick = key => {
    this.props.onFacetModelUpdate(this.keyToCorrectString(key));
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
              {item.name}<input
              type="checkbox"
              onClick={() => this.handleModelClick(key)}
              checked={facets[this.keyToCorrectString(key)].model}
            /><input
              type="checkbox"
              onClick={() => this.handleDataClick(key)}
              checked={facets[this.keyToCorrectString(key)].data}

            />
            </div>
          </div>
        ))}
      </div>
    )
  }

}
export default Facet;
