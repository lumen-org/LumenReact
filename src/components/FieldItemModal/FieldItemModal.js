import React from "react";
import "./FieldItemModal.css";
import PropTypes from "prop-types";

import Popover from "@material-ui/core/Popover";

class FieldItemModalContainer extends React.Component {
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    handleModalClose: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    anchorEl: PropTypes.object,
  };

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
    }
  }

  render() {
    const { isOpen, handleModalClose, title, anchorEl } = this.props;
    return (
      <Popover
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={isOpen}
        onClose={() => handleModalClose()}
      >
        {title}
      </Popover>
    );
  }
}

export default FieldItemModalContainer;
