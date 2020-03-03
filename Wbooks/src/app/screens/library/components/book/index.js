import React, { Component } from 'react';
import { View, Image, Text, TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import bookModel from '../../../../proptypes/bookModel';
import BookActions from '../../../../../redux/book/actions';

import styles from './styles';

class Book extends Component {
  handlePress = () => this.props.onPress(this.props.book);

  render() {
    const {
      book: { image_url: imageUrl, title, author }
    } = this.props;

    return (
      <TouchableWithoutFeedback onPress={this.handlePress}>
        <View style={styles.bookContainer}>
          <Image source={{ uri: imageUrl }} style={styles.cover} />
          <View style={styles.descriptionContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.author}>{author}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const mapStateToProps = state => ({
  bookDetail: state.bookDetail
});

function mapDispatchToProps(dispatch) {
  return {
    loadBook: book => dispatch(BookActions.loadBookDetails(book))
  };
}

Book.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired,
  book: PropTypes.shape(bookModel),
  onPress: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Book);
