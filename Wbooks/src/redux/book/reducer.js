import { createReducer, completeReducer, completeState } from 'redux-recompose';

import { actions } from './actions';

const stateDescription = {
  bookDetail: null,
  bookList: [],
  wishList: [],
  rentedBooks: []
};

const initialState = completeState(stateDescription);

const reducerDescription = {
  primaryActions: [
    actions.GET_BOOK_LIST,
    actions.GET_RENTED_BOOKS,
    actions.LOAD_BOOK_DETAILS,
    actions.RETURN_BOOK,
    actions.RENT_BOOK,
    actions.ADD_TO_WISHLIST,
    actions.ADD_COMMENT
  ]
};

export default createReducer(initialState, completeReducer(reducerDescription));
