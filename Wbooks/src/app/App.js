/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

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
    <NavigationContainer>
          <View>
            <BookListContainer bookList = {mockData}/>
          </View>
    </NavigationContainer>

  );
};

export default App;
