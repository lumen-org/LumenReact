import * as types from "./constants"
import { defaultState, filledOneSpecification } from "./testData"
import reducer from "./reducer"
import { STANDARD_SPECIFICATION } from "./specificationTypes"

describe("specification reducer", () => {
    it("should create the initial state", () => {
        expect(reducer(undefined, {})).toEqual(
            defaultState
        )
    })

    it("should create a new specification", () => {
        const payload= {
            type: types.CREATE_NEW_SPECIFICATION,
            payload: {
                id: 10,
                specificationType: STANDARD_SPECIFICATION
            }
        }

        expect(reducer(undefined, payload)).toEqual(filledOneSpecification)
    })

    it("should set a new active specification id", () => {
        const payload= {
            type: types.CHANGE_ACTIVE_SPECIFICATIONS,
            payload: {
                id: 11
            }
        }

        expect(reducer(filledOneSpecification, payload)).toEqual({...filledOneSpecification, activeSpecificationId:payload.payload.id})
    })
})