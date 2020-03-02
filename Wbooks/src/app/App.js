/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Navigator from './screens/navigator';

const App: () => React$Node = () => (
  <NavigationContainer>
    <Navigator />
  </NavigationContainer>
);

export default App;
