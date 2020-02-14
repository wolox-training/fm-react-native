import React, { Component } from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';

import reviewModel from '../../../../proptypes/reviewModel';
import Review from '../review';

import styles from './styles';

class ReviewsList extends Component {
  renderItem = ({ item }) => <Review review={item} />;

  keyExtractor = item => item.id.toString();

  render() {
    const { reviews } = this.props;
    return (
      <FlatList
        style={styles.reviewsContainer}
        data={reviews}
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
      />
    );
  }
}

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape(reviewModel))
};

export default ReviewsList;
