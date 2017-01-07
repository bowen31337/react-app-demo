import React from 'react'
import { shallow } from 'enzyme'
import Widget from './Widget'
import expectedJson from '../constants/expectedJson.json'

const pageSize = 5

function setup() {
  const props = {
    data: expectedJson,
    loading:false,
    error:false,
    fetchContents:jest.fn()
  }
  
  const enzymeWrapper = shallow(<Widget {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('widget component', () => {
    it('should render the list', () => {
      const { enzymeWrapper } = setup()
      expect(enzymeWrapper.find('tbody tr').length).toEqual(pageSize)
    })
})
