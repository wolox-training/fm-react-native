import { actionTypes } from './actions';

const initialState = {
  search: null,
  loading: false
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOG_OUT:
      return initialState;

    default:
      return state;
  }
}

export default reducer;
