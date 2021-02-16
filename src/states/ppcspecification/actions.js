import {
  ADD_TO_PPC_SPECIFICATION,
  CHANGE_PPC_SPECIFICATION,
  CREATE_NEW_PPC_SPECIFICATION,
  REMOVE_PPC_SPECIFICATION
} from "./constants";
import { fetchPPCData } from "../../utils/fetch";
import { getParameter } from "./selector";
import { fetchPPCPlotData } from "../ppcplots/actions";

const defaultValues = {
  statistic: "median",
  k: 2,
  n: 2,
  selectedFields: new Set(),
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

export const addToPPCSpecification = (id, values) => {
  return {
    type: ADD_TO_PPC_SPECIFICATION,
    payload: {
      id: id,
      values: values,
    }
  }
}
/*
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
}*/