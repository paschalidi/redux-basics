export function selectBook(book){
  //selectbook is an action creator HAS to return an action
  console.log('An action creator has  been called')
  return{
    type: 'BOOK_SELECTED',
    payload: book
  };
}