import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux';
import { routes } from './src/routes';
import rootReducer from './src/reducers/index';

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware
  )
)
// store.dispatch(bookActions.getBooks());

ReactDOM.render(
  <Provider store={store}>
    <Router routes={routes} history={browserHistory} /> 
  </Provider>,
  document.getElementById('root')
);