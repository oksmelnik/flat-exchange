import {ADD_FLAT, FETCHED_ALL_FLATS, FETCHED_DETAILED_FLAT} from '../actions/flats'

export default function (state = null, action) {
  switch (action.type) {

    case ADD_FLAT:
    return action.payload

    case FETCHED_ALL_FLATS:
    return action.payload

    case FETCHED_DETAILED_FLAT:
      return action.payload

    /*case UPDATE_FLAT:
    if (action.payload.id === state.id) {
      return action.payload
    }
    else return state
*/
    default:
    return state
  }
}
