import { ADD_TO_SCHEMA, DELETE_FROM_SCHEMA } from "../../constants/modelActionTypes";

export const defaultState = {
  model_specifications: {
    "X-Axis": new Set([]),
    "Y-Axis": new Set([]),
    "Filter": new Set([]),
    "Detail": new Set([]),
    "Color": new Set([]),
    "Shape": new Set([]),
    "Size": new Set([])
  }
};

/*
das ist eigentlich unmögliches verhalten. Ich kann doch nicht jedes mal wenn ich irgendwas ändere ne neue kopie erzeugen?
Zumindest wird mir dieser Eindruck vermittelt... KOTZ
 */
const modelReducer = (state = defaultState, action) => {
  let model_specifications = Object.assign({},state.model_specifications );
  switch (action.type) {
    case ADD_TO_SCHEMA:
      model_specifications[action.payload.key].add(action.payload.value);
      return { ...state, model_specifications };
    case DELETE_FROM_SCHEMA:
      model_specifications[action.payload.key].delete(action.payload.value);
      return { ...state, model_specifications };
    default:
      return state;
  }
};

export default modelReducer;
