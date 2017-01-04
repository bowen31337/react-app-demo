import * as types from '../constants/actionTypes'
import reducer from './fetchContentsReducer'

const INIT_STATE = {
		error:null,
		loading:true,
		payload:[]
}


describe('fetch content reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(INIT_STATE)
  })

  it('should handle FETCH_CONTENTS', () => {
    expect(
      reducer({}, {
        type: types.FETCH_CONTENTS
      })
    ).toEqual(
			{
				...INIT_STATE,
				loading:true
			}
    )
  })
})
