import { StyleSheet } from 'react-native';

import colors from '../../../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.polar,
    paddingTop: 116,
    borderRadius: 5,
    shadowOffset: { width: 0, height: 1 },
    shadowColor: colors.tundora
  }
});

export default styles;
