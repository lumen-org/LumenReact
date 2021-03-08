import {
    CREATE_NEW_STANDARD_SPECIFICATION,
    REMOVE_STANDARD_SPECIFICATION,
    ADD_TO_STANDARD_SPECIFICATION,
    RESET_STANDARD_SPECIFICATIONS,
    UPDATE_FACET_STATE,
    DELETE_FROM_STANDARD_SPECIFICATION
} from "./constants"

/*
maintains all existing specifications and there state
 */
const defaultValues = {
    specification: {
        "X-Axis": new Set([]),
        "Y-Axis": new Set([]),
        Filter: new Set([]),
        Detail: new Set([]),
        Color: new Set([]),
        Shape: new Set([]),
        Size: new Set([]),
    },
    facets: {
        Aggregation: {
            model: false,
            data: false,
        },
        Samples: {
            model: false,
            data: true,
        },
        Marginals: {
            model: false,
            data: true,
        },
        Density: {
            model: false,
            data: false,
        },
    },
};

export const createNewStandardSpecification = ({id, initValues = null}) => {
    return {
        type: CREATE_NEW_STANDARD_SPECIFICATION,
        payload: {
            id,
            defaultValues: initValues ? initValues : defaultValues
        }
    }
}

export const removeStandardSpecification = (id) => {
    return {
        type: REMOVE_STANDARD_SPECIFICATION,
        payload: {
            id
        }
    }
}

export const addToStandardSpecification = (payload) => {
    return {
        type: ADD_TO_STANDARD_SPECIFICATION,
        payload
    }
}

export const deleteFromStandardSpecification = (payload) => {
    return {
        type: DELETE_FROM_STANDARD_SPECIFICATION,
        payload
    }
}

export const updateFacetState = (payload) => {
    return {
        type: UPDATE_FACET_STATE,
        payload
    }
}

export const resetSpecifications = () => {
    return {
        type: RESET_STANDARD_SPECIFICATIONS
    }
}