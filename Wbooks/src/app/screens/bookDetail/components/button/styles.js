import { StyleSheet } from 'react-native';

import colors from '../../../../../constants/colors';
import fonts from '../../../../../constants/fonts';

const styles = StyleSheet.create({
  shallowButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 100,
    height: 44,
    marginHorizontal: 30,
    marginBottom: 10,
    width: 275,
    borderColor: colors.turquoise,
    backgroundColor: colors.white
  },
  solidButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 100,
    height: 44,
    marginHorizontal: 30,
    marginBottom: 10,
    width: 275,
    borderColor: colors.turquoise,
    backgroundColor: colors.cerulean
  },
  shallowButtonText: {
    fontFamily: fonts.sfHeavy,
    color: colors.cerulean,
    fontSize: 15,
    fontWeight: 'bold',
    lineHeight: 19,
    textAlign: 'center'
  },
  solidButtonText: {
    fontFamily: fonts.sfHeavy,
    color: colors.white,
    fontSize: 15,
    fontWeight: 'bold',
    lineHeight: 19,
    textAlign: 'center'
  }
});

export default styles;
