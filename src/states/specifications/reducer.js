import { EMPTY } from "../constants";
import { CREATE_NEW_SPECIFICATION } from "./constants";

import update from "immutability-helper";

export const defaultState = {
  specifications: {
    byId: {},
    allIds: []
  },
  activeSpecificationId: EMPTY
}

const specifications = (state = defaultState, action) => {
  switch (action.type) {
    case CREATE_NEW_SPECIFICATION:
      const { specificationType, id } = action.payload
      if (!state.specifications.allIds.includes(id)) {
        return {
          ...state,
          specifications: update(state.specifications, {
            byId: {
              [id]: {
                $set: { specificationType: specificationType, id: id }
              }
            },
            allIds: {
              $push: [id]
            }
          }),
          activeSpecificationId: id,
        };
      }
    default:
      return {
        ...state
      }
  }
}

export default specifications;