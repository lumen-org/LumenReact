import React from "react";
import "./FieldItemModal.css";
import PropTypes from "prop-types";
import Popover from "@material-ui/core/Popover";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import "./FieldItemModal.css";
import { MenuList } from "@material-ui/core";
class FieldItemModalContainer extends React.Component {
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    handleModalClose: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    anchorEl: PropTypes.object,
  };
  state = {
    menuOpen: false,
  };
  handleMenuButtonClick = (event) => {
    this.setState({
      menuAnchorEl: event.currentTarget,
      menuOpen: true,
    });
  };
  handleMenuClose = () => {
    this.setState({
      menuOpen: false,
    });
  };

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
    }
  }

  render() {
    const { isOpen, handleModalClose, title, anchorEl } = this.props;
    const { menuAnchorEl, menuOpen } = this.state;
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
        <div className="field-item-modal">
          {title}
          <Button
            className="field-item-menu-button"
            aria-controls="customized-menu"
            aria-haspopup="true"
            variant="outlined"
            color="default"
            size="small"
            onClick={(event) => this.handleMenuButtonClick(event)}
          >
            aggregate to
          </Button>

          <Menu
            id="customized-menu"
            anchorEl={menuAnchorEl}
            keepMounted
            open={menuOpen}
            onClose={this.handleMenuClose}
          >
            <MenuItem onClick={this.handleMenuClose}>Maximal</MenuItem>
          </Menu>
        </div>
      </Popover>
    );
  }
}

export default FieldItemModalContainer;
