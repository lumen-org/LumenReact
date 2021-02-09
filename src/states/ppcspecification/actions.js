import { CHANGE_PPC_SPECIFICATION, CREATE_NEW_PPC_SPECIFICATION, REMOVE_PPC_SPECIFICATION } from "./constants";

const defaultValues = {
    statistic: "median",
      k: 20,
      n: 2,
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

export const changeSpecificationValue = (id, values) => {
  return {
    type: CHANGE_PPC_SPECIFICATION,
    payload: {
      id: id,
      values: values,
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