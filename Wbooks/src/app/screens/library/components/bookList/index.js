import React, { Component } from 'react';
import { FlatList } from 'react-native';

import propTypes from '../../../../proptypes/proptypes';
import Book from '../book/index';

import styles from './styles';

class BookListContainer extends Component {
  renderItem = ({ item }) => <Book book={item} />;

  keyExtractor = item => item.id.toString();

  render() {
    console.log(this.props.bookList);
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

BookListContainer.propTypes = {
  bookList: propTypes.optionalArrayOfBooks
};
export default BookListContainer;
