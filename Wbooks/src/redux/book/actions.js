export const actionTypes = {
  LOAD_BOOK_DETAILS: 'LOAD_BOOK_DETAILS',
  GET_BOOK_LIST: 'ADD_BOOK_TO_WISHLIST',
  ADD_TO_WISHLIST: 'ADD_TO_FAVOURITES',
  RENT_BOOK: 'RENT_BOOK'
};

const BookActions = {
  loadBookDetails: book => ({
    type: actionTypes.LOAD_BOOK_DETAILS,
    payload: {
      book
    }
  }),
  getBookList: () => ({
    type: actionTypes.GET_BOOK_LIST
  }),
  addToFavourites: book => ({
    type: actionTypes.ADD_TO_WISHLIST,
    payload: {
      book
    }
  }),
  rentBook: book => ({
    type: actionTypes.RENT_BOOK,
    payload: {
      book
    }
  })
};

export default BookActions;
