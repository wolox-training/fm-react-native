import { actionTypes } from './actions';

const initialState = {
  accessToken: null,
  expiry: null,
  id: null,
  uid: null,
  email: null,
  firstName: null,
  lastName: null
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOG_IN_SUCCESS: {
      const { data, headers } = action.payload;
      console.log(data);
      console.log(headers);
      return {
        accessToken: headers['access-token'],
        expiry: headers.expiry,
        id: data.id,
        email: data.email,
        uid: data.uid,
        fitstName: data.firstName,
        lastName: data.lastName
      };
    }

    case actionTypes.LOG_IN_ERROR:
      return state;
    default:
      return state;
  }
}

export default reducer;
