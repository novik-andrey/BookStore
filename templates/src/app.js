import React  from 'react';
import TableHeader from './tableHeader';
import BookTable from './bookTable';

export default class App extends React.Component {

  render() {
    return (
      <div>
        <TableHeader/>
        <BookTable />
      </div>
    )
  }
}