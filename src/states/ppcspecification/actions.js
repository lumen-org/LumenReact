import { CREATE_NEW_PPC_SPECIFICATION, REMOVE_PPC_SPECIFICATION} from "./constants";


const defaultValues = {
  specification: {
    "Number of Samples": new Set([]),
    "Statistics": new Set([]),
  }
}

export const createNewPPCSpecification = ({ id, initValues = null }) => {
  return {
    type: CREATE_NEW_PPC_SPECIFICATION,
    payload: {
      id: id,
      defaultValues: initValues ? initValues : defaultValues
    }
  }
}

export const removePPCSpecification = (id) => {
  return {
    type: REMOVE_PPC_SPECIFICATION,
    payload: {
      id: id,
    }
  }
}

/*
export const addToMultiSpecification = (payload: object) => {
  return {
    type: ADD_TO_MULTI_SPECIFICATION,
    payload
  }
}

export const deleteFromMultiSpecification = (payload: any) => {
  return {
    type: DELETE_FROM_MULTI_SPECIFICATION,
    payload
  }
}

export const resetMultiSpecification = () => {
  return {
    type: RESET_MULTI_SPECIFICATION
  }
}

 */