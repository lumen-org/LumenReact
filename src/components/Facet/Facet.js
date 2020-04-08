import React from "react";
import Field from "../Field/FieldContainer";
import Checkbox from "styled-components"

class Facet extends React.Component{
  render() {
    return (
      <div>
        <label>

          <input type="checkbox" />
          Test Check box
          <img src="../../../public/logo192.png"
               width="300"
               height="300"
          />
        </label>
      </div>
    )
  }
}
export default Facet;