export function selectBook(book) {
  // needs to return an action which is an object with a type
  // property. this action will flow through the reducers.
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}