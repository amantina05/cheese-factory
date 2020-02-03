import axios from 'axios'
import {combineReducers} from 'redux'

/**
 * ACTION TYPES
 */
const GET_WINE = 'GET_WINE'
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
const getWines = wines => ({
  type: GET_WINE,
  wines
})

const getSingleWine = wine => ({
  type: GET_WINE,
  wine
})
/**
 * THUNK CREATORS
 */
// export const one = () => async dispatch => {
//   try {
//     const {data} = await axios.get('/api/wines')
//     dispatch(getWines(data))
//   } catch (error) {
//     console.error(error)
//   }
// }
export const gotWines = () => {
  return async dispatch => {
    const {data} = await axios.get('/api/wines')
    dispatch(getWines(data))
  }
}
/**
 * REDUCER
 */
function winesReducer(wines = [], action) {
  switch (action.type) {
    case GET_WINE:
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
