import * as types from "./constants"
import * as actions from "./actions";
import { defaultValues, filledTwoValues } from "./testData";

describe("actions", () => {
    it("should create an action which adds a standardspecification to the store", () => {

        const id = 10

        const defaultAction = {
            type: types.CREATE_NEW_STANDARD_SPECIFICATION,
            payload: {
                id,
                defaultValues
            }
        }

        // should create a new standardspecification with defaultValues
        expect(actions.createNewStandardSpecification({ id })).toEqual(defaultAction)
        expect(actions.createNewStandardSpecification({ id, initValues: defaultValues })).toEqual(defaultAction)

        const filledAction = {
            type: types.CREATE_NEW_STANDARD_SPECIFICATION,
            payload: {
                id,
                defaultValues: filledTwoValues
            }
        }
        // should create a new specification with set values
        expect(actions.createNewStandardSpecification({ id, initValues: filledTwoValues })).toEqual(filledAction)
    })

    it("should create an action which adds values to standardspecification", () => {
        const payload = {
            id: "10",
            key: "X_Axis",
            value: "time[s]"
        }
        const addValueAction = {
            type: types.ADD_TO_STANDARD_SPECIFICATION,
            payload
        }
        expect(actions.addToStandardSpecification(payload)).toEqual(addValueAction)
    })

    it("should create an action which deletes values from standardspecification", () => {
        const payload = {
            id: "10",
            key: "X_Axis",
            value: "time[s]"
        }
        const deleteValueAction = {
            type: types.DELETE_FROM_STANDARD_SPECIFICATION,
            payload
        }
        expect(actions.deleteFromStandardSpecification(payload)).toEqual(deleteValueAction)
    })

    it("should create an action which updates the facet state", () => {
        const payload = {
            id: "10",
            type: "model",
            key: "Prediction"
        }
        const updateFacetAction = {
            type: types.UPDATE_FACET_STATE,
            payload
        }
        expect(actions.updateFacetState(payload)).toEqual(updateFacetAction)
    })

    it("should create an action which resets the standardspecification", () => {
        const resetStandardspecificationAction = {
            type: types.RESET_STANDARD_SPECIFICATIONS
        }
        expect(actions.resetSpecifications()).toEqual(resetStandardspecificationAction)
    })
})