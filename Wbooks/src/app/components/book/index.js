import React, {Component} from 'react'
import {
  Image,
  View,
  Text,
} from 'react-native';

import Book from './layout.js';

class BookContainer extends Component {

  render() {
    return(
      <View>
        <Book></Book>
      </View>
    );
  }
}