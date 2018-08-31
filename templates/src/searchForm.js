import React from 'react';
import { connect } from 'react-redux';
import * as bookActions from './actions/index';

class SearchForm extends React.Component {

  render() {
    const { query, makeQuery } = this.props;
    return (
      <form>
        <p><label> search <input type="text" name="search" value={query}
          onChange={makeQuery}/></label></p>
      </form>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    query: state.query
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    makeQuery: event => dispatch(bookActions.makeQuery(event.target.value))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);