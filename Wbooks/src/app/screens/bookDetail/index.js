import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native-gesture-handler';

import bookModel from '../../proptypes/bookModel';
import reviewModel from '../../proptypes/reviewModel';

import BookInformation from './components/bookInformation';
import styles from './styles';
import ReviewsList from './components/reviewsList';
import reviewsMock from './reviewsmock.json';

function BookDetailContainer({ route }) {
  const { book } = route.params;
  return (
    <ScrollView style={styles.bookDetailContainer}>
      <BookInformation book={book} />
      <ReviewsList reviews={reviewsMock} />
    </ScrollView>
  );
}

BookDetailContainer.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.func.isRequired
  }).isRequired,
  book: PropTypes.shape(bookModel),
  reviews: PropTypes.arrayOf(PropTypes.shape(reviewModel))
};
export default BookDetailContainer;
