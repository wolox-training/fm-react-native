import React, { Component } from 'react';
import { FlatList } from 'react-native';

import propTypes from '../../../../proptypes/proptypes';
import Book from '../book/index';

import styles from './styles';

class BookListContainer extends Component {
  renderItem = ({ item }) => <Book book={item} />;

  keyExtractor = item => item.id.toString();

  render() {
    const { bookList } = this.props; 
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

BookListContainer.propTypes = {
  bookList: propTypes.optionalArrayOfBooks
};
export default BookListContainer;
