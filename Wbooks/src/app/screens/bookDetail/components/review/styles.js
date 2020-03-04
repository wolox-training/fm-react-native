import { StyleSheet } from 'react-native';

import { tundora, black2 } from '../../../../../constants/colors/';
import { sfLight, sfBold } from '../../../../../constants/fonts/';

const MEDIUM_MARGIN = 20;
const STANDARD_MARGIN = 15;
const STANDARD_FONT_SIZE = 15;

const styles = StyleSheet.create({
  comment: {
    fontFamily: sfLight,
    fontSize: STANDARD_FONT_SIZE,
    lineHeight: 18,
    marginRight: STANDARD_MARGIN,
    textAlign: 'left',
    color: tundora
  },
  reviewContainer: {
    flexDirection: 'row',
    marginBottom: 10
  },
  profilePicture: {
    width: 45,
    height: 45,
    borderRadius: 50,
    marginVertical: STANDARD_MARGIN,
    marginRight: MEDIUM_MARGIN,
    marginLeft: STANDARD_MARGIN
  },
  textContainer: {
    flexDirection: 'column',
    marginTop: STANDARD_MARGIN
  },
  username: {
    color: black2,
    fontSize: STANDARD_FONT_SIZE,
    fontFamily: sfBold,
    fontWeight: 'bold',
    lineHeight: 18,
    marginRight: 25,
    marginBottom: 3,
    textAlign: 'left'
  }
});

export default styles;
