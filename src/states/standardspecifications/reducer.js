import {
    ADD_TO_STANDARD_SPECIFICATION,
    CREATE_NEW_STANDARD_SPECIFICATION,
    DELETE_FROM_STANDARD_SPECIFICATION,
    REMOVE_STANDARD_SPECIFICATION,
    UPDATE_FACET_STATE
} from "./constants"

import update from "immutability-helper";

export const defaultState = {
    standardSpecifications: {}
}

const standardspecifications = (state = defaultState, action) => {
    switch (action.type) {
        case CREATE_NEW_STANDARD_SPECIFICATION:
            const { id, defaultState } = action.payload
            return {
                ...state,
                standardSpecifications: update(state.standardSpecifications, {
                    [id]: { $set: defaultState }
                }
                )
            }
        case REMOVE_STANDARD_SPECIFICATION:
            return {
                ...state,
                standardSpecifications: update(state.standardSpecifications, {
                    $unset: [action.payload.id]
                })
            }
        case ADD_TO_STANDARD_SPECIFICATION:
            return {
                ...state,
                standardSpecifications: update(state.standardSpecifications, {
                    [action.payload.id.toString()]: {
                        [action.payload.key]: { $add: [action.payload.value] }
                    }
                })
            }
        case DELETE_FROM_STANDARD_SPECIFICATION:
            return {
                ...state,
                standardSpecifications: update(state.standardSpecifications, {
                    [action.payload.id]: { $remove: [action.payload.value] }
                })
            }
        case UPDATE_FACET_STATE:

            return {
                ...state,
                specifications: update(state.standardSpecifications, {
                    [action.payload.id]: {
                        facets: {
                            [action.payload.key]: {
                                $merge: {
                                    [action.payload.type]: !state.standardSpecifications.byId[
                                        action.payload.id
                                    ].facets[action.payload.key][action.payload.type],
                                },
                            },
                        },
                    },
                }),
            };
        default:
            return state
    }
}

export default standardspecifications;