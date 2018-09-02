import React from 'react';
import { connect } from 'react-redux';
import BookRow from './bookRow.js';
import bookFilter from './bookFilter';

class BookTable extends React.Component {

  render() {
    const {books} = this.props;
    return (
      <ul>
        {books.map(book => <BookRow book={book} />)}
      </ul>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.books.filter(book => bookFilter(book, state.query))
  }
};

export default connect(mapStateToProps)(BookTable);