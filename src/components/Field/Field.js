import React  from "react";
import TitelH2 from "../Titles/TitleH2";
import DataList from "../DataList";
import "./Field.css";
import PropTypes from 'prop-types'

function Field({ title, data, fieldName="" }) {
  return (
    <div className={"Field"}>
      <TitelH2 value={title}/>
      <DataList dataList={data} fieldName={fieldName}/>
    </div>
  );
}

Field.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired
};

export default Field;
