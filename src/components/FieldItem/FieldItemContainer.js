import { useDrag } from "react-dnd";
import React, { useState } from "react";
import FieldItem from "./FieldItem";
import { useDispatch, useSelector } from "react-redux";
import {
  addToStandardSpecification,
  deleteFromStandardSpecification,
} from "../../states/standardspecifications/actions";
import { FIELD_ITEM } from "../../constants/dragAndDropTypes";
import FieldItemModal from "../FieldItemModal";
import { selectActiveSpecificationId } from "../../states/visualizations/selector";
import { getSpecType } from "../../states/specifications/selector";
import { STANDARD_SPECIFICATION,DMP_SPECIFICATION } from "../../states/specifications/specificationTypes";

function FieldItemContainer({ value, fieldName = "", type = FIELD_ITEM }) {
  const item = { type: type };
  const specificationId = useSelector(selectActiveSpecificationId);
  const specificationType = useSelector(state => getSpecType(state, specificationId))

  function dispatchListItem() {
    if (specificationType === STANDARD_SPECIFICATION) {
      dispatch(
        deleteFromStandardSpecification({
          id: specificationId,
          key: fieldName,
          value: value,
        })
      );
    }
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
        if (specificationType === STANDARD_SPECIFICATION) {
          if (fieldName) {
            dispatchListItem();
          }
          dispatch(
            addToStandardSpecification({
              id: specificationId,
              key: dropResult.result,
              value: value,
            })
          );
        } else if (fieldName) {
          dispatchListItem();
        }
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
