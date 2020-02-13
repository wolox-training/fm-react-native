import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  comment: {
    fontFamily: 'SF UI Text Light',
    fontSize: 15,
    lineHeight: 18,
    marginRight: 18,
    textAlign: 'left'
  },
  reviewContainer: {
    display: 'flex',
    flexDirection: 'row',
    height: 90,
    marginHorizontal: 20,
    marginBottom: 10
  },
  profilePicture: {
    width: 40,
    height: 60,
    marginVertical: 15,
    marginRight: 20,
    marginLeft: 15
  },
  textContainer: {
    flexDirection: 'column',
    marginTop: 15
  },
  username: {
    color: '#030303',
    fontSize: 15,
    fontFamily: 'SF UI Text Bold',
    fontWeight: 'bold',
    lineHeight: 18,
    marginRight: 26,
    marginBottom: 3,
    textAlign: 'left'
  }
});

export default styles;
