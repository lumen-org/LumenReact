import {
  ADD_TO_SCHEMA,
  DELETE_FROM_SCHEMA
} from "../../constants/modelActionTypes";

import {
  CHANGE_FACETS,
} from "../../constants/facetActionTypes";

export const defaultState = {
  specifications: {
    "X-Axis": new Set([]),
    "Y-Axis": new Set([]),
    Filter: new Set([]),
    Detail: new Set([]),
    Color: new Set([]),
    Shape: new Set([]),
    Size: new Set([])
  },
  facets:{
    0 : {
      "model": false,
      "data": false,
    },
    1 : {
      "model": false,
      "data": true,
    },
    2 : {
      "model": false,
      "data": true,
    },
    3: {
      "model": false,
      "data": false,
    }

  }
};

/*
das ist eigentlich unmögliches verhalten. Ich kann doch nicht jedes mal wenn ich irgendwas ändere ne neue kopie erzeugen?
Zumindest wird mir dieser Eindruck vermittelt... KOTZ
 */
const modelReducer = (state = defaultState, action) => {
  let specifications = Object.assign({}, state.specifications);
  let facets = Object.assign({}, state.facets);
  switch (action.type) {
    case ADD_TO_SCHEMA:
      specifications[action.payload.key].add(action.payload.value);
      return { ...state, specifications };
    case DELETE_FROM_SCHEMA:
      specifications[action.payload.key].delete(action.payload.value);
      return { ...state, specifications };
    case CHANGE_FACETS:
      facets[action.payload.key][action.payload.type] = !facets[action.payload.key][action.payload.type];
      return { ...state, facets};
    default:
      return state;

  }
};



export default modelReducer;
