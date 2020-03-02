import { StyleSheet } from 'react-native';

import { white } from '../../../../../constants/colors/';

const LARGE_MARGIN = 30;
const MEDIUM_MARGIN = 20;
const STANDARD_MARGIN = 10;

const styles = StyleSheet.create({
  reviewsContainer: {
    backgroundColor: white,
    marginTop: STANDARD_MARGIN,
    marginHorizontal: MEDIUM_MARGIN,
    marginBottom: LARGE_MARGIN,
    borderRadius: 5
  }
});

export default styles;
