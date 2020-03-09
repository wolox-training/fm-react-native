import React from 'react';
import { ImageBackground, View, Text, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const Icons = {
  Search: () => require('./assets/ic_search.png'),
  Notifications: () => require('./assets/ic_notifications.png'),
  Back: () => require('./assets/ic_back.png')
};

function CustomHeaderContainer({ title, leftButton, rightButton }) {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={require('./assets/bc_nav_bar.png')} resizeMode="cover">
        {leftButton ? (
          <TouchableOpacity>
            <Image style={styles.leftButton} source={Icons[leftButton]()} />
          </TouchableOpacity>
        ) : (
          <View style={styles.leftButton} />
        )}
        <Text style={styles.title}>{title}</Text>
        {rightButton ? (
          <TouchableOpacity>
            <Image style={styles.rightButton} source={Icons[rightButton]()} />
          </TouchableOpacity>
        ) : (
          <View style={styles.rightButton} />
        )}
      </ImageBackground>
    </View>
  );
}

CustomHeaderContainer.propTypes = {
  leftButton: PropTypes.string,
  rightButton: PropTypes.string,
  title: PropTypes.string
};

export default CustomHeaderContainer;
