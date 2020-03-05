import React, { useEffect, useCallback } from 'react';
import { FlatList, View } from 'react-native';
import { connect, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useNavigationState } from '@react-navigation/native';

import Book from '../book/index';
import BookActions from '../../../../../redux/book/actions';
import bookModel from '../../../../proptypes/bookModel';

import styles from './styles';

function BookListContainer({ navigation, bookList }) {
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

  const keyExtractor = ({ id }) => id.toString();

  useEffect(() => {
    dispatch(BookActions.getBookList());
  }, [dispatch]);

  return (
    <View>
      <FlatList
        style={styles.container}
        data={bookList}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
}

const mapStateToProps = state => ({
  bookList: state.bookReducer.bookList,
  bookDetail: state.bookReducer.bookDetail
});

BookListContainer.propTypes = {
  bookList: PropTypes.arrayOf(bookModel),
  navigation: PropTypes.func
};

export default connect(mapStateToProps)(BookListContainer);
