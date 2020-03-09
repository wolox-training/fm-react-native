import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';

import BookDetailButton from '../button/index';
import bookModel from '../../../../proptypes/bookModel';

import styles from './styles';

function BookInformation({ handleRentBook, addToWishList, bookDetail, available, isCart }) {
  const { image_url: imageUrl, title, author, genre, year } = bookDetail;

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
          <Text style={available ? styles.bookAvailable : styles.bookUnavailable}>
            {available ? 'Available' : 'Not Available'}
          </Text>
          <Text style={styles.description}>{author}</Text>
          <Text style={styles.description}>{year}</Text>
          <Text style={styles.description}>{genre}</Text>
        </View>
      </View>
      <BookDetailButton title={isCart ? 'ADD A COMMENT' : 'ADD TO WISHLIST'} onPress={addToWishList} />
      <BookDetailButton solid title={isCart ? 'RETURN BOOK' : 'RENT'} onPress={handleRentBook} />
    </View>
  );
}

BookInformation.propTypes = {
  addToWishList: PropTypes.func,
  author: PropTypes.string,
  available: PropTypes.bool,
  bookDetail: PropTypes.shape(bookModel),
  genre: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.string
};

export default BookInformation;
