import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import selectBook from '../actions/index.js';

class App extends Component {
  renderList(){
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className='list-group-item' onClick={this.props.selectBook.bind(null, book)}>
          {book.title}
        </li>
        );
    });
  }

  render() {
    return (
        <div className='col-md-6'>
          <ul className='list-group'>{this.renderList()} </ul>
        </div>
    )
  }

}

function mapStateToProps(state){
  return {
    books: state.books
  };
}

function mapDispatchtoProps(dispatch){
  return bindActionCreators({selectBook: selectBook}, dispatch);
}

export default connect(mapStateToProps, mapDispatchtoProps)(App);
