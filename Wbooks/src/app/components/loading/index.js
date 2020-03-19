import React from 'react';
import { ActivityIndicator } from 'react-native';

import { atlantis } from '../../../constants/colors';

import styles from './styles';

const withLoadingScreen = Component => ({ loading, ...props }) => {
  return loading ? (
    <ActivityIndicator style={styles.loading} size="large" color={atlantis} />
  ) : (
    <Component {...props} />
  );
};

export default withLoadingScreen;
