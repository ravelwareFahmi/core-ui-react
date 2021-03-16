import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import changeState from '../reducer'

export const store = createStore(changeState, applyMiddleware(thunk))
