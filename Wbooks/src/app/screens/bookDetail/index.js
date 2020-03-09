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
  handleButton1 = () => {
    const { isCart, addComment, bookDetail, addToWishList } = this.props;
    if (isCart) {
      addComment(bookDetail);
    } else {
      addToWishList(bookDetail);
    }
  };

  hanldeButton2 = () => {
    const { isCart, returnBook, bookDetail, rentBook } = this.props;

    if (isCart) {
      returnBook(bookDetail);
    } else {
      rentBook(bookDetail);
    }
  };

  render() {
    const { route, bookDetail, isRented } = this.props;
    const { isCart } = route.params;
    const reviews = reviewsMock;
    return (
      <ScrollView style={styles.bookDetailContainer}>
        <BookInformation
          bookDetail={bookDetail}
          isCart={isCart}
          isRented={isRented}
          onPressButton1={this.handleButton1}
          onPressButton2={this.hanldeButton2}
        />
        <ReviewsList reviews={reviews} />
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  const { bookDetail, wishList, rentedBooks } = state.bookReducer;
  const isRented = rentedBooks.filter(({ id }) => id === bookDetail.id).length > 0;
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
