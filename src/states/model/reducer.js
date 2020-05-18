import {
  ADD_SPECIFICATION,
  REMOVE_SPECIFICATION,
  SELECT_SPECIFICATION,
  ADD_TO_SCHEMA,
  DELETE_FROM_SCHEMA,
  UPDATE_FACET_STATE,
  CHANGE_ACTIVE_SPECIFICATIONS,
  RESET_SPECIFICATIONS
} from "./constants";

import update from "immutability-helper";
import { selectLastCreatedId } from "./selector";

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
  currentId: -1,
  lastCreatedId: -1,
  specifications: {
    byId: [],
    allIds: []
  }
};

const modelReducer = (state = defaultState, action) => {
  let specifications = Object.assign({}, state.specifications);
  switch (action.type) {
    case ADD_SPECIFICATION:
      if (!specifications.allIds.includes(state.nextId)) {
        specifications.byId[state.nextId] = defaultValues;
        specifications.allIds = [...specifications.allIds, state.nextId];
        return {
          ...state,
          nextId: state.nextId + 1,
          lastCreatedId: state.nextId,
          currentId: state.currentId === -1 ? state.nextId : state.currentId,
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

    case SELECT_SPECIFICATION:
      if (specifications.allIds.includes(action.payload)) {
        return {
          ...state,
          currentId: action.payload
        };
      }
      return state;


    case ADD_TO_SCHEMA:
      return {
        ...state,
        specifications: update(specifications, {
          byId: {
            [state.currentId]: {
              specification: {
                [action.payload.key]: { $add: [action.payload.value] }
              }
            }
          }
        })
      };

    case DELETE_FROM_SCHEMA:
      return {
        ...state,
        specifications: update(specifications, {
          byId: {
            [state.currentId]: {
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
            [state.currentId]: {
              facets: {
                [action.payload.key]: { $merge: { [action.payload.type]: !specifications.byId[state.currentId].facets[action.payload.key][action.payload.type] } }
              }
            }
          }
        })
      };

    case CHANGE_ACTIVE_SPECIFICATIONS:
      if (specifications.allIds.includes(action.payload)) {
        return {
          ...state,
          currentId: action.payload
        };
      }
      return {
        ...state,
        currentId: selectLastCreatedId
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

export default modelReducer;
