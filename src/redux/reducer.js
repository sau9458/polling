import { combineReducers } from 'redux'
import signUp from './signUp/reducer'
// import locationReducer from './location'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    signUp: signUp,
    ...asyncReducers,
  
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
