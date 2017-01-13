import { combineReducers } from 'redux'
import authenticateReducer from './authentication'

const rootReducer = combineReducers({
  authenticated: authenticateReducer,
})

export default rootReducer
