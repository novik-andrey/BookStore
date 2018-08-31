import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux';
import App from './src/app';
import AddBook from './src/addBook';
import EditBook from './src/editBook';
import rootReducer from './src/reducers/index';
import * as bookActions from './src/actions/index';

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware
  )
)
store.dispatch(bookActions.getBooks())

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route exact path='/' component={App}/>
        <Route path='/add' component={AddBook}/>
        <Route path='/edit/:number' component={EditBook}/>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);