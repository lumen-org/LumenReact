import { useDrag } from "react-dnd";
import React, { useState } from "react";
import FieldItem from "./FieldItem";
import { useDispatch } from "react-redux";
import { add_model_to_list, delete_model_from_list } from "../../states/model/modelActions";
import { FIELD_ITEM } from "../../constants/dragAndDropTypes";
import FieldItemModal from "../FieldItemModal/FieldItemModal";

function FieldItemContainer({ value, associated_list_key = "", type = FIELD_ITEM }) {
  function dispatch_list_item() {
    dispatch(delete_model_from_list({ "key": associated_list_key, "value": value }));
  }

  const [isOpen, setIsOpen] = useState(false);
  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  const item = { type: type };

  // to hook into model actions
  const dispatch = useDispatch();
  const input_dom = (<h6>PeterPan</h6>);

  // Thats what is called a hook! ;)
  // which sadly requires the hook into redux above :/
  const [, drag] = useDrag({
    item,
    end(item, monitor) {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        console.log(dropResult);
        if (associated_list_key) {
          dispatch(delete_model_from_list({ "key": associated_list_key, "value": value }));
        }
        dispatch(add_model_to_list({ "key": dropResult.result, "value": value }));
      } else if (associated_list_key) {
        dispatch(delete_model_from_list({ "key": associated_list_key, "value": value }));
      }
    }
  });
  return (
    <div ref={drag}>
      {associated_list_key ? (
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
