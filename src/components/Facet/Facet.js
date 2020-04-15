import React from "react";
import Field from "../Field/FieldContainer";
import Checkbox from "styled-components"
import specificationFacetConfig from "../../configs/specificationFacetsConfig";
import Button from "@material-ui/core/Button";
import { Label } from "@material-ui/icons";
import ListModal from "../../components/ListModal";
import toolbarConfig from "../../configs/appToolbar";
//import "./Facet.css"

class Facet extends React.Component{
  render() {
    const { facetsActions } = specificationFacetConfig;
    const { openModal } = true;
    return (
      <div className="facet-bar ">
        {Object.entries(facetsActions).map((item, key) => (
          <div className="facet-label">

            <Button
              endIcon={<img src={item.icon} alt="" />}
              key={key}
              onClick={() => console.log("clicked")}
            >
              {item.name}

            </Button>
          </div>
        ))}
      </div>
    )
  }
}
export default Facet;