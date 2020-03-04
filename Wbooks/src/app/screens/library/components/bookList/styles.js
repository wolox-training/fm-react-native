import { StyleSheet } from 'react-native';

import { polar, tundora } from '../../../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: polar,
    paddingTop: 16,
    borderRadius: 5,
    shadowOffset: { width: 0, height: 1 },
    shadowColor: tundora
  }
});

export default styles;
