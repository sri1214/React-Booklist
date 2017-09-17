import React, {Component} from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component{

  renderSelectedBook(){
    var selectedBook = this.props.selectedBook;
    if(selectedBook!=null)
      return <h3>{this.props.selectedBook.title}</h3>;
    else {
      return 'Please select a book';
    }
  }
  render(){
    return (
      <div className='col-md-6'>
        {this.renderSelectedBook()}
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    selectedBook: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail)
