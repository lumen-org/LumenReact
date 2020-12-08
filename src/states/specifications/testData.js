import { EMPTY } from "../constants";
import { STANDARD_SPECIFICATION } from "./specificationTypes"

export const defaultState = {
    specifications: {
        byId: {},
        allIds: []
    },
    activeSpecificationId: EMPTY
}

export const filledOneSpecification = {
    activeSpecificationId: 10,
    specifications: {
        allIds: [10],
        byId: {
            10: {
                id: 10,
                specificationType: STANDARD_SPECIFICATION
            }
        }
    }
}