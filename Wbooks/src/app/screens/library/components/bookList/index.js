import React, { Component } from 'react';
import { View } from 'react-native';

import BookList from './layout';

class BookListContainer extends Component {
  render() {
    return (
      <View>
        <BookList bookList={this.props.bookList} />
      </View>
    );
  }
}

export default BookListContainer;
