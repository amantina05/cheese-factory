import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import cheese from './cheese'
import wine from './wine'

const reducer = combineReducers({user, cheese, wine})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

// store.subscribe = () => console.log(store.getState())

export default store
export * from './user'
export * from './cheese'
export * from './wine'
