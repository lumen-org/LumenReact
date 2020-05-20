import { CREATE_NEW_SCHEME } from "./constants";

/*
maintains a list of all schemes
 */
export const defaultState = {
  nextId: 0,
  lastCreatedId: -1,
  schemes: {
    byId: [],
    allIds: []
  }
};

const schemes = (state = defaultState, action) => {
  switch (action.type) {
    case CREATE_NEW_SCHEME:
      return {
        schemes: {
          byId: [...state.schemes.byId, { ...action.payload, id: state.nextId }],
          allIds: [...state.schemes.allIds, state.nextId]
        },
        nextId: state.nextId + 1,
        lastCreatedId: state.nextId
      };
    default:
      return state;
  }
};

export default schemes;