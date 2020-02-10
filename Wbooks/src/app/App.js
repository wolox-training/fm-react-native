/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


import BookListContainer from './screens/library/components/bookList/index.js'

const App: () => React$Node = () => {
  let mockData = require('./mocklist.json');
  return (
          <View>
            <BookListContainer bookList = {mockData}/>
          </View>

  );
};

export default App;
