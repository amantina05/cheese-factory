import axios from 'axios'
import {combineReducers} from 'redux'

/**
 * ACTION TYPES
 */
const GET_CHEESE = 'GET_CHEESE'
const GET_SINGLE_CHEESE = 'GET_SINGLE_CHEESE'
/**
 * INITIAL STATE
 */
const initialState = {
  cheeses: []
}

/**
 * ACTION CREATORS
 */
const getCheese = cheeses => ({
  type: GET_CHEESE,
  cheeses
})
const getSingleCheese = cheese => ({
  type: GET_SINGLE_CHEESE,
  cheese
})

/**
 * THUNK CREATORS
 */
// export const one = () => async dispatch => {
//   try {
//     const {data} = await axios.get('/api/cheese')
//     dispatch(getCheese(data))
//   } catch (error) {
//     console.error(error)
//   }
// }
export const gotCheese = () => {
  return async dispatch => {
    const {data} = await axios.get('/api/cheeses')
    dispatch(getCheese(data))
  }
}
/**
 * REDUCER
 */
function cheesesReducer(cheeses = [], action) {
  switch (action.type) {
    case GET_CHEESE:
      return action.cheeses
    default:
      return cheeses
  }
}

function singleCheeseReducer(cheese = {}, action) {
  switch (action.type) {
    case GET_SINGLE_CHEESE:
      return action.cheese
    default:
      return cheese
  }
}

export const loadOneCheese = function(cheeseId) {
  return function(dispatch) {
    axios('/api/cheeses/' + cheeseId)
      .then(cheese => {
        const action = getSingleCheese(cheese.data)
        //because it is an object and i want to go in it and get the data
        dispatch(action)
      })
      .catch(err => console.error(err))
  }
}

const rootReducer = combineReducers({
  allCheeses: cheesesReducer,
  singleCheese: singleCheeseReducer
})

export default rootReducer
