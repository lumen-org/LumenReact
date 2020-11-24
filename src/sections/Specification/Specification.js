import React, { Component } from "react";
import PropTypes from "prop-types";
<<<<<<< HEAD
import TitelH1 from "../../components/Titles/TitleH1";
import TitelH2 from "../../components/Titles/TitleH2";
=======
import TitleH1 from "../../components/Titles/TitleH1";
import TitleH2 from "../../components/Titles/TitleH2";
>>>>>>> cb278de8668db187aca51ba72390a048351d5a43
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
<<<<<<< HEAD
        <TitelH2 value={"Drop here to remove"}/>
        <TitelH1 value={"Facets"}/>
        <Facet text="Test" facets={facets}/>
=======
        <TitleH2 value={"Drop here to remove"}/>
        <TitleH1 value={"Facets"}/>
        <Facet text="Test" facets={this.props.facets}/>
>>>>>>> cb278de8668db187aca51ba72390a048351d5a43
      </div>
    );
  }
}

export default Specification;
