import { ADD_TO_MULTI_SPECIFICATION, CREATE_NEW_MULTI_SPECIFICATION, DELETE_FROM_MULTI_SPECIFICATION, REMOVE_MULTI_SPECIFICATION, RESET_MULTI_SPECIFICATION } from "./constants"
import update from "immutability-helper";

export const defaultState = {
    multispecifications: {}
}

const multispecifications = (state = defaultState, action: any) => {
    switch (action.type) {
        case CREATE_NEW_MULTI_SPECIFICATION:
            const { id, defaultValues } = action.payload
            return {
                ...state,
                multispecifications: update(state.multispecifications, {
                    [id]: { $set: defaultValues }
                }
                )
            }
        case REMOVE_MULTI_SPECIFICATION:
            return {
                ...state,
                multispecifications: update(state.multispecifications, {
                    $unset: [action.payload.id]
                })
            }
        case ADD_TO_MULTI_SPECIFICATION:
            return {
                ...state,
                multispecifications: update(state.multispecifications, {
                    [action.payload.id]: {
                        specification: {
                            [action.payload.key]: { $add: [action.payload.value] }
                        }
                    }
                })
            }
        case DELETE_FROM_MULTI_SPECIFICATION:
            return {
                ...state,
                multispecifications: update(state.multispecifications, {
                    [action.payload.id]: {
                        specification: {
                            [action.payload.key]: { $remove: [action.payload.value] },
                        },
                    },
                })
            }
        case RESET_MULTI_SPECIFICATION:
            return defaultState
        default:
            return state
    }
}

export default multispecifications