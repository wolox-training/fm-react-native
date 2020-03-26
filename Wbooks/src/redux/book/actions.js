import { completeTypes, createTypes } from 'redux-recompose';

import { getBookList, getRentedBooks } from '../../services/BookService';

export const actions = createTypes(
  completeTypes([
    'GET_BOOK_LIST',
    'GET_RENTED_BOOKS',
    'LOAD_BOOK_DETAILS',
    'RETURN_BOOK',
    'RENT_BOOK',
    'ADD_BOOK_TO_WISHLIST',
    'ADD_COMMENT'
  ]),
  '@@BOOKS'
);

export const actionCreators = {
  getBookList: () => ({
    type: actions.GET_BOOK_LIST,
    target: 'bookList',
    service: getBookList
  }),
  loadBookDetails: book => ({
    type: actions.LOAD_BOOK_DETAILS,
    target: 'bookDetail',
    payload: book
  }),
  getRentedBooks: () => ({
    type: actions.GET_RENTED_BOOKS,
    target: 'rentedBooks',
    service: getRentedBooks
  }),
  addToWishList: book => ({
    type: actions.ADD_BOOK_TO_WISHLIST,
    target: 'wishList',
    payload: book
  }),
  rentBook: book => ({
    type: actions.RENT_BOOK,
    target: 'rentedBooks',
    payload: book
  }),
  returnBook: book => ({
    type: actions.RETURN_BOOK,
    target: 'bookDetail',
    payload: book
  }),
  addComment: book => ({
    type: actions.LOAD_BOOK_DETAILS,
    target: 'bookDetail',
    payload: book
  })
};

export default actionCreators;
