import {
    ADD_TO_DMP_SPECIFICATION,
    CREATE_NEW_DMP_SPECIFICATION,
    DELETE_FROM_DMP_SPECIFICATION,
    REMOVE_DMP_SPECIFICATION,
    RESET_DMP_SPECIFICATIONS,
} from "./constants"

import update from "immutability-helper";

export const defaultState = {
    DMPspecifications: {}
}

const DMPspecifications = (state = defaultState, action) => {
    switch (action.type) {
        case CREATE_NEW_DMP_SPECIFICATION:
            const { id, defaultValues } = action.payload
            return {
                ...state,
                DMPspecifications: update(state.DMPspecifications, {
                    [id]: { $set: defaultValues }
                }
                )
            }
        case REMOVE_DMP_SPECIFICATION:
            return {
                ...state,
                DMPspecifications: update(state.DMPspecifications, {
                    $unset: [action.payload.id]
                })
            }
        case ADD_TO_DMP_SPECIFICATION:
            return {
                ...state,
                DMPspecifications: update(state.DMPspecifications, {
                    [action.payload.id]: {
                        specification: {
                            [action.payload.key]: { $add: [action.payload.value] }
                        }
                    }
                })
            }
        case DELETE_FROM_DMP_SPECIFICATION:
            return {
                ...state,
                DMPspecifications: update(state.DMPspecifications, {
                    [action.payload.id]: {
                        specification: {
                            [action.payload.key]: { $remove: [action.payload.value] },
                        },
                    },
                })
            }
        
            case RESET_DMP_SPECIFICATIONS:
                return defaultState
        default:
            return state
    }
}

export default DMPspecifications;