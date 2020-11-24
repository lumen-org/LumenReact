import React, { Component } from "react";
import PropTypes from "prop-types";
import TitleH1 from "../../components/Titles/TitleH1";
import TitleH2 from "../../components/Titles/TitleH2";
import Field from "../../components/Field";
import Facet from "../Facet";
import "./Specification.css";

class Specification extends Component {
  static propTypes = {
    specifications: PropTypes.object.isRequired,
    facets: PropTypes.object.isRequired
  };

  handleDrop = item => {
  };

  render() {
    const { specifications, facets } = this.props;
    return (
      <div className="specification">
        <TitleH1 value={"Spezification"}/>
        {Object.entries(specifications).map((item, index) => (
          <Field
            title={item[0]}
            data={item[1]}
            dropable={true}
            onDrop={this.handleDrop}
          />
        ))}
        <TitleH2 value={"Drop here to remove"}/>
        <TitleH1 value={"Facets"}/>
        <Facet text="Test" facets={this.props.facets}/>
      </div>
    );
  }
}

export default Specification;
