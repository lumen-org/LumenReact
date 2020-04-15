import React from "react";
import Field from "../Field/FieldContainer";
import Checkbox from "styled-components"
import specificationFacetConfig from "../../configs/specificationFacetsConfig";
import Button from "@material-ui/core/Button";
import { Label } from "@material-ui/icons";
import ListModal from "../../components/ListModal";
import toolbarConfig from "../../configs/appToolbar";
import "./Facet.css"

class Facet extends React.Component{
  render() {
    const { facetsActions } = specificationFacetConfig;
    const { openModal } = true;
    return (
      <div className="facet-bar ">
        {facetsActions.map((item, key) => (
          <div className="facet-label">
            <div>
              <img src={item.icon} alt="" />
              {item.name}<input type="checkbox"
                                checked={item.model}
            /><input type="checkbox"
                     checked={item.data}
            />
            </div>
          </div>
        ))}
      </div>
    )
  }
}
export default Facet;