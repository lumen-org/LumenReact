import React  from "react";
import TitelH2 from "../Titles/TitleH2";
import DataList from "../DataList";
import "./Field.css";
import PropTypes from 'prop-types'

function Field({ title, data, associated_list_key="" }) {
  return (
    <div className={"Field"}>
      <TitelH2 value={title}/>
      <DataList data_list={data} associated_list_key={associated_list_key}/>
    </div>
  );
}

Field.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired
};

export default Field;
