import React from 'react';
import { connect } from 'react-redux';
import BookRow from './bookRow.js'

class BookTable extends React.Component {
  componentDidMount() {

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
    books: state.books
  }
};

export default connect(mapStateToProps)(BookTable);