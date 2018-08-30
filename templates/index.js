import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux';
import * as bookActions from './src/actions/index';
import rootReducer from './src/reducers/index';
import App from './src/app';

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware
  )
)
store.dispatch(bookActions.getBooks());

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);