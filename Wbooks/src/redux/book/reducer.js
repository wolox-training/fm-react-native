import { actionTypes } from './actions';

const initialState = {
  // TODO
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.RENT_BOOK:
      return {};
    default:
      return state;
  }
}

export default reducer;
