export default function(book){
  console.log('book selected', book.title);
  return {
    type: 'BOOK_SELECTED',
    book: book
  }
}
