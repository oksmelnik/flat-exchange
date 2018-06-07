import {FETCH_USER, LOG_OUT} from './actions/users'
const localCurrentUser = 'user'

export const storeUser = store => next => action => {

  try {
    if (action.type === FETCH_USER) {
      localStorage.setItem(localCurrentUser, JSON.stringify(action.payload))
      console.log(localCurrentUser)
    }
    if (action.type === LOG_OUT) {
      localStorage.removeItem(localCurrentUser)
    }
  }
  catch (e) {
    console.log(`Interaction with LocalStorage went wrong`, e)
  }

  next(action)
}
