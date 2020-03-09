import { StyleSheet } from 'react-native';

import { tundora, atlantis, white } from '../../../../../constants/colors';
import { SF_BOLD, SF_LIGHT } from '../../../../../constants/fonts';

const styles = StyleSheet.create({
  bookInfoContainer: {
    marginHorizontal: 20,
    marginTop: 20,
    backgroundColor: white,
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
    fontFamily: SF_LIGHT,
    fontSize: 15,
    lineHeight: 18,
    color: tundora
  },
  title: {
    fontSize: 24,
    lineHeight: 29,
    textAlign: 'left',
    color: tundora
  },
  bookAvailable: {
    fontFamily: SF_BOLD,
    color: atlantis,
    fontSize: 15,
    lineHeight: 18,
    textAlign: 'left'
  },
  bookDetailContainer: {
    width: '75%'
  }
});

export default styles;
