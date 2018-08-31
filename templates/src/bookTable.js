import React from 'react';
import { connect } from 'react-redux';
import BookRow from './bookRow.js';
import bookFilter from './bookFilter';

class BookTable extends React.Component {

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

export default connect(mapStateToProps)(BookTable);