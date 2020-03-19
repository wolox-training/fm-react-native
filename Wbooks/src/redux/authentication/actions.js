import { AsyncStorage } from 'react-native';

import AuthenticationService from '../../services/AuthenticationService';

export const actionTypes = {
  LOG_IN: 'LogIn',
  LOG_IN_SUCCESS: 'LogInSuccess',
  LOG_IN_ERROR: 'LogInError',
  LOADING_ENABLED: 'LoadingEnabled',
  LOADING_DISABLED: 'LoadingDisabled',
  STORED_DATA_SUCESS: 'StoredDataSuccess'
};

const SESSION_DATA_KEY = 'sessionData';

const AuthenticationActions = {
  startUp: navigation => async dispatch => {
    try {
      const sessionData = await AsyncStorage.getItem('sessionData');
      if (sessionData !== null) {
        dispatch({
          type: actionTypes.STORED_DATA_SUCESS,
          payload: sessionData
        });
        navigation.navigate('Main');
      }
    } catch (error) {
      dispatch({
        type: actionTypes.LOG_IN_ERROR
      });
    }
  },

  logIn: (email, password, navigation) => async dispatch => {
    dispatch({
      type: actionTypes.LOADING_ENABLED
    });
    const response = await AuthenticationService.signIn(email, password);
    if (response.ok) {
      const {
        data: { uid, userEmail }
      } = response.data;
      const sessionData = {
        uid,
        accessToken: response.headers['access-token'],
        email: userEmail
      };
      try {
        await AsyncStorage.setItem(SESSION_DATA_KEY, JSON.stringify(sessionData));
        dispatch({
          type: actionTypes.LOG_IN_SUCCESS,
          payload: response
        });
        navigation.navigate('Main');
      } catch (error) {
        dispatch({
          type: actionTypes.LOG_IN_ERROR
        });
      }
    } else {
      dispatch({
        type: actionTypes.LOG_IN_ERROR
      });
    }
  },
  logOut: () => async dispatch => {
    dispatch({
      type: actionTypes.LOADING_ENABLED
    });
    await AsyncStorage.removeItem(SESSION_DATA_KEY).then(() => {
      dispatch({
        type: actionTypes.LOG_OUT
      });
    });
  }
};

export default AuthenticationActions;
