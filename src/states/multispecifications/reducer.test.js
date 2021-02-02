import * as types from "./constants";
import reducer from "./reducer";
import {
    defaultValues, 
    defaultState, 
    filledOneState, 
    changedState
} from "./testData"

describe("multispecification reducer", () => {
    it("should create the initial state", () => {
        expect(reducer(undefined, {})).toEqual(
            {
                multispecifications: {}
            }
        )
    })

    it("should create a new multispecification", () => {
        const id = 10
        expect(reducer(undefined, {
            type: types.CREATE_NEW_MULTI_SPECIFICATION,
            payload: {
                id,
                defaultValues
            }
        })).toEqual(defaultState)
    })

    it("should remove a multispecification", () => {
        const payload = {
            id: 10
        }

        expect(reducer(defaultState, {
            type: types.REMOVE_MULTI_SPECIFICATION,
            payload
        })).toEqual({multispecifications: {}})
    })

    it("should add a new value to multispecification", () => {
        const payload = {
            id: 10,
            key: "X_Axis",
            value: "time[s]"
        }

        expect(reducer(defaultState, {
            type: types.ADD_TO_MULTI_SPECIFICATION,
            payload
        })).toEqual(filledOneState)
    })

    it("should delete a value from multispecification", () => {
        const payload = {
            id: 10,
            key: "X_Axis",
            value: "time[s]"
        }

        expect(reducer(filledOneState, {
            type: types.DELETE_FROM_MULTI_SPECIFICATION,
            payload
        })).toEqual(defaultState)
    })

    it("should reset the multispecification", () => {

        expect(reducer(defaultState, {
            type: types.RESET_MULTI_SPECIFICATION
        })).toEqual({multispecifications: {}})
    })


})