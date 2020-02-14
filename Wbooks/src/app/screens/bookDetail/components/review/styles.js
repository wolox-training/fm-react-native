import { StyleSheet } from 'react-native';

import colors from '../../../../../constants/colors';
import fonts from '../../../../../constants/fonts';

const styles = StyleSheet.create({
  comment: {
    fontFamily: fonts.sfLight,
    fontSize: 15,
    lineHeight: 18,
    marginRight: 18,
    textAlign: 'left',
    color: colors.tundora
  },
  reviewContainer: {
    flexDirection: 'row',
    marginBottom: 10
  },
  profilePicture: {
    width: 45,
    height: 45,
    borderRadius: 50,
    marginVertical: 15,
    marginRight: 20,
    marginLeft: 15
  },
  textContainer: {
    flexDirection: 'column',
    marginTop: 15
  },
  username: {
    color: colors.black2,
    fontSize: 15,
    fontFamily: fonts.sfBold,
    fontWeight: 'bold',
    lineHeight: 18,
    marginRight: 26,
    marginBottom: 3,
    textAlign: 'left'
  }
});

export default styles;
