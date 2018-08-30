import React from 'react';
import { connect } from 'react-redux';
import BookRow from './bookRow.js';
import bookFilter from './bookFilter';
import * as bookActions from './actions/index';

class BookTable extends React.Component {
  componentDidMount() {
    this.props.getBooks();
  }

  render() {
    const {books} = this.props;
    return (
      // <div className="bookTable">
      <ul>
        {books.map(book => <BookRow book={book} />)}
      </ul>
      // </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    books: state.books.filter(book => bookFilter(book, state.query))
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getBooks: () => dispatch(bookActions.getBooks())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(BookTable);