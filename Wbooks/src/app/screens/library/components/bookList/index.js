import React, { Component } from 'react';
import { FlatList } from 'react-native';

import Book from '../book/index';
import mockData from '../../../../mocklist.json';

import styles from './styles';

class BookListContainer extends Component {
  renderItem = ({ item }) => <Book book={item} navigation={this.props.navigation} />;

  keyExtractor = item => item.id.toString();

  render() {
    const bookList = mockData;
    return (
      <FlatList
        style={styles.container}
        data={bookList}
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
      />
    );
  }
}

export default BookListContainer;
