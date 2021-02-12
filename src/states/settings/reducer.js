import { UPDATE_SETTINGS } from "./constants"
import { defaultSettings } from "./defaultSettings"

import update from "immutability-helper";

const settings = (state = defaultSettings, action) => {
    switch (action.type) {
        case UPDATE_SETTINGS:
            const { settingKey, subSettingKey, valueKey, value } = action.payload
            return {
                ...state,
                [settingKey]: update(state[settingKey], {
                        "subSettings": {
                            [subSettingKey]: {
                                "settings": {
                                    [valueKey]: {
                                        $merge: {
                                            "value": value
                                        }
                                    }
                                }
                            }
                        }
                })
            }
        default:
            return {
                ...state
            }
    }
}

export default settings;