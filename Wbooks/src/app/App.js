/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

import store from '../redux/store';

import MainStackNavigator from './screens/navigation/mainNavigator';

const App: () => React$Node = () => (
  <Provider store={store}>
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  </Provider>
);

export default App;
