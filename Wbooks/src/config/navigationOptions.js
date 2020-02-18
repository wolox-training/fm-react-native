import React from 'react';
import { Image } from 'react-native';

import colors from '../constants/colors';
import CustomHeaderContainer from '../app/screens/navigation/components/customHeader';

export const defaultNavOptions = {
  headerTitle: 'title',
  header: props => <CustomHeaderContainer title="titulo" />,
  headerStyle: {
    backgroundColor: 'transparent '
  },
  headerTintColor: colors.atlantis,
  headerBackTitle: 'back'
};
