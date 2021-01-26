import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import PlotSettingMenu from "./PlotSettingMenu";

class PlotSettingMenuContainer extends React.Component {
  static propTypes = {
  };

  render() {
    return (
      <PlotSettingMenu />
    );
  }
}

const mapStateToProps = (state) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlotSettingMenuContainer);
