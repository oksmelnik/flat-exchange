import * as request from 'superagent'

const baseUrl = 'http://localhost:4008'

export const ADD_FLAT = 'ADD_FLAT'

  export const addFlat = (flat, id) => (dispatch) => {
    request
      .post(`${baseUrl}/${id}/flats/`)
      .send(flat)
      .then(response => dispatch({
  type: ADD_FLAT,
  payload: response.body
}))
  }