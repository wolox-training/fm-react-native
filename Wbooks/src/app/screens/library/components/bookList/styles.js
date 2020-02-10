import { StyleSheet } from 'react-native';

import colors from './colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.listBackground,
    paddingTop: 16,
    borderRadius: 5,
    shadowOffset: { width: 0, height: 1 },
    shadowColor: colors.itemsShadow
  }
});

export default styles;
