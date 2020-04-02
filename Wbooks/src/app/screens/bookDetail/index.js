import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';

import bookModel from '../../proptypes/bookModel';
import BookActions from '../../../redux/book/actions';

import BookInformation from './components/bookInformation';
import styles from './styles';
import ReviewsList from './components/reviewsList';
import reviewsMock from './reviewsmock.json';

class BookDetailContainer extends Component {
  handleAddComment = () => {
    const { addComment, bookDetail } = this.props;
    addComment(bookDetail);
  };

  handleAddToWishList = () => {
    const { bookDetail, addToWishList } = this.props;
    addToWishList(bookDetail);
  };

  handleRentBook = () => {
    const { bookDetail, rentBook } = this.props;
    rentBook(bookDetail);
  };

  handleReturnBook = () => {
    const { returnBook, bookDetail } = this.props;
    returnBook(bookDetail);
  };

  render() {
    const { bookDetail, isRented, isCart } = this.props;
    const reviews = reviewsMock;
    return (
      <ScrollView style={styles.bookDetailContainer}>
        <BookInformation
          bookDetail={bookDetail}
          isCart={isCart}
          isRented={isRented}
          onPressButtonAdd={isCart ? this.handleAddComment : this.handleAddToWishList}
          onPressButtonBookStatus={isCart ? this.handleReturnBook : this.handleRentBook}
        />
        <ReviewsList reviews={reviews} />
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  const { bookDetail, wishList, rentedBooks } = state.bookReducer;
  const isRented = rentedBooks.some(({ id }) => id === bookDetail.id);
  return {
    bookDetail,
    isRented,
    wishList
  };
};

function mapDispatchToProps(dispatch) {
  return {
    addToWishList: book => dispatch(BookActions.addToWishList(book)),
    rentBook: book => dispatch(BookActions.rentBook(book)),
    returnBook: book => dispatch(BookActions.returnBook(book)),
    addComment: book => dispatch(BookActions.addComment(book))
  };
}

BookDetailContainer.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.func.isRequired
  }).isRequired,
  addComment: PropTypes.func,
  addToWishList: PropTypes.func,
  bookDetail: PropTypes.shape(bookModel),
  isCart: PropTypes.bool,
  rentBook: PropTypes.func,
  returnBook: PropTypes.func
};
export default connect(mapStateToProps, mapDispatchToProps)(BookDetailContainer);
