import React from 'react';
import { View, Image, Text } from 'react-native';
import PropTypes from 'prop-types';

import reviewModel from '../../../../proptypes/reviewModel';

import styles from './styles';

function Review({ review }) {
  return (
    <View style={styles.reviewContainer}>
      <Image source={{ uri: review.profilePicture }} style={styles.profilePicture} />
      <View style={styles.textContainer}>
        <Text style={styles.username}>{review.user.name + review.user.surname}</Text>
        <Text style={styles.comment}>{review.comment}</Text>
      </View>
    </View>
  );
}

Review.propTypes = {
  review: PropTypes.shape(reviewModel)
};

export default Review;
