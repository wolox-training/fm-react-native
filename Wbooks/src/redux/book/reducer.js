import mockData from '../../app/mocklist.json';

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
    case actionTypes.GET_BOOK_LIST:
      return {
        ...state,
        bookList: mockData
      };
    case actionTypes.RENT_BOOK:
      return {
        ...state,
        rentedBooks: [...state.rentedBooks, action.payload.book]
      };
    default:
      return state;
  }
}

export default reducer;
