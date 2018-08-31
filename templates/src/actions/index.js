import * as actionTypes from './types.js'
import Axios from 'axios';

const url = 'http://localhost:8080/books';

export const getExistingBooks = (books) => {
  return {
    type: actionTypes.GET_BOOKS, 
    books
  }
}

export const getBooks = () => {
  return (dispatch) => {
    return Axios.get(url)
      .then(response => {
        dispatch(getExistingBooks(response.data.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const addBook = (props) => {
  return (dispatch) => {
    console.log(props.book)
    return Axios.post(url, props.book)
      .then(response => {
        dispatch(getExistingBooks(response.data.data))
      })
      .catch(error => {
        throw(error);
      });
  };
}

export const makeBook = (name, value) => {
  return {
    type: actionTypes.MAKE_BOOK,
    name,
    value
  }
}

export const clearBook = () => {
  return {
    type: actionTypes.clearBook
  }
}

export const makeQuery = (query) => {
  return {
    type: actionTypes.MAKE_QUERY,
    query
  }
}