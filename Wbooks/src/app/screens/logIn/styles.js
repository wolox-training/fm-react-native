import { StyleSheet } from 'react-native';

import { white, grey, polar } from '../../../constants/colors';

const LARGE_MARGIN = 50;
const MEDIUM_MARGIN = 35;
const STANDARD_MARGIN = 20;

const styles = StyleSheet.create({
  logInContainer: {
    paddingTop: LARGE_MARGIN,
    height: '110%'
  },
  textInput: {
    marginTop: LARGE_MARGIN,
    marginBottom: LARGE_MARGIN,
    marginHorizontal: LARGE_MARGIN,
    borderColor: grey,
    backgroundColor: polar,
    textAlign: 'center',
    borderWidth: 1,
    height: 40,
    borderRadius: 4
  },
  label: {
    marginTop: MEDIUM_MARGIN,
    marginHorizontal: LARGE_MARGIN,
    color: white,
    fontSize: 16
  }
});

export default styles;
