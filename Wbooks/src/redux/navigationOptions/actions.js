import { AsyncStorage } from 'react-native';

export const actionTypes = {
  LOG_OUT: 'LogOut',
  SEARCH: 'Search'
};

const SESSION_DATA_KEY = 'sessionData';

const navigationOptionsActions = {
  logOut: navigation => async dispatch => {
    await AsyncStorage.removeItem(SESSION_DATA_KEY).catch(err => console.log(err));
    dispatch({
      type: actionTypes.LOG_OUT
    });
    dispatch(navigation.navigate('LogIn'));
  }
};

export default navigationOptionsActions;
