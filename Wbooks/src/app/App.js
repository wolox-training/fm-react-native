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

import TabNavigator from './screens/navigation/tabsNavigator';

const App: () => React$Node = () => (
  <Provider store={store}>
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  </Provider>
);

export default App;
