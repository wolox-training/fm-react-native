import BookService from '../../services/BookService';

export const actionTypes = {
  LOAD_BOOK_DETAILS: 'LOAD_BOOK_DETAILS',
  GET_BOOK_LIST: 'GET_BOOK_LIST',
  GET_BOOK_LIST_SUCCESS: 'GET_BOOK_LIST_SUCCESS',
  GET_BOOK_LIST_ERROR: 'GET_BOOK_LIST_ERROR',
  GET_RENTED_BOOKS: 'GET_RENTED_BOOKS',
  GET_RENTED_BOOKS_SUCCESS: 'GET_RENTED_BOOKS_SUCCESS',
  GET_RENTED_BOOKS_ERROR: 'GET_RENTED_BOOKS_ERROR',
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
  getBookList: () => async dispatch => {
    dispatch({ type: actionTypes.GET_BOOK_LIST });
    const response = await BookService.getBookList();
    console.log(response);
    if (response.ok) {
      dispatch({
        type: actionTypes.GET_BOOK_LIST_SUCCESS,
        payload: response.data.page
      });
    } else {
      dispatch({
        type: actionTypes.GET_BOOK_LIST_ERROR
      });
    }
  },
  getRentedBooks: () => async dispatch => {
    dispatch({ type: actionTypes.GET_BOOK_LIST });
    const response = await BookService.getRentedBooks();
    if (response.ok) {
      const rentedBooks = response.data.page.map(rental => rental.book);
      console.log(rentedBooks);
      dispatch({
        type: actionTypes.GET_RENTED_BOOKS_SUCCESS,
        payload: rentedBooks
      });
    } else {
      dispatch({
        type: actionTypes.GET_RENTED_BOOKS_ERROR
      });
    }
  },
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
    type: actionTypes.RETURN_BOOK,
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
