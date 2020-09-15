import reducer from "./reducer"
import { EMPTY } from "../constants";
import { CREATE_NEW_SPECIFICATION } from "./constants";

const defaultState = {
    currentId: EMPTY,
    lastCreatedId: EMPTY,
    specifications: {
        byId: {},
        allIds: [],
    },
};

const defaultValues = {
    specification: {
        X_Axis: new Set([]),
        Y_Axis: new Set([]),
        Filter: new Set([]),
        Detail: new Set([]),
        Color: new Set([]),
        Shape: new Set([]),
        Size: new Set([]),
    },
    facets: {
        Prediction: {
            model: false,
            data: false,
        },
        "Data Points": {
            model: false,
            data: true,
        },
        Marginals: {
            model: false,
            data: true,
        },
        Density: {
            model: false,
            data: false,
        },
    },
};

describe("specification reducer", () => {
    test("return init state", () => {
        expect(reducer(undefined, {})).toEqual(defaultState)
    })
    
    test("should create new specification", () => {
        const allIds = [1]
        let byId = {}
        byId[1] = { ...defaultValues, id: 1 }
        expect(
            reducer(defaultState, {
                type: CREATE_NEW_SPECIFICATION,
                payload: {
                    defaultValues: defaultValues,
                    id: 1
                }
            })
        ).toEqual(
            {
                currentId: 1,
                lastCreatedId: 1,
                specifications: {
                    byId: byId,
                    allIds: allIds,
                }
            }
        )
    })
})

