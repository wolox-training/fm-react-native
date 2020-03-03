import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import BookDetailButton from '../button/index';
import bookModel from '../../../../proptypes/bookModel';
import BookActions from '../../../../../redux/book/actions';

import styles from './styles';

class BookInformation extends Component {
  handleRentBook = () => {
    console.log(this.props);
  };

  render() {
    const { image_url: imageUrl, title, author, genre, year } = this.props.bookDetail;
    const { available } = this.props;
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
        <BookDetailButton title="ADD TO WISHLIST" onPress={() => this.handleRentBook()} />
        <BookDetailButton solid title="RENT" onPress={this.handleRentBook} />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  bookDetail: state.bookReducer.bookDetail,
  rentedBooks: state.bookReducer.rentedBooks,
  whishList: state.bookReducer.wishList
});

function mapDispatchToProps(dispatch) {
  return {
    addToWishlist: book => dispatch(BookActions.addToWishlist(book)),
    rentBook: book => dispatch(BookActions.rentBook(book))
  };
}

BookInformation.propTypes = {
  available: PropTypes.bool,
  bookDetail: PropTypes.shape(bookModel),
  genre: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.string
};

export default connect(mapStateToProps, mapDispatchToProps)(BookInformation);
