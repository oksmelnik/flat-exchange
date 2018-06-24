import {ADD_FLAT} from '../actions/flats'

export default function (state = null, action) {
  switch (action.type) {

    case ADD_FLAT:
    return action.payload

    default:
    return state
  }
}
