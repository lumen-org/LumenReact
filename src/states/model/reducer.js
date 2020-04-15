import {
  ADD_TO_SCHEMA,
  DELETE_FROM_SCHEMA
} from "../../constants/modelActionTypes";

export const defaultState = {
  specifications: {
    "X-Axis": new Set([]),
    "Y-Axis": new Set([]),
    Filter: new Set([]),
    Detail: new Set([]),
    Color: new Set([]),
    Shape: new Set([]),
    Size: new Set([])
  }
};

/*
das ist eigentlich unmögliches verhalten. Ich kann doch nicht jedes mal wenn ich irgendwas ändere ne neue kopie erzeugen?
Zumindest wird mir dieser Eindruck vermittelt... KOTZ
 */
const modelReducer = (state = defaultState, action) => {
  let specifications = Object.assign({}, state.specifications);
  switch (action.type) {
    case ADD_TO_SCHEMA:
      specifications[action.payload.key].add(action.payload.value);
      return { ...state, specifications };
    case DELETE_FROM_SCHEMA:
      specifications[action.payload.key].delete(action.payload.value);
      return { ...state, specifications };
    default:
      return state;

  }
};



export default modelReducer;
