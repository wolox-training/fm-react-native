/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import BookListContainer from './screens/library/components/bookList/index';
import mockData from './mocklist.json';

const App: () => React$Node = () => (
  <NavigationContainer>
    <BookListContainer bookList={mockData} />
  </NavigationContainer>
);

export default App;
