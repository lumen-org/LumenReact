import update from "immutability-helper";
import { CREATE_NEW_PPC_PLOT, DELETE_PPC_PLOT } from "./constants";

export const defaultState = {
  ppcplots: {}
}

const ppcplots = (state = defaultState, action) => {
  let id;
  switch (action.type) {
    case CREATE_NEW_PPC_PLOT:
      const id_ = action.payload.id;
      console.log(id_);
      return {
        ...state,
        ppcplots: update(state.ppcplots, {
          [id_]: {
            $set: {
              working: true,
              /*data*/}
          }
        })
      }
    case DELETE_PPC_PLOT:
      ({ id } = action.payload.id);
      return {
        ...state,
        ppcplots: update(state.ppcplots, {
          $unset: [id]
        })
      }
    default:
      return state;
  }
}

export default ppcplots;