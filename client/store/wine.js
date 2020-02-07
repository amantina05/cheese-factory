import axios from 'axios'
import {combineReducers} from 'redux'
import {createStore, applyMiddleware} from 'redux'

/**
 * ACTION TYPES
 */
const GOT_WINE = 'GOT_WINE'
const GET_SINGLE_WINE = 'GET_SINGLE_WINE'
/**
 * INITIAL STATE
 */
const initialState = {
  wines: []
}

/**
 * ACTION CREATORS
 */
const gotWines = wines => ({
  type: GOT_WINE,
  wines
})

const gotSingleWine = wine => ({
  type: GET_SINGLE_WINE,
  wine
})
/**
 * THUNK CREATORS
 */

export const getWines = () => {
  console.log('thunk')
  return async dispatch => {
    const {data} = await axios.get('/api/wines')
    dispatch(gotWines(data))
  }
}

export const getSingleWine = wineId => {
  return async dispatch => {
    const {data} = await axios.get(`/api/wines/${wineId}`)
    dispatch(gotSingleWine(data))
  }
}
/**
 * REDUCER
 */
function winesReducer(wines = [], action) {
  console.log('reducer')
  switch (action.type) {
    case GOT_WINE:
      return action.wines
    default:
      return wines
  }
}

function singleWineReducer(wine = {}, action) {
  switch (action.type) {
    case GET_SINGLE_WINE:
      return action.wine
    default:
      return wine
  }
}

export const loadOneWine = function(wineId) {
  return function(dispatch) {
    axios('api/wines' + wineId)
      .then(wine => {
        const action = getSingleWine(wine.data)
        dispatch(action)
      })
      .catch(err => console.log(err))
  }
}

const rootReducer = combineReducers({
  allWines: winesReducer,
  singleWine: singleWineReducer
})

export default rootReducer
