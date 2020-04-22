import React from "react";
import Field from "../../components/Field/FieldContainer";
import Checkbox from "styled-components"
import specificationFacetConfig from "../../configs/specificationFacetsConfig";
import Button from "@material-ui/core/Button";
import { Label } from "@material-ui/icons";
import ListModal from "../../components/ListModal";
import toolbarConfig from "../../configs/appToolbar";
import "./Facet.css"
import PropTypes from "prop-types";

class Facet extends React.Component {

  static propTypes = {
    facets: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }


  handleClick(key) {
    console.log("handled");

  }

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
              {item.name}<input id={key} type="checkbox" onClick={() => this.handleClick(key)}
                                checked={facets[key].model}
            /><input type="checkbox"
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