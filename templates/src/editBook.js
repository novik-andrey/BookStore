import React from 'react';
import { connect } from 'react-redux';
import * as bookActions from './actions/index';

class EditBook extends React.Component {

  render() {
    const { query, makeQuery } = this.props;
    return (
      <form>
        <p><label> search<input type="text" name="search" value="{query}"
                        /></label></p>
      </form>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    books: state.books
  }
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     makeQuery: event => dispatch(bookActions.makeQuery(event.target.value))
//   }
// };

export default connect(mapStateToProps)(EditBook);