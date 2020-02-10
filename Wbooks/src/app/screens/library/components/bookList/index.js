import React, {Component} from 'react'
import {
  View,
} from 'react-native';
import BookList from './layout.js';

class BookListContainer extends Component {
  render() {

    return(
      <View>
        <BookList bookList = {this.props.bookList} ></BookList>
      </View>
    );
  }
}

export default BookListContainer;