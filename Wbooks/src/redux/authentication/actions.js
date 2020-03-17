import AuthenticationService from '../../services/AuthenticationService';

export const actionTypes = {
  LOG_IN: 'LogIn',
  LOG_IN_SUCCESS: 'LogInSuccess',
  LOG_IN_ERROR: 'LogInError',
  LOG_OUT: 'LogOut'
};

const AuthenticationActions = {
  logIn: (email, password) => async dispatch => {
    const response = await AuthenticationService.getBookList();
    console.log(response);
    if (response.ok) {
      dispatch({
        type: actionTypes.LOG_IN_SUCCESS,
        payload: response
      });
    } else {
      dispatch({
        type: actionTypes.LOG_IN_ERROR
      });
    }
  }
};

export default AuthenticationActions;
