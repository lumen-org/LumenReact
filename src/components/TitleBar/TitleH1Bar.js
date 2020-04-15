import React from "react";
import "./TitleH1Bar.css";
import CloseButton from "../Button/CloseButton";
import TitelH1 from "../Titles/TitelH1";

const TitleH1Bar = ({ handleClose, title}) => {
  return (
    <div className={"title-bar-h1"}>
      <CloseButton className={"title-bar-close-button"} handleClose={handleClose}/>
      <TitelH1 className={"title-bar-title"} value={title}/>
    </div>
  );
};

export default TitleH1Bar;
