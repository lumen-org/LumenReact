import { v4 as uuidv4 } from "uuid";
import { createNewStandardSpecification } from "../standardspecifications/actions";
import { createNewMultiSpecification } from "../multispecifications/actions";

import { CHANGE_ACTIVE_SPECIFICATIONS, CREATE_NEW_SPECIFICATION } from "./constants"
import {
  STANDARD_SPECIFICATION,
  MULTI_SPECIFICATION,
  PPC_SPECIFICATION,
} from "./specificationTypes"

export const createNewSpecification = ({specificationType = STANDARD_SPECIFICATION, specificationId = uuidv4(), initValues = null}) => {
  return (dispatch) => {
    if (specificationType === STANDARD_SPECIFICATION) {
      dispatch(createNewStandardSpecification({id: specificationId, initValues}))
    }
    if (specificationType === MULTI_SPECIFICATION) {
      dispatch(createNewMultiSpecification({id: specificationId, initValues}))
    }
    if (specificationType === PPC_SPECIFICATION) {
      dispatch(createNewMultiSpecification({id: specificationId, initValues}))
    }
    dispatch(createSpecification({specificationId, specificationType}))
    dispatch(changeActiveSpecification({specificationId}))
  }
}

export const createSpecification = ({specificationId, specificationType}) => {
  return {
    type: CREATE_NEW_SPECIFICATION,
    payload: {
      id: specificationId,
      specificationType: specificationType
    }
  }
}

export const changeActiveSpecification = ({specificationId}) => {
  return {
    type: CHANGE_ACTIVE_SPECIFICATIONS,
    payload: {
      id: specificationId
    }
  }
}