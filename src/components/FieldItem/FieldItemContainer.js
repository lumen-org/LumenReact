import { useDrag } from "react-dnd";
import React, { useState } from "react";
import FieldItem from "./FieldItem";
import { useDispatch } from "react-redux";
import { addModel, deleteModel } from "../../states/model/actions";
import { FIELD_ITEM } from "../../constants/dragAndDropTypes";
import FieldItemModal from "../FieldItemModal/FieldItemModal";

function FieldItemContainer({
                              value,
                              fieldName = "",
                              type = FIELD_ITEM
                            }) {
  const item = { type: type };

  function dispatchListItem() {
    dispatch(deleteModel({ "key": fieldName, "value": value }));
  }

  const [isOpen, setIsOpen] = useState(false);
  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  // to hook into model actions
  const dispatch = useDispatch();

  // Thats what is called a hook! ;)
  // which sadly requires the hook into redux above :/
  const [, drag] = useDrag({
    item,
    end(item, monitor) {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        if (fieldName) {
          dispatchListItem();
        }
        dispatch(addModel({ "key": dropResult.result, "value": value }));
      } else if (fieldName) {
        dispatchListItem();
      }
    }
  });

  return (
    <div ref={drag}>
      {fieldName ? (
        <FieldItem value={value} handleClose={() => dispatchListItem()} handleClick={handleModal}
                   isOpen={isOpen} handleModal={handleModal}/>
      ) : (
        <FieldItem value={value}/>
      )}
      <FieldItemModal/>
    </div>
  );
}

export default FieldItemContainer;
