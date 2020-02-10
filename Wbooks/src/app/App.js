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

const App: () => React$Node = () => {
  const mockData = require('./mocklist.json');
  return (
    <NavigationContainer>
      <BookListContainer bookList={mockData} />
    </NavigationContainer>
  );
};

export default App;
