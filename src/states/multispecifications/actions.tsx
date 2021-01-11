import { ADD_TO_MULTI_SPECIFICATION, CREATE_NEW_MULTI_SPECIFICATION, DELETE_FROM_MULTI_SPECIFICATION, REMOVE_MULTI_SPECIFICATION, RESET_MULTI_SPECIFICATION } from "./constants"



const defaultValues = {
    specification: {
        X_Axis: new Set([]),
        Y_Axis: new Set([]),
        Color: new Set([]),
    }
}

type createNewSpecProps = {
    id: any,
    initValues: any
}

export const createNewMultiSpecification = ({id, initValues = {}}: createNewSpecProps) => {
    return {
        type: CREATE_NEW_MULTI_SPECIFICATION,
        payload: {
            id,
            defaultValues: initValues ? initValues : defaultValues
        }
    }
}

export const removeMultiSpecification = (id: number) => {
    return {
        type: REMOVE_MULTI_SPECIFICATION,
        payload: {
            id
        }
    }
}

export const addToMultiSpecification = (payload: object) => {
    return {
        type: ADD_TO_MULTI_SPECIFICATION,
        payload
    }
}

export const deleteFromMultiSpecification = (payload: object) => {
    return  {
        type: DELETE_FROM_MULTI_SPECIFICATION,
        payload: {
            payload
        }
    }
}

export const reesetMultiSpecification = () => {
    return {
        type: RESET_MULTI_SPECIFICATION
    }
}