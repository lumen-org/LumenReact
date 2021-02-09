import React, { Component } from "react";
import PropTypes from "prop-types";
import TitelH1 from "../Titles/TitleH1";
import TitelH2 from "../Titles/TitleH2";
import Field from "../Field";
import Select from '@material-ui/core/Select';
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Input from "@material-ui/core/Input";

class PPCSpecification extends Component {
  static propTypes = {
    statisticsLabel: PropTypes.object.isRequired,
    onSpecificationChange: PropTypes.func.isRequired,
  };

  handleDrop = item => {
  };



  render() {
    const { statisticsLabel, onSpecificationChange, defaults } = this.props;
    return (
      <div className="specification">
        <TitelH1 value={"Specification"}/>
        <InputLabel id="select-statistic-label">Statistics</InputLabel>
        <Select
          labelId="select-statistic-label"
          id="select-statistic"
          value={defaults.statistic}
          onChange={(event) => {onSpecificationChange("statistic", event.target.value)}}
        >
        {Object.entries(statisticsLabel).map((item, index) => (
              <MenuItem value={item[1]}>{item[1]}</MenuItem>
        ))}
        </Select>
        <InputLabel id="number_of_samples_label">Number of Samples (n)</InputLabel>
        <Input
          labelId="number_of_samples_label"
          margin="dense"
          value={defaults.n}
          onChange={(event) => {onSpecificationChange("n", event.target.value)}}
          //onBlur={handleBlur}
          inputProps={{
            step: 1,
            min: 0,
            max: 100,
            type: 'number',
          }}
        />
        <InputLabel id="number_of_rounds_label">Number of Rounds (k)</InputLabel>
        <Input
          labelId="number_of_rounds_label"
          margin="dense"
          value={defaults.k}
          onChange={(event) => {onSpecificationChange("k", event.target.value)}}
          //onBlur={handleBlur}
          inputProps={{
            step: 1,
            min: 0,
            max: 100,
            type: 'number',
          }}
        />
      </div>
    );
  }
}

export default PPCSpecification;