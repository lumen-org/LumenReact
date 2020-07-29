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
    const { onThresholdChange, name } = this.props;
    onThresholdChange(document.getElementById(name).value);
  }

  render() {
    const {
      maxValue,
      onThresholdChange,
      name,
    } = this.props;
    return <div className={"thresholdBar"}>
      <label about={name}>Weight threshold </label>
      <input
        type="range"
        id={name}
        min="0"
        max={maxValue.toString()}
        step="0.01"
        onChange={this.getValue}/>
    </div>
  }
}

export default ThresholdBar;
