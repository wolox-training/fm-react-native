import { actionTypes } from './actions';

const initialState = {
  accessToken: null,
  expiry: null,
  id: null,
  uid: null,
  email: null,
  firstName: null,
  lastName: null,
  loading: false
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOG_IN_SUCCESS: {
      const { data, headers } = action.payload;
      return {
        ...state,
        accessToken: headers['access-token'],
        expiry: headers.expiry,
        id: data.id,
        email: data.email,
        uid: data.uid,
        fitstName: data.firstName,
        lastName: data.lastName,
        loading: false
      };
    }
    case actionTypes.STORED_DATA_SUCESS: {
      const { accessToken, uid, email } = action.payload;
      return {
        ...state,
        accessToken,
        uid,
        email
      };
    }
    case actionTypes.LOG_IN_ERROR:
      return state;

    case actionTypes.LOADING_ENABLED:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}

export default reducer;
