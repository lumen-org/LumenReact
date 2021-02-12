import React from "react";
import PropTypes from "prop-types";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TextField from '@material-ui/core/TextField';
import Slider from '@material-ui/core/Slider';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import "./MarkerSetting.scss";

class MarkerSetting extends React.Component {
  static propTypes = {
    title: "Prediction Marker"
  };

  state = {
    symbol:"square"
  }

  render() {
    const {title} = this.props

    return (
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className="">{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <Typography gutterBottom>Marker Size</Typography>
          <Slider
            defaultValue={0.5}
          />
              {/* data structure looks like this
            size: 8,
            opacity: 0.5,
            line: {
              width: 1.5,
            },
            symbol: "square", */}
            <FormControl className="">
                <InputLabel shrink htmlFor="age-native-label-placeholder">
                  Symbol
                </InputLabel>
                <NativeSelect
                  value={this.state.symbol}
                  //onChange={handleChange}
                  inputProps={{
                    name: 'Symbol',
                    id: 'age-native-label-placeholder',
                  }}
                >
                  <option value="Square">Square</option>
                  <option value="Circle">Circle</option>
                  <option value="Triangle">Triangle</option>
                </NativeSelect>
              </FormControl>

          </Typography>
        </AccordionDetails>
      </Accordion>
    );
  }
}

const mapStateToProps = (state) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default MarkerSetting;
