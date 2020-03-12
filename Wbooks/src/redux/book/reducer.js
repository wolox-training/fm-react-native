import { actionTypes } from './actions';

const initialState = {
  bookDetail: null,
  bookList: [],
  wishList: [],
  rentedBooks: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOAD_BOOK_DETAILS:
      return {
        ...state,
        bookDetail: action.payload.book
      };
    case actionTypes.ADD_TO_WISHLIST:
      return {
        ...state,
        wishList: [...state.wishList, action.payload.book]
      };
    case actionTypes.GET_RENTED_BOOKS:
      return {
        ...state
      };
    case actionTypes.GET_RENTED_BOOKS_SUCCESS:
      return {
        ...state,
        rentedBooks: action.payload
      };
    case actionTypes.GET_RENTED_BOOKS_ERROR:
      return {
        ...state,
        rentedBooks: []
      };
    case actionTypes.GET_BOOK_LIST_SUCCESS:
      return {
        ...state,
        bookList: action.payload
      };
    case actionTypes.GET_BOOK_LIST_ERROR:
      return {
        ...state,
        bookList: []
      };
    case actionTypes.RENT_BOOK:
      return {
        ...state,
        rentedBooks: [...state.rentedBooks, action.payload.book]
      };
    case actionTypes.RETURN_BOOK:
      return {
        ...state,
        rentedBooks: state.rentedBooks.filter(({ id }) => action.payload.book.id !== id)
      };
    default:
      return state;
  }
}

export default reducer;
