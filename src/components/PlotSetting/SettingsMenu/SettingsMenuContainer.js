import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import SettingsMenu from "./SettingsMenu";

class SettingsMenuContainer extends React.Component {
  static propTypes = {

  };

  render() {
    return ( <div>
      {
        Object.keys(this.props.settings).map((key) => {
          return (<SettingsMenu settings={this.props.settings[key]} settingKey={key} />)
        })
      }
    </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    settings: state.settings
  };
};

export default connect(mapStateToProps, null)(SettingsMenuContainer);
