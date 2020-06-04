import {
  CREATE_NEW_SPECIFICATION,
  REMOVE_SPECIFICATION,
  ADD_TO_SPECIFICATION,
  DELETE_FROM_SPECIFICATION,
  UPDATE_FACET_STATE,
  RESET_SPECIFICATIONS
} from "./constants";

import update from "immutability-helper";


/*
maintains all existing specifications and there state
 */
export const defaultValues = {
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

export const defaultState = {
  nextId: 0,
  lastCreatedId: -1,
  specifications: {
    byId: {},
    allIds: []
  }
};

const specifications = (state = defaultState, action) => {
  let specifications = Object.assign({}, state.specifications);
  switch (action.type) {
    case CREATE_NEW_SPECIFICATION:
      if (!specifications.allIds.includes(state.nextId)) {
        specifications.byId[state.nextId] = { ...defaultValues, id: state.nextId};
        specifications.allIds = [...specifications.allIds, state.nextId];
        return {
          ...state,
          nextId: state.nextId + 1,
          lastCreatedId: state.nextId,
          specifications
        };
      }
      return state;

    case REMOVE_SPECIFICATION:
      if (specifications.allIds.includes(action.payload.id)) {
        specifications.byId.delete(action.payload.key);
        specifications.allIds = specifications.allIds.filter((id) => {
          return id !== action.payload.id;
        });
        return {
          ...state,
          specifications
        };
      }
      return state;

    case ADD_TO_SPECIFICATION:
      // specifications.byId.get(action.payload.id).specification[action.payload.key].add(action.payload.value);
      return {
        ...state,
        // specifications: specifications
        specifications: update(specifications, {
          byId: {
            [action.payload.id.toString()]: {
              specification: {
                [action.payload.key]: { $add: [action.payload.value] }
              }
            }
          }
        })
      };

    case DELETE_FROM_SPECIFICATION:
      return {
        ...state,
        specifications: update(specifications, {
          byId: {
            [action.payload.id]: {
              specification: {
                [action.payload.key]: { $remove: [action.payload.value] }
              }
            }
          }
        })
      };

    case UPDATE_FACET_STATE:
      return {
        ...state,
        specifications: update(specifications, {
          byId: {
            [action.payload.id]: {
              facets: {
                [action.payload.key]: { $merge: { [action.payload.type]: !specifications.byId[action.payload.id].facets[action.payload.key][action.payload.type] } }
              }
            }
          }
        })
      };

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

export default specifications;
