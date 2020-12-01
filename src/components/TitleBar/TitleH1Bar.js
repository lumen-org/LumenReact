import React from "react";
import "./TitleH1Bar.scss";
import CloseButton from "../Button/CloseButton";
import TitleH1 from "../Titles/TitleH1";

const TitleH1Bar = ({ handleClose, title}) => {
  return (
    <div className={"title-bar-h1"}>
      <CloseButton className={"title-bar-close-button"} handleClose={handleClose}/>
      <TitleH1 className={"title-bar-title"} value={title}/>
    </div>
  );
};

export default TitleH1Bar;