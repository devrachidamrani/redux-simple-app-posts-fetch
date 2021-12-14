import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { postReducer } from './reducers'

export const store = createStore(
  postReducer,
  composeWithDevTools(applyMiddleware(thunk))
)
