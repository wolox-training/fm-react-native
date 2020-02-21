import { StyleSheet } from 'react-native';

import  { turquoise, white, cerulean } from '../../../../../constants/colors';
import fonts from '../../../../../constants/fonts';

const BUTTON_BORDER_RADIUS = 100;
const BUTTON_WIDTH = 275;
const LARGE_MARGIN = 30;
const STANDARD_MARGIN = 10;

const styles = StyleSheet.create({
  shallowButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: BUTTON_BORDER_RADIUS,
    height: 44,
    marginHorizontal: LARGE_MARGIN,
    marginBottom: STANDARD_MARGIN,
    width: BUTTON_WIDTH,
    borderColor: turquoise,
    backgroundColor: white
  },
  solidButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: BUTTON_BORDER_RADIUS,
    height: 44,
    marginHorizontal: LARGE_MARGIN,
    marginBottom: STANDARD_MARGIN,
    width: BUTTON_WIDTH,
    borderColor: turquoise,
    backgroundColor: cerulean
  },
  shallowButtonText: {
    fontFamily: fonts.sfHeavy,
    color: cerulean,
    fontSize: 15,
    fontWeight: 'bold',
    lineHeight: 19,
    textAlign: 'center'
  },
  solidButtonText: {
    fontFamily: fonts.sfHeavy,
    color: white,
    fontSize: 15,
    fontWeight: 'bold',
    lineHeight: 19,
    textAlign: 'center'
  }
});

export default styles;
