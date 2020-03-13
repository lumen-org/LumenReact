import React from "react";
import "./CloseButton.css";

function CloseButton({ handleClose }) {
  return <button className={"close-button"} onClick={handleClose}>
    x
  </button>
}

export default CloseButton
