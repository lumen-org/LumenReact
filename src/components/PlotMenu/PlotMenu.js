import React, { Component } from "react";
import PropTypes from "prop-types";

import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from '@material-ui/core/MenuItem';

import { DropdownButton, Dropdown } from "react-bootstrap";

import "./PlotMenu.scss";

function PlotMenu(props) {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // #3f51b5
  return (
    <div>
      <Button
        aria-haspopup="true"
        onClick={handleClick}
        variant="contained"
        color="primary"
        size="small"
      >
        New Plot
        </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => props.onCreateStandardPlot()}>
          Standard Plot
        </MenuItem>
        <MenuItem onClick={() => props.onCreateMultiPlot()}>
          {" "}
          Multi Plot
        </Dropdown.Item>
        <Dropdown.Item onClick={() => this.props.onCreatePCIPlot()}>
          {" "}
          PCI Graph
        </Dropdown.Item>
      </DropdownButton>
    );
}

export default PlotMenu;
