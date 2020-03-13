import React from "react";
import "./DataItem.css"

import { useDrag } from 'react-dnd'

const DataItem = (props) => {

  // Thats what is called a hook! ;)
  const [, drag] = useDrag({ item: { type: "DataItem" } });

  return (
      <div ref={drag} className="data-item">
        {props.value}
      </div>
  )
};

export default DataItem
