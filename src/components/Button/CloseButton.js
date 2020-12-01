import React from "react";
import "./CloseButton.scss";
import PropTypes from "prop-types";

CloseButton.propTypes = {
  handleClose: PropTypes.func.isRequired,
};

function CloseButton({ handleClose }) {
  return <div className="close-container" onClick={handleClose}>
  <div className="leftright"></div>
  <div className="rightleft"></div>
  </div>


}

export default CloseButton
