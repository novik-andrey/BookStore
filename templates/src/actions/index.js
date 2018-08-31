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
      });
  };
};

export const addBook = (book) => {
  return (dispatch) => {
    return Axios.post(url, book)
      .then(response => {
        dispatch(getExistingBooks(response.data.data));
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

export const setBook = (book) => {
  return {
    type: actionTypes.SET_BOOK,
    book
  }
}

export const editBook = (number, book) => {
  return (dispatch) => {
    return Axios.put(url + '/' + number, book)
      .then(response => {
        dispatch(getExistingBooks(response.data.data));
      });
  };
}

export const deleteBook = (number) => {
  return (dispatch) => {
    return Axios.delete(url + '/' + number)
      .then(response => {
        dispatch(getExistingBooks(response.data.data));
      });
  };
}

export const clearBook = () => {
  return {
    type: actionTypes.CLEAR_BOOK
  }
}

export const makeQuery = (query) => {
  return {
    type: actionTypes.MAKE_QUERY,
    query
  }
}