import { combineReducers } from 'redux'
import userReducer from './userReducers'

export default combineReducers({
  movies: userReducer 
})