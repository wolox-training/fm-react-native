import { StyleSheet } from 'react-native';

import { SF_BOLD, SF_LIGHT } from '../../../../../constants/fonts';
import { black, white } from '../../../../../constants/colors';

const LARGE_MARGIN = 30;
const MEDIUM_MARGIN = 20;
const STANDARD_MARGIN = 15;

const styles = StyleSheet.create({
  author: {
    fontSize: 15,
    lineHeight: 18,
    fontFamily: SF_BOLD,
    fontWeight: '300',
    letterSpacing: -0.24,
    marginRight: 25,
    textAlign: 'left'
  },
  bookContainer: {
    display: 'flex',
    flexDirection: 'row',
    height: 90,
    marginHorizontal: MEDIUM_MARGIN,
    marginBottom: STANDARD_MARGIN,
    backgroundColor: white
  },
  cover: {
    width: 40,
    height: 60,
    marginVertical: STANDARD_MARGIN,
    marginLeft: LARGE_MARGIN,
    marginRight: MEDIUM_MARGIN
  },
  descriptionContainer: {
    flexDirection: 'column',
    marginTop: STANDARD_MARGIN
  },
  title: {
    color: black,
    fontSize: 17,
    fontFamily: SF_LIGHT,
    fontWeight: 'bold',
    letterSpacing: -0.41,
    lineHeight: 20,
    marginRight: MEDIUM_MARGIN,
    marginBottom: 3,
    textAlign: 'left'
  }
});

export default styles;
