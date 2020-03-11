import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import toolbarConfig from "../../configs/appToolbar";
import "./AppToolbar.css";

class AppToolbar extends Component {
  render() {
    const { appToolbarActions } = toolbarConfig;
    return (
      <div className="appToolbar-container ">
        <div>A Search bar will be here</div>

        {appToolbarActions.map((item, key) => (
          <div className="appToolbar-buttonContainer">
            <Button
              variant="contained"
              color="default"
              endIcon={<img src={item.icon} alt="" />}
              size="small"
              key={key}
            >
              {item.name}
            </Button>
          </div>
        ))}
      </div>
    );
  }
}

export default AppToolbar;
