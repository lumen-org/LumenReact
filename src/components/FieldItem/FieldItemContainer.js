import { useDrag } from "react-dnd";
import React, { useState } from "react";
import FieldItem from "./FieldItem";
import { useDispatch } from "react-redux";
import { add_model_to_list, delete_model_from_list } from "../../states/model/modelActions";
import { FIELD_ITEM } from "../../constants/dragAndDropTypes";
import FieldItemModal from "../FieldItemModal/FieldItemModal";

function FieldItemContainer({ value, associated_list_key: fieldName = "", type = FIELD_ITEM }) {

  function dispatch_list_item() {
    dispatch(delete_model_from_list({ "key": fieldName, "value": value }));
  }

  const [isOpen, setIsOpen] = useState(false);
  const handleModal = () => {
    setIsOpen(!isOpen);
  };

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
        if (fieldName) {
          dispatch(delete_model_from_list({ "key": fieldName, "value": value }));
        }
        dispatch(add_model_to_list({ "key": dropResult.result, "value": value }));
      } else if (fieldName) {
        dispatch(delete_model_from_list({ "key": fieldName, "value": value }));
      }
    }
  });

  return (
    <div ref={drag}>
      {fieldName ? (
        <FieldItem value={value} handleClose={() => dispatch_list_item()} handleClick={handleModal}
                   isOpen={isOpen} handleModal={handleModal}/>
      ) : (
        <FieldItem value={value}/>
      )}
      <FieldItemModal/>
    </div>
  );
}


export default FieldItemContainer;
