import React from 'react';
import { Image, View, Text } from 'react-native';

import styles from './styles';

function Book({ props }) {
  return (
    <View style={styles.bookContainer}>
      <Image source={{ uri: props.image_url }} style={styles.cover} />
      <View style={styles.descriptionContainer}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.author}>{props.author}</Text>
      </View>
    </View>
  );
}

export default Book;
