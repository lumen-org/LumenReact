import { useDrag } from "react-dnd";
import React, { useState } from "react";
import FieldItem from "./FieldItem";
import { useDispatch, useSelector } from "react-redux";
import {
  addToSpecification,
  deleteFromSpecification,
} from "../../states/specifications/actions";
import { FIELD_ITEM } from "../../constants/dragAndDropTypes";
import FieldItemModal from "../FieldItemModal";
import { selectActiveSpecificationId } from "../../states/visualizations/selector";

function FieldItemContainer({ value, fieldName = "", type = FIELD_ITEM }) {
  const item = { type: type };
  const specificationId = useSelector(selectActiveSpecificationId);

  function dispatchListItem() {
    dispatch(
      deleteFromSpecification({
        id: specificationId,
        key: fieldName,
        value: value,
      })
    );
  }

  const [isModalOpen, setIsOpen] = useState(false);
  const [anchordEl, setAnchordEl] = useState({});

  const handleModalOpen = (event) => {
    setAnchordEl(event);
    setIsOpen(true);
  };
  const handleModalClose = () => {
    setIsOpen(false);
  };
  // to hook into specifications actions
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
        dispatch(
          addToSpecification({
            id: specificationId,
            key: dropResult.result,
            value: value,
          })
        );
      } else if (fieldName) {
        dispatchListItem();
      }
    },
  });

  return (
    <div ref={drag}>
      {fieldName ? (
        <FieldItem
          value={value}
          handleFieldItemClose={() => dispatchListItem()}
          handleModalOpen={handleModalOpen}
        />
      ) : (
        <FieldItem value={value} />
      )}
      {isModalOpen && (
        <FieldItemModal
          isOpen={isModalOpen}
          handleModalClose={handleModalClose}
          title={value}
          anchorEl={anchordEl}
        />
      )}
    </div>
  );
}

export default FieldItemContainer;
