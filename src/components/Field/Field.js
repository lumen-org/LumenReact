import React  from "react";
import TitelH2 from "../Titles/TitleH2";
import FieldList from "../FieldList/FieldList";
import "./Field.scss";
import PropTypes from 'prop-types'

function Field({ title, data, fieldName="" }) {
  return (
    <div className={"Field"}>
      <TitelH2 value={title}/>
      <FieldList dataList={data} fieldName={fieldName}/>
    </div>
  );
}

Field.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired
};

export default Field;
