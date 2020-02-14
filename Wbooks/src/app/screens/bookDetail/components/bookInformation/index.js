import React from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';

import BookDetailButton from '../button/index';
import bookModel from '../../../../proptypes/bookModel';

import styles from './styles';

function BookInformation({ book, available }) {
  const { image_url: imageUrl, title, author, genre, year } = book;
  return (
    <View style={styles.bookInfoContainer}>
      <View style={styles.bookDataContainer}>
        <Image
          source={{
            uri: imageUrl
          }}
          style={styles.bookCover}
        />
        <View style={styles.bookDetailContainer}>
          <Text style={styles.title} ellipsizeMode="tail">
            {title}
          </Text>
          <Text style={available ? styles.bookAvailable : styles.bookAvailable}>
            {available ? 'Available' : 'Not Available'}
          </Text>
          <Text style={styles.description}>{author}</Text>
          <Text style={styles.description}>{year}</Text>
          <Text style={styles.description}>{genre}</Text>
        </View>
      </View>
      <BookDetailButton title="ADD TO WISHLIST" />
      <BookDetailButton solid title="RENT" />
    </View>
  );
}

BookInformation.propTypes = {
  available: PropTypes.bool,
  book: PropTypes.shape(bookModel),
  genre: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.string
};

export default BookInformation;
