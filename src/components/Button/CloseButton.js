import React from "react";
import "./CloseButton.scss";

function CloseButton({ handleClose }) {
  return <div className="close-container" onClick={handleClose}>
  <div className="leftright"></div>
  <div className="rightleft"></div>
  </div>


}

export default CloseButton
