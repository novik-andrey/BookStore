import React from 'react';
import SearchForm from './searchForm'
import { Link } from 'react-router';

export default class tableHeader extends React.Component {

  render(){

    return(
      <header>
        <div>Book Store</div>
        <li><Link to="/edit">New</Link></li>
        <div><SearchForm/></div>
      </header>
    )
  }
}