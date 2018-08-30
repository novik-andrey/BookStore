import React from 'react';
import SearchForm from './searchForm'

export default class tableHeader extends React.Component {

  render(){

    return(
      <header>
        <div>Book Store</div>
        <div><button>New</button></div>
        <div><SearchForm/></div>
      </header>
    )
  }
}