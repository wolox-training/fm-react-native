import React from 'react';
import { View, Image, Text } from 'react-native';
import PropTypes from 'prop-types';

import bookModel from '../../../../proptypes/bookModel';

import styles from './styles';

function Book({ book: { image_url: imageUrl, title, author } }) {
  return (
    <View style={styles.bookContainer}>
      <Image source={{ uri: imageUrl }} style={styles.cover} />
      <View style={styles.descriptionContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.author}>{author}</Text>
      </View>
    </View>
  );
}

Book.propTypes = {
  book: PropTypes.shape(bookModel)
};

export default Book;
