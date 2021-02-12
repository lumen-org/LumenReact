import React, { Component } from "react"
import { connect } from "react-redux";
import { updateSettings } from "../../../states/settings/actions";

import SubSettingsGenerator from "./SubSettingsGenerator";

class SubSettingsGeneratorContainer extends Component {

    updateSetting = ({valueKey, value}) => {
        return this.props.updateSettings({
            settingKey: this.props.settingKey, 
            subSettingKey: this.props.subSettingKey, 
            valueKey, 
            value})
    }

    render() {
        return (<SubSettingsGenerator
        settings={this.props.settings}
        title={this.props.title}
        updateSetting={this.updateSetting}/>)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateSettings: (props) => dispatch(updateSettings(props))
    }
}

export default connect(null, mapDispatchToProps)(SubSettingsGeneratorContainer);