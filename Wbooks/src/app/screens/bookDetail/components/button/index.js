import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './styles';

function BookDetailButton({ solid, title, onPress, disableButton }) {
  return (
    <View style={disableButton ? styles.disabledButton : solid ? styles.solidButton : styles.shallowButton}>
      <TouchableOpacity onPress={onPress} disabled={disableButton}>
        <Text style={solid ? styles.solidButtonText : styles.shallowButtonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

BookDetailButton.propTypes = {
  disableButton: PropTypes.bool,
  solid: PropTypes.bool,
  title: PropTypes.string,
  onPress: PropTypes.func
};

BookDetailButton.defaultProps = {
  disableButton: false
};

export default BookDetailButton;
