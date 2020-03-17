import { StyleSheet, Platform } from 'react-native';

import { polar, white } from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: polar
  },
  image: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: 100,
    paddingTop: Platform.OS === 'ios' ? 20 : 0
  },
  title: {
    fontSize: 17,
    color: white,
    lineHeight: 20,
    marginTop: 20,
    justifyContent: 'center'
  },
  leftButton: {
    marginTop: 20,
    marginLeft: 12,
    width: 20,
    height: 20
  },
  rightButton: {
    marginTop: 20,
    marginRight: 12,
    width: 20,
    height: 20
  }
});

export default styles;
