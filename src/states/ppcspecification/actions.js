import {
  ADD_TO_PPC_SPECIFICATION,
  CHANGE_PPC_SPECIFICATION,
  CREATE_NEW_PPC_SPECIFICATION, DELETE_FROM_PPC_SPECIFICATION,
  REMOVE_PPC_SPECIFICATION
} from "./constants";

const defaultValues = {
  statistic: "median",
  k: 2,
  n: 20,
  selectedFields: {
    Dimensions: new Set(),
  },
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

export const _changeSpecificationValue = (id, values) => {
  return {
    type: CHANGE_PPC_SPECIFICATION,
    payload: {
      id: id,
      values: values,
    }
  }
}

export const changeSpecificationValue = (id, values, modelname) => {
  return (dispatch, getState) => {
    dispatch(_changeSpecificationValue(id, values));
  }
}

export const addToPPCSpecification = (id, key, value) => {
  return {
    type: ADD_TO_PPC_SPECIFICATION,
    payload: {
      id: id,
      key: key,
      value: value,
    }
  }
}

export const deleteFromPPCSpecification = (id, key, value) => {
  return {
    type: DELETE_FROM_PPC_SPECIFICATION,
    payload: {
      id: id,
      key: key,
      value: value,
    }
  }
}
/*
export const resetMultiSpecification = () => {
  return {
    type: RESET_MULTI_SPECIFICATION
  }
}*/