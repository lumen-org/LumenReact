import { v4 as uuidv4 } from "uuid";
import { createNewStandardSpecification } from "../standardspecifications/actions";

import { CHANGE_ACTIVE_SPECIFICATIONS, CREATE_NEW_SPECIFICATION } from "./constants"
import {
  STANDARD_SPECIFICATION
} from "./specificationTypes"

// import {
//   CREATE_NEW_SPECIFICATION,
//   SELECT_SPECIFICATION,
//   ADD_TO_SPECIFICATION,
//   DELETE_FROM_SPECIFICATION,
//   UPDATE_FACET_STATE,
//   CHANGE_ACTIVE_SPECIFICATIONS,
//   RESET_SPECIFICATIONS,
// } from "./constants";
// import { v4 as uuidv4 } from "uuid";

// /*
// maintains all existing specifications and there state
//  */
// const defaultValues = {
//   specification: {
//     X_Axis: new Set([]),
//     Y_Axis: new Set([]),
//     Filter: new Set([]),
//     Detail: new Set([]),
//     Color: new Set([]),
//     Shape: new Set([]),
//     Size: new Set([]),
//   },
//   facets: {
//     Prediction: {
//       model: false,
//       data: false,
//     },
//     "Data Points": {
//       model: false,
//       data: true,
//     },
//     Marginals: {
//       model: false,
//       data: true,
//     },
//     Density: {
//       model: false,
//       data: false,
//     },
//   },
// };

// export const createNewSpecification = (payload) => {
//   // even though the dispatches are run sequential the mapStateToProps
//   // is not updating in time, that's why we need to ensure the order by
//   // making addSpecification a promise
//   return (dispatch) => {
//     dispatch(_createNewSpecification(payload));
//     return new Promise(function (resolve, reject) {
//       resolve();
//     });
//   };
// };

export const createNewSpecification = (specificationType = STANDARD_SPECIFICATION, specificationId = uuidv4(), initValues = null) => {
  return (dispatch) => {
    if (specificationType === STANDARD_SPECIFICATION) {
      dispatch(createNewStandardSpecification(specificationId, initValues))
    }
    dispatch(createSpecification(specificationId, specificationType))
    dispatch(changeActiveSpecification(specificationId))
  }
}

const createSpecification = (specificationId, specificationType) => {
  return {
    type: CREATE_NEW_SPECIFICATION,
    payload: {
      id: specificationId,
      specificationType: specificationType
    }
  }
}

const changeActiveSpecification = (specificationId) => {
  return {
    type: CHANGE_ACTIVE_SPECIFICATIONS,
    payload: {
      id: specificationId
    }
  }
}

// export const _createNewSpecification = (initValues = null, id = uuidv4()) => {
//   return {
//     type: CREATE_NEW_SPECIFICATION,
//     payload: {
//       defaultValues: initValues ? initValues : defaultValues,
//       id: id,
//     },
//   };
// };

// export function addToSpecification(payload) {
//   return {
//     type: ADD_TO_SPECIFICATION,
//     payload,
//   };
// }

// export function deleteFromSpecification(payload) {
//   return {
//     type: DELETE_FROM_SPECIFICATION,
//     payload,
//   };
// }

// export function updateFacetState(payload) {
//   return {
//     type: UPDATE_FACET_STATE,
//     payload,
//   };
// }

// export function resetSpecifications() {
//   return {
//     type: RESET_SPECIFICATIONS,
//   };
// }
