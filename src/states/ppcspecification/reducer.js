import update from "immutability-helper";
import {
  ADD_TO_PPC_SPECIFICATION,
  CHANGE_PPC_SPECIFICATION,
  CREATE_NEW_PPC_SPECIFICATION,
  REMOVE_PPC_SPECIFICATION
} from "./constants";

export const defaultState = {
  ppcspecifications: {}
}

const ppcspecifications = (state = defaultState, action) => {
  switch (action.type) {
    case CREATE_NEW_PPC_SPECIFICATION:
      const { id, defaultValues } = action.payload;
      return {
        ...state,
        ppcspecifications: update(state.ppcspecifications, {
            [id]: { $set: defaultValues }
          }
        )
      }
    case REMOVE_PPC_SPECIFICATION:
      return {
        ...state,
        ppcspecifications: update(state.ppcspecifications, {
          $unset: [action.payload.id]
        })
      }

    case CHANGE_PPC_SPECIFICATION: {
      const { id, values} = action.payload;
      return {
        ...state,
        ppcspecifications: update(state.ppcspecifications, {
            [id]: {$merge: values }

          }
        )
      }
    }
    case ADD_TO_PPC_SPECIFICATION: {
      const { id, values } = action.payload;
      return {
        ...state,
        ppcspecifications: update(state.ppcspecifications, {
          [id]: {$merge: values}
        })
      }
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

export default ppcspecifications