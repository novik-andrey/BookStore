import React from 'react';

export default class BookRow extends React.Component {

  render(){
    const {number, name, author, pages, price} = this.props.book;

    return(
      <div className="bookRow">
        <div>number = {number}</div>
        <div>name = {name}</div>
        <div>author = {author}</div>
        <div>pages = {pages}</div>
        <div>price = {price}</div>
      </div>
    )
  }
}