import React  from "react";
import { useDrop } from "react-dnd";
import classNames from "classnames";
import Field from "./Field";
import { FIELD_ITEM } from "../../constants/dragAndDropTypes";

function FieldContainer({ title, data, dropable = false, type = FIELD_ITEM}) {
  const [{ isOverCurrent }, drop] = useDrop({
    accept: [type],
    drop: () => ({
      result: title
    }),
    collect: monitor => ({
      isOverCurrent: monitor.isOver({ shallow: true })
    })
  });
  let fieldClasses = classNames({});
  if (dropable) {
    if (isOverCurrent) {
      fieldClasses += " is-hover";
    }
    return <div ref={drop} className={fieldClasses}>
      <Field title={title} data={data} associated_list_key={title} />
    </div>;
  }
  return (
    <div className={fieldClasses}>
      <Field title={title} data={data}/>
    </div>
  );
}

export default FieldContainer;
