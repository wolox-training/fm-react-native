import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { compose } from 'redux';

import Book from '../book/index';
import BookActions from '../../../../../redux/book/actions';
import bookModel from '../../../../proptypes/bookModel';
import navigationRoutes from '../../../navigation/routes';

import styles from './styles';

class BookListContainer extends Component {
  handlePress = item => {
    const { isCart, loadBookDetails, navigation } = this.props;
    loadBookDetails(item);
    navigation.navigate('BookDetail', { isCart });
  };

  componentDidMount() {
    const { isCart, getBookList, getRentedBooks } = this.props;
    if (isCart) {
      getRentedBooks();
    } else {
      getBookList();
    }
  }

  renderItem = ({ item }) => <Book book={item} onPress={this.handlePress} />;

  keyExtractor = ({ id }) => `${id}`;

  render() {
    const { bookList, rentedBooks, isCart } = this.props;
    return (
      <View>
        <FlatList
          style={styles.container}
          data={isCart ? rentedBooks : bookList.page}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
        />
      </View>
    );
  }
}

const mapStateToProps = (state, props) => ({
  bookList: state.bookReducer.bookList || [],
  bookDetail: state.bookReducer.bookDetail,
  rentedBooks: state.bookReducer.rentedBooks || [],
  loading: state.bookReducer.bookListLoading || state.bookReducer.rentedBooksLoading,
  isCart: props.route.name === navigationRoutes.MyRentals
});

const mapDispatchToProps = dispatch => ({
  getRentedBooks: () => dispatch(BookActions.getRentedBooks()),
  getBookList: () => dispatch(BookActions.getBookList()),
  loadBookDetails: book => dispatch(BookActions.loadBookDetails(book))
});

BookListContainer.propTypes = {
  bookList: PropTypes.arrayOf(bookModel).isRequired,
  rentedBooks: PropTypes.arrayOf(bookModel).isRequired
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(BookListContainer);
