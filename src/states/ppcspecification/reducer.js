import update from "immutability-helper";
import { CREATE_NEW_PPC_SPECIFICATION, REMOVE_PPC_SPECIFICATION} from "./constants";

export const defaultState = {
  ppcspecification: {}
}

const ppcspecification = (state = defaultState, action) => {
  switch (action.type) {
    case CREATE_NEW_PPC_SPECIFICATION:
      const { id, defaultValues } = action.payload
      return {
        ...state,
        ppcspecification: update(state.ppcspecification, {
            [id]: { $set: defaultValues }
          }
        )
      }
    case REMOVE_PPC_SPECIFICATION:
      return {
        ...state,
        ppcspecification: update(state.ppcspecification, {
          $unset: [action.payload.id]
        })
      }
      /*
    case ADD_TO_MULTI_SPECIFICATION:
      return {
        ...state,
        multispecifications: update(state.multispecifications, {
          [action.payload.id]: {
            specification: {
              [action.payload.key]: { $add: [action.payload.value] }
            }
          }
        })
      }
    case DELETE_FROM_MULTI_SPECIFICATION:
      return {
        ...state,
        multispecifications: update(state.multispecifications, {
          [action.payload.id]: {
            specification: {
              [action.payload.key]: { $remove: [action.payload.value] },
            },
          },
        })
      }
    case RESET_MULTI_SPECIFICATION:
      return defaultState
       */
    default:
      return state
  }
}

export default ppcspecification