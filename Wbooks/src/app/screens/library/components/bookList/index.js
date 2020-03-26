import React, { useEffect, useCallback } from 'react';
import { FlatList, View } from 'react-native';
import { connect, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useNavigationState } from '@react-navigation/native';
import { compose } from 'redux';

import Book from '../book/index';
import BookActions from '../../../../../redux/book/actions';
import bookModel from '../../../../proptypes/bookModel';
import withLoadingScreen from '../../../../components/loading/index';

import styles from './styles';

function BookListContainer({ navigation, bookList, rentedBooks }) {
  const dispatch = useDispatch();
  const navigationState = useNavigationState(state => state);
  const isCart = navigationState.routes[navigationState.index].name === 'MyRentals';
  const handlePress = useCallback(
    item => {
      dispatch(BookActions.loadBookDetails(item));
      navigation.navigate('BookDetail', { navigation, isCart });
    },
    [dispatch, isCart, navigation]
  );

  const renderItem = useCallback(({ item }) => <Book book={item} onPress={handlePress} />, [handlePress]);

  const keyExtractor = ({ id }) => `${id}`;

  const fetchBooks = useCallback(
    () => (isCart ? dispatch(BookActions.getRentedBooks()) : dispatch(BookActions.getBookList())),
    [dispatch, isCart]
  );

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  return (
    <View>
      <FlatList
        style={styles.container}
        data={isCart ? rentedBooks : bookList}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
}

const mapStateToProps = state => ({
  bookList: state.bookReducer.bookList,
  bookDetail: state.bookReducer.bookDetail,
  rentedBooks: state.bookReducer.rentedBooks,
  loading: state.bookReducer.bookListLoading || state.bookReducer.rentedBooksLoading
});

BookListContainer.propTypes = {
  bookList: PropTypes.arrayOf(bookModel).isRequired,
  navigation: PropTypes.func.isRequired,
  rentedBooks: PropTypes.arrayOf(bookModel).isRequired
};

export default compose(connect(mapStateToProps), withLoadingScreen)(BookListContainer);
