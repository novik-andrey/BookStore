import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as bookActions from './actions/index';

class EditBook extends React.Component {

  componentDidMount() {
    let books = this.props.books.filter( book => book.number == this.props.match.params.number)
    this.props.setBook(books[0]);
  }

  submitBook(){
    this.props.editBook(this.props.match.params.number, this.props.book);
    console.log(this.props);
    this.props.clearBook();
  }

  render() {
    const { makeBook, deleteBook, clearBook } = this.props;
    const { number, name, author, pages, price } = this.props.book;
    return (
      <form>
        <label> number <input type="text" name="number" value={`${number}`}
          onChange={makeBook}/></label>
        <label> name <input type="text" name="name" value={name}
          onChange={makeBook}/></label>
        <label> author <input type="text" name="author" value={author}
          onChange={makeBook}/></label>
        <label> pages <input type="text" name="pages" value={pages}
          onChange={makeBook}/></label>
        <label> price <input type="text" name="price" value={price}
          onChange={makeBook}/></label>
        <Link onClick={this.submitBook.bind(this)} to='/'> Save</Link>
        <Link onClick={deleteBook.bind(this, this.props.match.params.number)} to='/'> Delete</Link>
        <Link onClick={clearBook} to='/'> Cancel</Link>
      </form>
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
    editBook: (number, book) => dispatch(bookActions.editBook(number, book)),
    setBook: (book) => dispatch(bookActions.setBook(book)),
    deleteBook: (number) => dispatch(bookActions.deleteBook(number)),
    clearBook: () => dispatch(bookActions.clearBook()),
    makeBook: event => dispatch(bookActions.makeBook(event.target.name, event.target.value))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditBook);