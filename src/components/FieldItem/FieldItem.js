import React, { useRef } from "react";
import PropTypes from "prop-types";

import "./FieldItem.scss";
import CloseButton from "../Button/CloseButton";
import FieldItemModal from "../FieldItemModal";

class FieldItem extends React.Component {
  static propTypes = {
    value: PropTypes.string,
    handleFieldItemClose: PropTypes.func,
    handleModalOpen: PropTypes.func,
  };

  render() {
    const { value, handleFieldItemClose, handleModalOpen } = this.props;
    return (
      <div className="field-item-container draggable">
        {handleFieldItemClose && (
          <CloseButton handleClose={handleFieldItemClose} />
        )}
        <div
          className={"field-item"}
          onClick={(event) => handleModalOpen(event.currentTarget)}
        >
          {value}
        </div>
      </div>
    );
  }
}

export default FieldItem;
