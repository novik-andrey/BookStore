import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as bookActions from './actions/index';

class AddBook extends React.Component {

  
  submitBook(){
    this.props.addBook(this.props.book);
    this.props.clearBook();
  }

  render() {
    const { number, name, author, pages, price, makeBook, addBook, clearBook } = this.props;
    return (
      <form>
        <label> number <input type="text" name="number" value={number}
          onChange={makeBook}/></label>
        <label> name <input type="text" name="name" value={name}
          onChange={makeBook}/></label>
        <label> author <input type="text" name="author" value={author}
          onChange={makeBook}/></label>
        <label> pages <input type="text" name="pages" value={pages}
          onChange={makeBook}/></label>
        <label> price <input type="text" name="price" value={price}
          onChange={makeBook}/></label>
        <Link onClick={this.submitBook.bind(this)} to='/'> Add Book</Link>
        <Link onClick={clearBook} to='/'> Cancel</Link>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    book: state.book
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addBook: (book) => dispatch(bookActions.addBook(book)),
    clearBook: () => dispatch(bookActions.clearBook()),
    makeBook: event => dispatch(bookActions.makeBook(event.target.name, event.target.value))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddBook);