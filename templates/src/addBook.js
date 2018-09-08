import React from 'react';
import { connect } from 'react-redux';
import * as bookActions from './actions/index';

class AddBook extends React.Component {

  submitBook() {
    if (!this.isBookExist() && this.props.book.number) {
      this.props.addBook(this.props.book);
      this.props.clearBook();
      this.props.history.push('/');
    }
  }

  cancel() {
    this.props.clearBook();
    this.props.history.push('/');
  }

  isBookExist() {
    return this.props.books.some(book => book.number == this.props.book.number);
  }

  render() {
    const { number, name, author, pages, price } = this.props.book;
    const { makeBook } = this.props;
    return (
      <div>
        <label> number <input type="text" name="number" value={number}
          onChange={makeBook} /></label>
        <label> name <input type="text" name="name" value={name}
          onChange={makeBook} /></label>
        <label> author <input type="text" name="author" value={author}
          onChange={makeBook} /></label>
        <label> pages <input type="text" name="pages" value={pages}
          onChange={makeBook} /></label>
        <label> price <input type="text" name="price" value={price}
          onChange={makeBook} /></label>
        <button onClick={this.submitBook.bind(this)}> Add Book</button>
        <button onClick={this.cancel.bind(this)}> Cancel</button>
        <div>
          {this.isBookExist() && <span>A book with this number exists</span>}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    book: state.book,
    books: state.books
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