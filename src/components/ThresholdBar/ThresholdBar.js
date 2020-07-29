import React, { Component } from "react";

import "./ThresholdBar.css";
import PropTypes from "prop-types";

class ThresholdBar extends Component {
  static propTypes = {
    maxValue: PropTypes.number,
    onThresholdChange: PropTypes.func,
    name: PropTypes.string,
  };
  state = {};

  getValue = () => {
    return document.getElementsByName(this.props.name).value
  }

  render() {
    return <div className={"thresholdBar"}>
      <label about="threshold">Weight threshold </label>
      <input
        type="range"
        name={this.props.name}
        min="0"
        value={this.value}
        max={this.props.maxValue.toString()}
        step="0.01"
        onChange={() => this.props.onThresholdChange(this.getValue())}/>
    </div>
  }
}

export default ThresholdBar;
