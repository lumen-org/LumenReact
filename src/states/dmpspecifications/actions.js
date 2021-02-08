import {
    CREATE_NEW_DMP_SPECIFICATION,
    REMOVE_DMP_SPECIFICATION,
    ADD_TO_DMP_SPECIFICATION,
    RESET_DMP_SPECIFICATIONS,
    DELETE_FROM_DMP_SPECIFICATION
} from "./constants"

/*
maintains all existing specifications and there state
 */
const defaultValues = {
    specification: {
        model1:{
            modelid:"",
        },
        model2:{
            modelid:"",
        },
        X_Axis: new Set([]),
        Y_Axis: new Set([]),
        Color: new Set([]),
        Shape: new Set([]),
    }
};

export const createNewDMPSpecification = (id, initValues = null) => {
    return {
        type: CREATE_NEW_DMP_SPECIFICATION,
        payload: {
            id,
            defaultValues: initValues ? initValues : defaultValues
        }
    }
}

export const removeDMPSpecification = (id) => {
    return {
        type: REMOVE_DMP_SPECIFICATION,
        payload: {
            id
        }
    }
}

export const addToDMPSpecification = (payload) => {
    return {
        type: ADD_TO_DMP_SPECIFICATION,
        payload
    }
}

export const deleteFromDMPSpecification = (payload) => {
    return {
        type: DELETE_FROM_DMP_SPECIFICATION,
        payload
    }
}


export const resetSpecifications = () => {
    return {
        type: RESET_DMP_SPECIFICATIONS
    }
}