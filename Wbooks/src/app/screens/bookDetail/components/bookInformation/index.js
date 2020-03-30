import React from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';

import BookDetailButton from '../button/index';
import bookModel from '../../../../proptypes/bookModel';

import styles from './styles';

function BookInformation({
  onPressButtonBookStatus,
  onPressButtonAdd,
  bookDetail,
  available,
  isCart,
  isRented
}) {
  const { image, title, author, genre, year } = bookDetail;
  const disableButton = !isCart && isRented;
  return (
    <View style={styles.bookInfoContainer}>
      <View style={styles.bookDataContainer}>
        <Image
          source={{
            uri: image
          }}
          style={styles.bookCover}
        />
        <View style={styles.bookDetailContainer}>
          <Text style={styles.title} ellipsizeMode="tail">
            {title}
          </Text>
          <Text style={available ? styles.bookAvailable : styles.bookUnavailable}>
            {available ? 'Available' : 'Not Available'}
          </Text>
          <Text style={styles.description}>{author}</Text>
          <Text style={styles.description}>{year}</Text>
          <Text style={styles.description}>{genre}</Text>
        </View>
      </View>
      <BookDetailButton title={isCart ? 'ADD A COMMENT' : 'ADD TO WISHLIST'} onPress={onPressButtonAdd} />
      <BookDetailButton
        solid
        title={isCart ? 'RETURN BOOK' : 'RENT'}
        onPress={onPressButtonBookStatus}
        disableButton={!!disableButton}
      />
    </View>
  );
}

BookInformation.propTypes = {
  author: PropTypes.string,
  available: PropTypes.bool,
  bookDetail: PropTypes.shape(bookModel),
  genre: PropTypes.string,
  isCart: PropTypes.bool,
  isRented: PropTypes.bool,
  title: PropTypes.string,
  year: PropTypes.string,
  onPressButtonAdd: PropTypes.func,
  onPressButtonBookStatus: PropTypes.func
};

export default BookInformation;
