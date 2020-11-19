import { EMPTY } from "../constants";
import { CREATE_NEW_SPECIFICATION } from "./constants";

import update from "immutability-helper";

export const defaultState = {
  specifications: {
    byId: {},
    allIds: []
  },
  activeSpecificationId: EMPTY
}

const specifications = (state = defaultState, action) => {
  switch (action.type) {
    case CREATE_NEW_SPECIFICATION:
      const { specificationType, id } = action.payload
      if (!state.specifications.allIds.includes(id)) {
        return {
          ...state,
          specifications: update(state.specifications, {
            byId: {
              [id]: {
                $set: { specificationType: specificationType, id: id }
              }
            },
            allIds: {
              $push: [id]
            }
          }),
          activeSpecificationId: id,
        };
      }
    default:
      return {
        ...state
      }
  }
}

export default specifications;

// import {
//   CREATE_NEW_SPECIFICATION,
//   REMOVE_SPECIFICATION,
//   ADD_TO_SPECIFICATION,
//   DELETE_FROM_SPECIFICATION,
//   UPDATE_FACET_STATE,
//   RESET_SPECIFICATIONS,
// } from "./constants";

// import update from "immutability-helper";
// import { EMPTY } from "../constants";

// /*
// maintains all existing specifications and there state
//  */
// export const defaultValues = {
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
//       data: false,
//     },
//     Marginals: {
//       model: false,
//       data: false,
//     },
//     Density: {
//       model: false,
//       data: false,
//     },
//   },
// };

// export const defaultState = {
//   currentId: EMPTY,
//   lastCreatedId: EMPTY,
//   specifications: {
//     byId: {},
//     allIds: [],
//   },
// };

// const specifications = (state = defaultState, action) => {
//   let specifications = Object.assign({}, state.specifications);
//   switch (action.type) {
//     case CREATE_NEW_SPECIFICATION:
//       const { defaultValues, id } = action.payload;
//       if (!specifications.allIds.includes(id)) {
//         specifications.byId[id] = { ...defaultValues, id: id };
//         specifications.allIds = [...specifications.allIds, id];
//         return {
//           ...state,
//           currentId: id,
//           lastCreatedId: id,
//           specifications,
//         };
//       }
//       return state;

//     case REMOVE_SPECIFICATION:
//       if (specifications.allIds.includes(action.payload.id)) {
//         specifications.byId.delete(action.payload.key);
//         specifications.allIds = specifications.allIds.filter((id) => {
//           return id !== action.payload.id;
//         });
//         return {
//           ...state,
//           specifications,
//         };
//       }
//       return state;

//     case ADD_TO_SPECIFICATION:
//       return {
//         ...state,
//         // specifications: specifications
//         specifications: update(specifications, {
//           byId: {
//             [action.payload.id.toString()]: {
//               specification: {
//                 [action.payload.key]: { $add: [action.payload.value] },
//               },
//             },
//           },
//         }),
//       };

//     case DELETE_FROM_SPECIFICATION:
//       return {
//         ...state,
//         specifications: update(specifications, {
//           byId: {
//             [action.payload.id]: {
//               specification: {
//                 [action.payload.key]: { $remove: [action.payload.value] },
//               },
//             },
//           },
//         }),
//       };

//     case UPDATE_FACET_STATE:
//       return {
//         ...state,
//         specifications: update(specifications, {
//           byId: {
//             [action.payload.id]: {
//               facets: {
//                 [action.payload.key]: {
//                   $merge: {
//                     [action.payload.type]: !specifications.byId[
//                       action.payload.id
//                     ].facets[action.payload.key][action.payload.type],
//                   },
//                 },
//               },
//             },
//           },
//         }),
//       };

//     default:
//       return state;
//   }
// };

