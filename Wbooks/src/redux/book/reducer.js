import mockData from '../../app/mocklist.json';

import { actionTypes } from './actions';

const initialState = {
  bookDetail: null,
  bookList: [],
  wishlist: [],
  rentedBooks: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOAD_BOOK_DETAILS:
      return {
        bookDetail: action.payload.book
      };

    case actionTypes.ADD_TO_WISHLIST:
      return {
        wishlist: wishlist.push(action.payload.book)
      };
    case actionTypes.GET_BOOK_LIST:
      return {
        bookList: mockData
      };
    case actionTypes.RENT_BOOK:
      return {
        rentedBooks: rentedBooks.push(action.payload.book)
      };
    default:
      return state;
  }
}

export default reducer;
