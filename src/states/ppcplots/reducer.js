import update from "immutability-helper";
import {
  ADD_DATA_TO_PPC_PLOT,
  CHANGE_PPC_PLOT,
  CHANGE_PPC_PLOT_LAYOUT,
  CREATE_NEW_PPC_PLOT,
  DELETE_PPC_PLOT
} from "./constants";
import { getData, getLayout, getShade } from "./defaultplot";
export const defaultState = {
  ppcplots: {}
}

const ppcplots = (state = defaultState, action) => {
  switch (action.type) {
    case CREATE_NEW_PPC_PLOT: {
      const id = action.payload.id;
      const data = getData();
      const layout = getLayout();
      return {
        ...state,
        ppcplots: update(state.ppcplots, {
          [id]: {
            $set: {
              loading: false,
              layout: layout,
              data: [data],
              }
          }
        })
      }}
    case DELETE_PPC_PLOT: {
      return {
        ...state,
        ppcplots: update(state.ppcplots, {
            $unset: [action.payload.id]
        }),
      }
    }

    case  ADD_DATA_TO_PPC_PLOT: {
      const {id, x, min, max} = action.payload;
      const newData = getData(x,min,max);
      return {
        ...state,
        ppcplots: update(state.ppcplots, {
          [id]: {
            data: {$set: [newData]}
          }
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
    case CHANGE_PPC_PLOT_LAYOUT: {
      const {id, x_vals} = action.payload;
      const shade = getShade(x_vals);
      return {
        ...state,
        ppcplots: update(state.ppcplots, {
          [id]: {
            layout: {
              shapes: {$set: shade}
            }
          }
        })
      }
    }
    default:
      return state;
  }
}

export default ppcplots;