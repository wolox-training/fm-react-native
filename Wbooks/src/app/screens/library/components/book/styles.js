import { StyleSheet } from 'react-native';

import fonts from '../../../../../constants/fonts';
import colors from '../../../../../constants/colors';

const styles = StyleSheet.create({
  author: {
    fontSize: 15,
    lineHeight: 18,
    fontFamily: fonts.bookDescription,
    fontWeight: '300',
    letterSpacing: -0.24,
    marginRight: 25,
    textAlign: 'left'
  },
  bookContainer: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: colors.white,
    height: 90,
    marginHorizontal: 20,
    marginBottom: 10
  },
  cover: {
    width: 40,
    height: 60,
    marginVertical: 15,
    marginLeft: 30,
    marginRight: 20
  },
  descriptionContainer: {
    flexDirection: 'column',
    marginTop: 15
  },
  title: {
    color: colors.black2,
    fontSize: 17,
    fontFamily: fonts.sfLight,
    fontWeight: 'bold',
    letterSpacing: -0.41,
    lineHeight: 20,
    marginRight: 26,
    marginBottom: 3,
    textAlign: 'left'
  }
});

export default styles;
