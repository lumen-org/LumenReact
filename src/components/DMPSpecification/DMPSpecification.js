import React, { Component } from "react";
import PropTypes from "prop-types";
import TitelH1 from "../Titles/TitleH1";
import TitelH2 from "../Titles/TitleH2";
import Field from "../Field";
import Facet from "../Facet";
import "./DMPSpecification.css";

class DMPSpecification extends Component {
  static propTypes = {
    dmpspecifications: PropTypes.object.isRequired,
    facets: PropTypes.object.isRequired
  };

  handleDrop = item => {
  };

  simplifiedFunction (value) {
    console.log(value)
  }

  render() {
    const { dmpspecifications } = this.props;
    return (
      <div className="specification">
{/*         <TitelH1 value={"Spezification"}/>
        {Object.entries(specifications).map((item, index) => (
          <Field
            title={item[0]}
            data={item[1]}
            dropable={true}
          />
        ))}
        <TitelH2 value={"Drop here to remove"}/>
        <TitelH1 value={"Facets"}/>
        <Facet text="Test" facets={this.props.facets}/> */}
      </div>
    );
  }
}

export default DMPSpecification;