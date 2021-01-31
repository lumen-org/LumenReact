import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TextField from '@material-ui/core/TextField';
import "./LayoutSetting.scss";

class LayoutSetting extends React.Component {
  static propTypes = {
    currentXLabel:PropTypes.string.isRequired,
    currentYLabel: PropTypes.string.isRequired,
    currentTitle: PropTypes.string.isRequired
  };

  state = {
    xlabel:"",
    ylabel:"",
    title:""
  }

  render() {
    return (
      <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className="">Plot Layout</Typography>
      </AccordionSummary>
      <AccordionDetails>
      
        <Typography>
        <TextField           
          label="x-Axis label"
          id="outlined-size-small"
          defaultValue=""
          variant="outlined"
          size="small" 
          margin="normal"
        />
        <TextField           
          id="outlined-size-small"
          defaultValue=""
          variant="outlined"
          size="small"
          label="y-Axis Label"
          margin="normal"
        />
        <TextField
          id="outlined-size-small"
          defaultValue=""
          variant="outlined"
          size="small"
          label="Plot Title" 
          margin="normal"
          />

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

export default connect(mapStateToProps, mapDispatchToProps)(LayoutSetting);
