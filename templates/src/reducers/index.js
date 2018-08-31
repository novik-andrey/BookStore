import * as actionTypes from '../actions/types'
import { combineReducers } from 'redux';

const booksReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.GET_BOOKS:
      return action.books
    default:
      return state
  }
}

const makeBookReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.MAKE_BOOK:
      return Object.assign({}, state, {[action.name]: action.value})
    case actionTypes.SET_BOOK:
      return Object.assign({}, action.book)
    case actionTypes.CLEAR_BOOK:
      return {}
    default:
      return state
  }
}


const queryReducer = (state = '', action) => {
  switch (action.type) {
    case actionTypes.MAKE_QUERY:
      return action.query
    default:
      return state
  }
}

export default combineReducers({
  books: booksReducer,
  book: makeBookReducer,
  query: queryReducer
});