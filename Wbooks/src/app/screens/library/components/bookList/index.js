import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Book from '../book/index';
import BookActions from '../../../../../redux/book/actions';
import bookModel from '../../../../proptypes/bookModel';

import styles from './styles';

class BookListContainer extends Component {
  handlePress = item => {
    const { navigation, loadBook } = this.props;
    loadBook(item);
    navigation.navigate('BookDetail', { navigation });
  };

  renderItem = ({ item }) => <Book book={item} onPress={this.handlePress} />;

  keyExtractor = item => item.id.toString();

  componentDidMount() {
    this.props.getBookList(BookActions.getBookList());
  }

  render() {
    return (
      <View>
        <FlatList
          style={styles.container}
          data={this.props.bookList}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  bookList: state.bookReducer.bookList,
  bookDetail: state.bookReducer.bookDetail
});

function mapDispatchToProps(dispatch) {
  return {
    getBookList: () => dispatch(BookActions.getBookList()),
    loadBook: book => dispatch(BookActions.loadBookDetails(book))
  };
}

BookListContainer.propTypes = {
  bookList: PropTypes.arrayOf(bookModel),
  getBookList: PropTypes.func,
  loadBook: PropTypes.func,
  navigation: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(BookListContainer);
