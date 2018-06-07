import * as request from 'superagent'

const baseUrl = 'http://localhost:4008'

export const ADD_USER = 'ADD_USER'
export const FETCH_USER = 'FETCH_USER'
export const LOG_OUT = 'Log_OUT'


  export const createUser = (user) => (dispatch) => {
    request
      .post(`${baseUrl}/users`)
      .send(user)
      .then(response => dispatch({
  type: ADD_USER,
  payload: response.body
}))
  }

  export const fetchUser = (id) => (dispatch) => {
  request
  .get(`${baseUrl}/users/${id}`)
  .then(result => {
    dispatch({
        type: FETCH_USER,
        payload: result.body
    })
  })
.catch(err => console.error(err))
}

export const logout = () => ({
  type: LOG_OUT
})
