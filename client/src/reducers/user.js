import {ADD_USER, FETCH_USER, LOG_OUT} from '../actions/users'
const localCurrentUser = 'user'

let initialState = null
try {

  const user = JSON.parse(localStorage.getItem(localCurrentUser))
  if (user) {
    console.log('try')
    console.log(user)
    initialState = { user }
  }
}
catch (e) {
  console.log(`Error retrieving data from local storage`, e)
}


export default function (state = initialState, action) {
  switch (action.type) {

    case ADD_USER:
    return action.payload

    case FETCH_USER:
    return action.payload

    case LOG_OUT:
    return null

    default:
    return state
  }
}
