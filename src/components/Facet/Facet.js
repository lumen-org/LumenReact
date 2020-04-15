import React from "react";
import Field from "../Field/FieldContainer";
import Checkbox from "styled-components"

class Facet extends React.Component{
  render() {
    return (
      <div>
        <label>
          <img src={require('../../assets/icons/contour.svg')}
          />{this.props.text}<input type="checkbox"/><input type="checkbox"/>
        </label>
      </div>
    )
  }
}
export default Facet;