import * as types from "./constants"
import * as actions from "./actions"
import {CREATE_NEW_STANDARD_SPECIFICATION} from "../standardspecifications/constants"
import { STANDARD_SPECIFICATION } from "./specificationTypes"

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe("actions", () => {

    it("should create an action which creates a new standard specification", () => {
        const payload = {
            specificationId: 10,
            specificationType: STANDARD_SPECIFICATION,
            initValues: {}
        }

        const expectedAction = [{
            type: CREATE_NEW_STANDARD_SPECIFICATION,
            payload: {
                defaultValues: {},
                id: payload.specificationId
            }
        }, {
            type: types.CREATE_NEW_SPECIFICATION,
            payload: {
                id: payload.specificationId,
                specificationType: payload.specificationType
            }
        }, {
            type: types.CHANGE_ACTIVE_SPECIFICATIONS,
            payload: {
                id: payload.specificationId
            }
        }]
        const store = mockStore({})

        store.dispatch(actions.createNewSpecification(payload))
        expect(store.getActions()).toEqual(expectedAction)
    })

    it("should create an action which adds a specification", () => {
        const payload = {
            specificationId: 10,
            specificationType: STANDARD_SPECIFICATION
        }

        const expectedAction = {
            type: types.CREATE_NEW_SPECIFICATION,
            payload: {
                id: payload.specificationId,
                specificationType: payload.specificationType
            }
        }

        expect(actions.createSpecification(payload)).toEqual(
            expectedAction
        )
    })

    it("should create an action which sets the active specification", () => {
        const payload = {
            specificationId: 10,
        }

        const expectedAction = {
            type: types.CHANGE_ACTIVE_SPECIFICATIONS,
            payload: {
                id: payload.specificationId
            }
        }

        expect(actions.changeActiveSpecification(payload)).toEqual(
            expectedAction
        )
    })
})