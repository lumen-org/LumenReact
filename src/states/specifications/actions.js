import {
  ADD_SPECIFICATION,
  SELECT_SPECIFICATION,
  ADD_TO_SPECIFICATION,
  DELETE_FROM_SPECIFICATION,
  UPDATE_FACET_STATE,
  CHANGE_ACTIVE_SPECIFICATIONS,
  RESET_SPECIFICATIONS
} from "./constants";


export const createNewSpecification = (payload) => {
  // even though the dispatches are run sequential the mapStateToProps
  // is not updating in time, that's why we need to ensure the order by
  // making addSpecification a promise
  return dispatch => {
    dispatch(addSpecification(payload));
    return new Promise(function(resolve, reject) {
      resolve();
    });
  }
};

export const addSpecification = (payload) => {
  return {
      type: ADD_SPECIFICATION,
      payload
    };
};

export function selectSpecification(payload) {
  return {
    type: SELECT_SPECIFICATION,
    payload
  };
}

export function addModel(payload) {
  return {
    type: ADD_TO_SPECIFICATION,
    payload
  };
}

export function deleteModel(payload) {
  return {
    type: DELETE_FROM_SPECIFICATION,
    payload
  };
}

export function updateFacetState(payload) {
  return {
    type: UPDATE_FACET_STATE,
    payload
  };
}

export const changeActiveSpecifications = (payload) => {
  return {
    type: CHANGE_ACTIVE_SPECIFICATIONS,
    payload
  };
};

export function resetSpecifications() {
  return {
    type: RESET_SPECIFICATIONS
  };
}

export function resetSchema() {
  return {};
}
