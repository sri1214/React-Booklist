import React from 'react';
import BookList from './book-list.js';
import BookDetail from './book-detail.js';

export default ()=>{
  return (
    <div className='row'>
      <BookList/>
      <BookDetail />
    </div>
  )
}
