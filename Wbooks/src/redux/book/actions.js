export const actionTypes = {
  LOAD_BOOK_DETAILS: 'LOAD_BOOK_DETAILS',
  GET_BOOK_LIST: 'GET_BOOK_LIST',
  ADD_TO_WISHLIST: 'ADD_BOOK_TO_WISHLIST',
  RENT_BOOK: 'RENT_BOOK',
  RETURN_BOOK: 'RETURN_BOOK',
  ADD_COMMENT: 'ADD_COMMENT'
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
  addToWishList: book => ({
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
  }),
  returnBook: book => ({
    type: actionTypes.RENT_BOOK,
    payload: {
      book
    }
  }),
  addComment: book => ({
    type: actionTypes.RENT_BOOK,
    payload: {
      book
    }
  })
};

export default BookActions;
