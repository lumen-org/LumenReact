import React, { Component } from "react";
import PropTypes from "prop-types";

import { DropdownButton, Dropdown } from "react-bootstrap";

class PlotMenu extends Component {
  static propTypes = {
    onCreateStandardPlot: PropTypes.func,
    onCreateMultiPlot: PropTypes.func,
  };

  render() {
    return (
      <DropdownButton title="New Plot" key="secondary" size="sm">
        <Dropdown.Item onClick={() => this.props.onCreateStandardPlot()}>
          Standard Plot
        </Dropdown.Item>
        <Dropdown.Item onClick={() => this.props.onCreateMultiPlot()}>
          {" "}
          Multi Plot
        </Dropdown.Item>
      </DropdownButton>
    );
  }
}

export default PlotMenu;
