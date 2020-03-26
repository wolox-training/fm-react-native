import { createReducer, completeReducer, completeState } from 'redux-recompose';
import onDelete from 'redux-recompose/lib/effects/onDelete';
import onConcatenate from 'redux-recompose/lib/effects/onConcatenate';

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
    actions.ADD_BOOK_TO_WISHLIST,
    actions.ADD_COMMENT
  ],
  override: {
    [actions.RETURN_BOOK]: onDelete(),
    [actions.RENT_BOOK]: onConcatenate()
  }
};

export default createReducer(initialState, completeReducer(reducerDescription));
