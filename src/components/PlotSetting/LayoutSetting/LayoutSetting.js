import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TextField from '@material-ui/core/TextField';
import {getActivePlotId} from "../../../states/plots/selector";
import {updatePlotTitle} from "../../../states/plotSettings/actions";

import "./LayoutSetting.scss";

class LayoutSetting extends React.Component {
  static propTypes = {
    currentXLabel:PropTypes.string.isRequired,
    currentYLabel: PropTypes.string.isRequired,
    currentTitle: PropTypes.string.isRequired,
    activePlotId: PropTypes.number.isRequired
  };

  state = {
    xlabel:"",
    ylabel:"",
    title:""
  }

  handleXLabelTextFieldChange = (e)=> {
    this.setState({
        ...this.state,
        xlabel: e.target.value
    });
  }

  handleYLabelTextFieldChange = (e)=> {
    this.setState({
        ...this.state,
        ylabel: e.target.value
    });
  }

  handleTitleTextFieldChange = (e)=> {
    const {activePlotId, updatePlotTitle} = this.props;

    this.setState({
        ...this.state,
        title: e.target.value
    });

    updatePlotTitle(activePlotId, e.target.value)
  }


  render() {
    const {xlabel, ylabel, title} = this.state;
    const {activePlotId}  = this.props;
    console.log(activePlotId)

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
          value={xlabel} 
          onChange={this.handleXLabelTextFieldChange} 
        />

        <TextField           
          id="outlined-size-small"
          defaultValue=""
          variant="outlined"
          size="small"
          label="y-Axis Label"
          margin="normal"
          value={ylabel} 
          onChange={this.handleYLabelTextFieldChange} 

        />
        <TextField

          id="outlined-size-small"
          defaultValue=""
          variant="outlined"
          size="small"
          label="Plot Title" 
          margin="normal"
          value={title} 
          onChange={this.handleTitleTextFieldChange} 

          />

        </Typography>
      </AccordionDetails>
    </Accordion>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    activePlotId: getActivePlotId(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      updatePlotTitle: (id, updatedTItle)=>dispatch(updatePlotTitle(id, updatedTItle))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LayoutSetting);
