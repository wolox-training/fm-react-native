import React from 'react';
import { ImageBackground, View, Text } from 'react-native';
import PropTypes from 'prop-types';

function CustomHeaderContainer({ title }) {
  return (
    <View>
      <ImageBackground
        style={{ width: '100%', height: 100, position: 'absolute', top: 0, left: 0 }}
        source={require('./../../../../assets/bc_nav_bar.png')}
        resizeMode="cover"
      >
        <Text>{title}</Text>
      </ImageBackground>
    </View>
  );
}

CustomHeaderContainer.prototypes = {
  title: PropTypes.string
};

export default CustomHeaderContainer;
