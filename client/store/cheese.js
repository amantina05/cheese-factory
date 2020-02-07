import axios from 'axios'
import {combineReducers} from 'redux'
import {createStore, applyMiddleware} from 'redux'

/**
 * ACTION TYPES
 */
const GOT_CHEESE = 'GOT_CHEESE'
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
//after
const gotCheese = cheeses => ({
  type: GOT_CHEESE,
  cheeses
})
const gotSingleCheese = cheese => ({
  type: GET_SINGLE_CHEESE,
  cheese
})

/**
 * THUNK CREATORS
 */
//before
export const getCheese = () => {
  console.log('thunk')
  return async dispatch => {
    const {data} = await axios.get('/api/cheeses')
    dispatch(gotCheese(data))
  }
}

export const getSingleCheese = id => {
  return async dispatch => {
    const {data} = await axios.get(`/api/cheeses/${id}`)
    dispatch(gotSingleCheese(data))
  }
}
/**
 * REDUCER
 */
function cheesesReducer(cheeses = [], action) {
  console.log('reducer')
  switch (action.type) {
    case GOT_CHEESE:
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

// const store = createStore(cheesesReducer, applyMiddleware())

// export default store
