import * as constants from '../constants'
import browserHistory from 'react-router/lib/browserHistory';

const initialState = browserHistory.getCurrentLocation()

export default function login (state = initialState, action) {
  console.log(action);
  return action.type === constants.SUCCESS_LOGIN
    ? action.payload
    : state
}
