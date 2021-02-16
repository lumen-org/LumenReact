import React from "react";
import SettingsMenu from "./SettingsMenu";

const SettingsMenuContainer = ({settings, settingsKey}) => {
    return (
    <SettingsMenu settings={settings} settingKey={settingsKey} />
    );
}

export default SettingsMenuContainer