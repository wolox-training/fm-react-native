import React from 'react';
import { View, Image, Text } from 'react-native';

import propTypes from '../../../../proptypes/proptypes';

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
  author: propTypes.optionalString,
  book: propTypes.optionalBook,
  title: propTypes.optionalString
};

export default Book;
