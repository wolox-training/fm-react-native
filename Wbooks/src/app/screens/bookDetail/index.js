import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import bookModel from '../../proptypes/bookModel';
import reviewModel from '../../proptypes/reviewModel';

import BookInformation from './components/bookInformation';
import styles from './styles';
import ReviewsList from './components/reviewsList';

function BookDetailContainer({ book, reviews }) {
  return (
    <View>
      <BookInformation style={styles.bookInformation} book={book} />
      <ReviewsList style={styles.reviewsList} reviews={reviews} />
    </View>
  );
}

BookDetailContainer.propTypes = {
  book: PropTypes.shape(bookModel),
  reviews: PropTypes.arrayOf(PropTypes.shape(reviewModel))
};
export default BookDetailContainer;
