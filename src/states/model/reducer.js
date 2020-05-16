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
    byId: new Map([]),
    allIds: []
  }
};

const modelReducer = (state = defaultState, action) => {
  let specifications = Object.assign({}, state.specifications);
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

      specifications.byId.set(state.nextId, specification);
      specifications.allIds = [...specifications.allIds, state.nextId];
      return {
        ...state,
        nextId: state.nextId + 1,
        lastCreatedId: state.nextId,
        currentId: state.currentId === -1 ? state.nextId : state.currentId,
        specifications,
      };

    case REMOVE_SPECIFICATION:
      if (specifications.byId.has(action.payload.id)) {
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
      if (specifications.byId.has(action.payload)) {
        return {
          ...state,
          currentId: action.payload
        };
      }
      return state;


    case ADD_TO_SCHEMA:
      specifications.byId.get(state.currentId).specification[action.payload.key].add(action.payload.value);
      return { ...state, specifications };

    case DELETE_FROM_SCHEMA:
      specifications.byId.get(state.currentId).specification[action.payload.key].delete(action.payload.value);
      return { ...state, specifications };
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
