import {ADD_USER, FETCH_USER} from '../actions/users'

export default function (state = [], action) {
  switch (action.type) {

    case ADD_USER:
    return action.payload

    case FETCH_USER:
    return action.payload

    default:
    return state
  }
}
