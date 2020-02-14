import { StyleSheet } from 'react-native';

import colors from '../../../../../constants/colors';
import fonts from '../../../../../constants/fonts';

const styles = StyleSheet.create({
  bookInfoContainer: {
    marginHorizontal: 20,
    marginTop: 20,
    backgroundColor: colors.white,
    borderRadius: 5
  },
  bookDataContainer: {
    flexDirection: 'row',
    marginBottom: 30,
    marginTop: 8
  },
  bookCover: {
    height: 105,
    width: '20%',
    marginLeft: 30,
    marginRight: 20
  },
  description: {
    fontFamily: fonts.sfLight,
    fontSize: 15,
    lineHeight: 18,
    color: colors.tundora
  },
  title: {
    fontSize: 24,
    lineHeight: 29,
    textAlign: 'left',
    color: colors.tundora
  },
  bookAvailable: {
    fontFamily: fonts.sfBold,
    color: colors.atlantis,
    fontSize: 15,
    lineHeight: 18,
    textAlign: 'left'
  },
  bookDetailContainer: {
    width: '75%'
  }
});

export default styles;
