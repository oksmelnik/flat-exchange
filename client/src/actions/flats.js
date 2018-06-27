import * as request from 'superagent'
import {push} from 'connected-react-router'

const baseUrl = 'http://localhost:4008'

export const ADD_FLAT = 'ADD_FLAT'
export const FETCHED_DETAILED_FLAT = 'FETCHED_DETAILED_FLAT'
export const FETCHED_ALL_FLATS = 'FETCHED_ALL_FLATS'

export const addFlat = (flat, id) => (dispatch) => {
    request
      .post(`${baseUrl}/${id}/flats/`)
      .send(flat)
      .then(response => dispatch({
        type: ADD_FLAT,
        payload: response.body,
          },
        dispatch(push(`${response.body.id}/dashboard`))
        ))
    }

    export const fetchAllFlats = () => (dispatch) => {
    request
      .get(`${baseUrl}/flats/`)
      .then(response => {
         dispatch({
        type: FETCHED_ALL_FLATS,
        payload: response.body
      })
    })
      .catch(err => alert(err))
    }

  export const fetchFlat = (flatId) => (dispatch) => {
      request
        .get(`${baseUrl}/flats/${flatId}`)
        .then(response => dispatch({
          type: FETCHED_DETAILED_FLAT,
          payload: response.body
        }))
        .catch(err => alert(err))
    }
