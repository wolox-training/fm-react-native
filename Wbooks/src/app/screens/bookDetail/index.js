import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';

import bookModel from '../../proptypes/bookModel';
import reviewModel from '../../proptypes/reviewModel';
import BookActions from '../../../redux/book/actions';

import BookInformation from './components/bookInformation';
import styles from './styles';
import ReviewsList from './components/reviewsList';
import reviewsMock from './reviewsmock.json';

function BookDetailContainer({ route, bookDetail }) {
  const { isCart } = route.params;
  const reviews = reviewsMock;
  return (
    <ScrollView style={styles.bookDetailContainer}>
      <BookInformation bookDetail={bookDetail} isCart={isCart} />
      <ReviewsList reviews={reviews} />
    </ScrollView>
  );
}

const mapStateToProps = state => ({
  bookDetail: state.bookReducer.bookDetail,
  rentedBooks: state.bookReducer.rentedBooks,
  whishList: state.bookReducer.wishList
});

function mapDispatchToProps(dispatch) {
  return {
    addToWishList: book => dispatch(BookActions.addToWishList(book)),
    rentBook: book => dispatch(BookActions.rentBook(book))
  };
}

BookDetailContainer.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.func.isRequired
  }).isRequired,
  book: PropTypes.shape(bookModel),
  reviews: PropTypes.arrayOf(PropTypes.shape(reviewModel))
};
export default connect(mapStateToProps, mapDispatchToProps)(BookDetailContainer);
