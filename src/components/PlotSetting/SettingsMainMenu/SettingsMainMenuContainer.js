import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import SettingsMainMenu from "./SettingsMainMenu";

class SettingsMainMenuContainer extends React.Component {
    render() {
        return (
            <SettingsMainMenu settings={this.props.settings} />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        settings: state.settings
    };
};

export default connect(mapStateToProps, null)(SettingsMainMenuContainer);
