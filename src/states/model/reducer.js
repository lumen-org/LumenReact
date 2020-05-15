import {
  ADD_SPECIFICATION,
  REMOVE_SPECIFICATION,
  ADD_TO_SCHEMA,
  DELETE_FROM_SCHEMA,
  UPDATE_FACET_STATE,
  CHANGE_ACTIVE_SPECIFICATIONS,
  RESET_SPECIFICATIONS
} from "./constants";


// specification: {
//   X_Axis: new Set([]),
//     Y_Axis: new Set([]),
//     Filter: new Set([]),
//     Detail: new Set([]),
//     Color: new Set([]),
//     Shape: new Set([]),
//     Size: new Set([]),
// },
// facets: {
//   0: {
//     model: false,
//       data: false,
//   },
//   1: {
//     model: false,
//       data: true,
//   },
//   2: {
//     model: false,
//       data: true,
//   },
//   3: {
//     model: false,
//       data: false,
//   },
// },
export const defaultState = {
  nextId: 0,
  currentId: -1,
  active_id: null,
  specifications: {
    byId: new Map([]),
    allIds: {}
  }
};

const modelReducer = (state = defaultState, action) => {
  let specifications = Object.assign({}, state.specifications.byId);
  // let facets = Object.assign({}, state.facets);
  switch (action.type) {
    case ADD_SPECIFICATION:
      const specification = {
        id: state.nextId,
        specification: {
          X_Axis: new Set([]),
          Y_Axis: new Set([]),
          Filter: new Set([]),
          Detail: new Set([]),
          Color: new Set([]),
          Shape: new Set([]),
          Size: new Set([])
        },
        facets: {
          0: {
            model: false,
            data: false
          },
          1: {
            model: false,
            data: true
          },
          2: {
            model: false,
            data: true
          },
          3: {
            model: false,
            data: false
          }
        }
      };
      return {
        ...state,
        nextId: state.nextId + 1,
        byId: specifications[state.nextId].add(specification),
        allIds: [...state.allIds, state.nextId]
      };

    case REMOVE_SPECIFICATION:
      if (specifications.has(action.payload.id)) {
        return {
          ...state,
          byId: specifications.byId.delete(action.payload.key),
          allIds: specifications.allIds.filter((id) => {
            return id !== action.payload.id;
          })
        };
      }
      return state;

    // case ADD_TO_SCHEMA:
    //   specifications[action.payload.key].add(action.payload.value);
    //   return { ...state, specifications };
    //
    // case DELETE_FROM_SCHEMA:
    //   specifications[action.payload.key].delete(action.payload.value);
    //   return { ...state, specifications };
    //
    // case UPDATE_FACET_STATE:
    //   facets[action.payload.key][action.payload.type] = !facets[
    //     action.payload.key
    //     ][action.payload.type];
    //   return { ...state, facets };
    //
    // case CHANGE_ACTIVE_SPECIFICATIONS:
    //   return {
    //     ...state,
    //     specifications: action.payload
    //   };
    //
    // case RESET_SPECIFICATIONS:
    //   return {
    //     ...state,
    //     specifications: {
    //       X_Axis: new Set([]),
    //       Y_Axis: new Set([]),
    //       Filter: new Set([]),
    //       Detail: new Set([]),
    //       Color: new Set([]),
    //       Shape: new Set([]),
    //       Size: new Set([])
    //     }
    //   };
    default:
      return state;
  }
};

export default modelReducer;
