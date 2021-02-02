import * as types from "./constants";
import reducer from "./reducer";
import { defaultValues, defaultState, filledOneState, changedPredictionModelState } from "./testData";

describe("standardspecification reducer", () => {
    it("should create the initial state", () => {
        expect(reducer(undefined, {})).toEqual(
            {
                standardspecifications: {}
            }
        )
    })

    it("should create a new standardspecification", () => {
        const id = 10

        expect(reducer(undefined, {
            type: types.CREATE_NEW_STANDARD_SPECIFICATION,
            payload: {
                id,
                defaultValues
            }
        })).toEqual(defaultState)
    })

    it("should remove a standardspecification", () => {
        const payload = {
            id: 10
        }

        expect(reducer(defaultState, {
            type: types.REMOVE_STANDARD_SPECIFICATION,
            payload
        })).toEqual({ standardspecifications: {} })
    })

    it("should add a new value to standardspecification", () => {
        const payload = {
            id: 10,
            key: "X_Axis",
            value: "time[s]"
        }

        expect(reducer(defaultState, {
            type: types.ADD_TO_STANDARD_SPECIFICATION,
            payload
        })).toEqual(filledOneState)
    })

    it("should delete a value from standardspecification", () => {
        const payload = {
            id: 10,
            key: "X_Axis",
            value: "time[s]"
        }

        expect(reducer(filledOneState, {
            type: types.DELETE_FROM_STANDARD_SPECIFICATION,
            payload
        })).toEqual(defaultState)
    })

    it("should activate prediction model facet from standardspecification", () => {
        const payload = {
            id: 10,
            type: "model",
            key: "Prediction"
        }

        expect(reducer(defaultState, {
            type: types.UPDATE_FACET_STATE,
            payload
        })).toEqual(changedPredictionModelState)
    })

    it("should reset the standardspecification", () => {

        expect(reducer(defaultState, {
            type: types.RESET_STANDARD_SPECIFICATIONS
        })).toEqual({standardspecifications: {}})
    })
})