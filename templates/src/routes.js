import React  from 'react';
import {Route} from 'react-router';
import App from './app';
import EditBook from './editBook';

export default (
  <Route path="/" component={App}>
    <Route path="/about" component={EditBook}></Route>
  </Route>
)