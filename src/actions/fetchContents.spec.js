import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as endpoint from '../constants/endpoints'


import * as actions from '../actions/fetchContents'
import * as types from '../constants//actionTypes'

import expectedJson from '../constants/expectedJson.json'

import axios from 'axios'
import moxios from 'moxios'


const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('async fetch remote weather information', () => {
  beforeEach(() => moxios.install())

  afterEach(() => moxios.uninstall())


  it('creates FETCH_CONTENTS_SUCCESS when fetching info has been done', () => {


      moxios.stubRequest(endpoint.CONTENT_ENDPOINT, {
        status: 200,
        response: expectedJson
      })

    const promise = new Promise((resolve, reject) => resolve({}))

    const expectedActions = [
      { type: types.FETCH_CONTENTS,payload:promise},
      { type: types.FETCH_CONTENTS_SUCCESS, payload:expectedJson}
    ]
    const store = mockStore({ fetchContents: {} })

    return store.dispatch(actions.fetchContents()).payload
      .then(response => store.dispatch(actions.fetchContentsSuccess(response .data)))
      .then(() => { // return of async actions
        expect(store.getActions()).toEqual(expectedActions)
      })
  })
})
