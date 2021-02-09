import { INIT_GLOBAL_SETTINGS, UPDATE_GLOBAL_SETTINGS } from "./constants"
import { defaultSettings } from "./defaultSettings"

const globalSettingsReducer = (state = defaultSettings, action) => {
    switch (action.type) {
        case UPDATE_GLOBAL_SETTINGS:
            path, key, value = action.payload(path, key, value)
            return {
                ...state,
                update(path, {
                    $merge: {
                        key: value
                    }
                })
            }
        default:
            return {
                ...state
            }
    }
}