import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './styles';

function BookDetailButton({ solid, title, onPress }) {
  return (
    <View style={solid ? styles.solidButton : styles.shallowButton}>
      <TouchableOpacity onPress={onPress}>
        <Text style={solid ? styles.solidButtonText : styles.shallowButtonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

BookDetailButton.propTypes = {
  solid: PropTypes.bool,
  title: PropTypes.string
};

export default BookDetailButton;
