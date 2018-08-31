import React from 'react';
import SearchForm from './searchForm'
import { Link } from 'react-router-dom';

export default class tableHeader extends React.Component {

  render(){

    return(
      <header>
        <div>Book Store</div>
        <Link to='/edit'>New</Link>
        <div><SearchForm/></div>
      </header>
    )
  }
}