import React from "react";
import "./CloseButton.css";

function CloseButton({ handleClose }) {
  return <div class="close-container" onClick={handleClose}>
  <div class="leftright"></div>
  <div class="rightleft"></div>
  </div>


}

export default CloseButton
