import React, { Component } from 'react';
import { View, Image, Text, TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';

import bookModel from '../../../../proptypes/bookModel';

import styles from './styles';

class Book extends Component {
  handlePress = () => {
    console.log('--------');
    const { navigation, book } = this.props;
    navigation.navigate('BookDetail', { book });
  };

  render() {
    const {
      book: { image_url: imageUrl, title, author }
    } = this.props;

    return (
      <TouchableWithoutFeedback style={styles.bookContainer} onPress={this.handlePress}>
        <>
          <Image source={{ uri: imageUrl }} style={styles.cover} />
          <View style={styles.descriptionContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.author}>{author}</Text>
          </View>
        </>
      </TouchableWithoutFeedback>
    );
  }
}

Book.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired,
  book: PropTypes.shape(bookModel)
};

export default Book;
