import {UPDATE_SETTINGS} from "./constants"

/**
 *  [settingKey] -> subSettings -> [subSettingKey] -> settings -> [key] -> value -> [value]
 */
export const updateSettings = ({settingKey, subSettingKey, valueKey, value}) => {
    return {
        type: UPDATE_SETTINGS,
        payload: {
            settingKey,
            subSettingKey,
            valueKey,
            value
        }
    }
}