import React, {Component} from 'react'
import {
  Image,
  View,
  Text,
} from 'react-native';

import Book from './layout.js';
class BookContainer extends Component {
  render() {
    let book = this.props.book;
    return(
      <View>
        <Book title = {book.title} author = {book.author} image_url = {book.image_url}></Book>
      </View>
    );
  }
}

export default BookContainer;