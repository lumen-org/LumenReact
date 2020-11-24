import React  from "react";
import TitleH2 from "../Titles/TitleH2";
import FieldList from "../FieldList/FieldList";
import "./Field.scss";
import PropTypes from 'prop-types'

Field.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired
};

function Field({ title, data, fieldName=""}) {
  // TODO: figure out what curly bracket does
  return (
    <div className={"Field"}>
      <TitleH2 value={title}/>
      <FieldList dataList={data} fieldName={fieldName}/>
    </div>
  );
}

export default Field;