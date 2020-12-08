import {
    ADD_TO_STANDARD_SPECIFICATION,
    CREATE_NEW_STANDARD_SPECIFICATION,
    DELETE_FROM_STANDARD_SPECIFICATION,
    REMOVE_STANDARD_SPECIFICATION,
    RESET_STANDARD_SPECIFICATIONS,
    UPDATE_FACET_STATE
} from "./constants"

import update from "immutability-helper";

export const defaultState = {
    standardspecifications: {}
}

const standardspecifications = (state = defaultState, action) => {
    switch (action.type) {
        case CREATE_NEW_STANDARD_SPECIFICATION:
            const { id, defaultValues } = action.payload
            return {
                ...state,
                standardspecifications: update(state.standardspecifications, {
                    [id]: { $set: defaultValues }
                }
                )
            }
        case REMOVE_STANDARD_SPECIFICATION:
            return {
                ...state,
                standardspecifications: update(state.standardspecifications, {
                    $unset: [action.payload.id]
                })
            }
        case ADD_TO_STANDARD_SPECIFICATION:
            return {
                ...state,
                standardspecifications: update(state.standardspecifications, {
                    [action.payload.id]: {
                        specification: {
                            [action.payload.key]: { $add: [action.payload.value] }
                        }
                    }
                })
            }
        case DELETE_FROM_STANDARD_SPECIFICATION:
            return {
                ...state,
                standardspecifications: update(state.standardspecifications, {
                    [action.payload.id]: {
                        specification: {
                            [action.payload.key]: { $remove: [action.payload.value] },
                        },
                    },
                })
            }
        case UPDATE_FACET_STATE:

            return {
                ...state,
                standardspecifications: update(state.standardspecifications, {
                    [action.payload.id]: {
                        facets: {
                            [action.payload.key]: {
                                $merge: {
                                    [action.payload.type]: !state.standardspecifications[
                                        action.payload.id
                                    ].facets[action.payload.key][action.payload.type],
                                },
                            },
                        },
                    },
                }),
            };
            case RESET_STANDARD_SPECIFICATIONS:
                return defaultState
        default:
            return state
    }
}

export default standardspecifications;