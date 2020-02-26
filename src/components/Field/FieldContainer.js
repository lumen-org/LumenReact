import React, { useState } from "react";
import { useDrop } from "react-dnd";
import classNames from "classnames";
import Field from "./Field";

function FieldContainer({ title, data, dropable = false }) {
  const [hasDropped, setHasDropped] = useState(false);
  const [{ isOverCurrent }, drop] = useDrop({
    accept: "DataItem",
    drop(item, monitor) {
      setHasDropped(true);
    },
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
      <Field title={title} data={data}/>
    </div>;
  }
  return (
    <div className={fieldClasses}>
      <Field title={title} data={data}/>
    </div>
  );
}

export default FieldContainer;
