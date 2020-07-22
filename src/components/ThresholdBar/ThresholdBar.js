import React, { Component } from "react";

import "./ThresholdBar.css";
import PropTypes from "prop-types";

class ThresholdBar extends Component {
  static propTypes = {
    maxValue: PropTypes.number,
    onThresholdChange: PropTypes.func,
  };
  state = {};

  render() {
    return <div className={"thresholdBar"}>
      <label about="threshold">Weight threshold </label>
      <input
        type="range"
        id="threshold"
        min="0"
        max={this.props.maxValue.toString()}
        step="0.01"
        onChange={this.props.onThresholdChange()}/>
    </div>
  }
}

export default ThresholdBar;
