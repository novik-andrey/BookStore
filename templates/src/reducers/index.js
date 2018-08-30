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

const queryReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.MAKE_QUERY:
      return action.query
    default:
      return state
  }
}

export default combineReducers({
  books: booksReducer,
  query: queryReducer
});