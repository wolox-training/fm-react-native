import React, { Component } from 'react';
import { View, FlatList } from 'react-native';

import Book from '../book/index.js';

import styles from './styles.js';

class BookList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.bookList}
          renderItem={({ item }) => <Book style={styles.listItem} book={item} />}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    );
  }
}

export default BookList;
