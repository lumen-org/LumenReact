import React from "react";
import specificationFacetConfig from "../../configs/specificationFacetsConfig";
import "./Facet.css";
import PropTypes from "prop-types";

class Facet extends React.Component {

  static propTypes = {
    facets: PropTypes.object.isRequired
  };

  handleDataClick = key => {
    this.props.onFacetDataUpdate(key);
  };

  handleModelClick = key => {
    this.props.onFacetModelUpdate(key);
  };

  render() {
    const { facetsActions } = specificationFacetConfig;
    const { facets } = this.props;
    const { openModal } = true;
    return (
      <table className="table table-sm">
        <thead>
          <tr>
            <th scope="col"> </th>
            <th scope="col">Data</th>
            <th scope="col">Prediction</th>
          </tr>
        </thead>
        <tbody>
        {facetsActions.map((item, key) => (
          <tr>
            <th scope="row">
                <img src={item.icon} alt=""/>
                <div className="d-none d-m-block">
                  {item.name}
                </div>
            </th>
            <td className="text-center">
              <div className="custom-control custom-checkbox">
                <input className="custom-control-input" type="checkbox" onClick={() => this.handleModelClick(key)}
                       checked={facets[key].model} id={item.name + "data"}/>
                  <label className="custom-control-label" htmlFor={item.name + "data"}>
                  </label>
              </div>
              {/*<div className="custom-control custom-checkbox">*/}
              {/*  <input className="custom-control-input" type="checkbox" onClick={() => this.handleModelClick(key)}*/}
              {/*         checked={facets[key].model}/>*/}
              {/*</div>*/}
            </td>
            <td className="text-center">

              <div className="custom-control custom-checkbox">
                <input className="custom-control-input" type="checkbox" onClick={() => this.handleDataClick(key)}
                       checked={facets[key].data} id={item.name + "prediction"}/>
                {/*<input type="checkbox" className="custom-control-input" id={item.name + "prediction"}/>*/}
                <label className="custom-control-label" htmlFor={item.name + "prediction"}>
                </label>
              </div>
            </td>
          </tr>
          ))}
        </tbody>
      </table>
    );
  }

}

export default Facet;
