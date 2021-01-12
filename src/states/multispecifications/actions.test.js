import * as types from "./constants"
import * as actions from "./actions"
import { defaultValues, filledTwoValues } from "./testData"

describe("actions", () => {
    it("should create an action which adds a multipecification to the store", () => {
        const id = 10

        const defaultAction = {
            type: types.CREATE_NEW_MULTI_SPECIFICATION,
            payload: {
                id,
                initValues: defaultValues
            }
        }

        expect(actions.createNewMultiSpecification({ id })).toEqual(defaultAction)
        expect(actions.createNewMultiSpecification({ id, initValues: defaultValues })).toEqual(defaultAction)

        const filledAction = {
            type: types.createNewMultiSpecification,
            payload: {
                id,
                initValues: filledTwoValues
            }
        }

        expect(actions.createNewMultiSpecification({ id, initValues: filledTwoValues })).toEqual(filledAction)
    })

    it("should create an action which adds values to multispecification", () => {
        const payload = {
            id: "10",
            key: "X_Axis",
            value: "time[s]"
        }
        const addValueAction = {
            type: types.ADD_TO_MULTI_SPECIFICATION,
            payload
        }
        expect(actions.addToMultiSpecification(payload)).toEqual(addValueAction)
    })

    it("should create an action which deletes values from multispecification", () => {
        const payload = {
            id: "10",
            key: "X_Axis",
            value: "time[s]"
        }
        const deleteValueAction = {
            type: types.DELETE_FROM_MULTI_SPECIFICATION,
            payload
        }
        expect(actions.deleteFromMultiSpecification(payload)).toEqual(deleteValueAction)
    })

    it("should create an action which resets the multispecification", () => {
        const resetMultispecificationAction = {
            type: types.RESET_MULTI_SPECIFICATION
        }
        expect(actions.resetMultiSpecification()).toEqual(resetMultispecificationAction)
    })
})