import { useDrag } from "react-dnd";
import React from "react";
import FieldItem from "./FieldItem";
import { useDispatch } from "react-redux";
import { addModel, deleteModel } from "../../states/model/actions";
import { FIELD_ITEM } from "../../constants/dragAndDropTypes";

function FieldItemContainer({
  value,
  associated_list_key = "",
  type = FIELD_ITEM
}) {
  const item = { type: type };

  // to hook into model actions
  const dispatch = useDispatch();

  // Thats what is called a hook! ;)
  // which sadly requires the hook into redux above :/
  const [, drag] = useDrag({
    item,
    end(item, monitor) {
      const dropResult = monitor.getDropResult();

      if (item && dropResult) {
        if (associated_list_key) {
          dispatch(deleteModel({ key: dropResult.result, value: value }));
        }
        dispatch(addModel({ key: dropResult.result, value: value }));
      } else if (associated_list_key) {
        dispatch(deleteModel({ key: dropResult.result, value: value }));
      }
    }
  });
  return (
    <div ref={drag}>
      <FieldItem value={value} />
    </div>
  );
}

export default FieldItemContainer;
