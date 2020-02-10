import React, { Component } from 'react';
import { View, FlatList } from 'react-native';

import Book from '../book/index';

import styles from './styles';

class BookList extends Component {
  renderItem = ({ item }) => <Book style={styles.listItem} book={item} />;

  keyExtractor = ({ item }) => item.id.toString();

  render() {
    return (
      <FlatList
        style={styles.container}
        data={this.props.bookList}
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
      />
    );
  }
}

export default BookList;
