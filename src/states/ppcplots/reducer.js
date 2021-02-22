import update from "immutability-helper";
import { ADD_DATA_TO_PPC_PLOT, CHANGE_PPC_PLOT, CREATE_NEW_PPC_PLOT, DELETE_PPC_PLOT } from "./constants";

export const defaultState = {
  ppcplots: {}
}

const ppcplots = (state = defaultState, action) => {
  switch (action.type) {
    case CREATE_NEW_PPC_PLOT: {
      const id = action.payload.id;
      console.log(id);
      return {
        ...state,
        ppcplots: update(state.ppcplots, {
          [id]: {
            $set: {
              loading: false,
              layout: { bargap: 0.05},
              /*data*/}
          }
        })
      }}
    case DELETE_PPC_PLOT: {
      const { id } = action.payload.id;
      return {
        ...state,
        ppcplots: update(state.ppcplots, {
          $unset: [id],
        }),
      }
    }

    case  ADD_DATA_TO_PPC_PLOT: {
      const {id, results} = action.payload;
      return {
        ...state,
        ppcplots: update(state.ppcplots, {
          [id]: {$merge: results}
        })
      }

    }
    case CHANGE_PPC_PLOT: {
      const {id, values} = action.payload;
      return {
        ...state,
        ppcplots: update(state.ppcplots, {
          [id]: {$merge: values}
        })
      }
    }
    default:
      return state;
  }
}

export default ppcplots;