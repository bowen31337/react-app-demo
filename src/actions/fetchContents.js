import * as types from '../constants/actionTypes'
import axios from 'axios'
import * as endpoint from '../constants/endpoints'


export const fetchContents = () => {
	const request = axios({
    method: 'get',
    url: endpoint.CONTENT_ENDPOINT,
    headers: []
  })
	return {
		type:types.FETCH_CONTENTS,
		payload:request
	}
}

export const fetchContentsSuccess = (data) => {
	return {
		type:types.FETCH_CONTENTS_SUCCESS,
		payload:data
	}
}

export const fetchContentsFailture = (error) => {
	return {
		type:types.FETCH_CONTENTS_SUCCESS,
		payload:error
	}
}
