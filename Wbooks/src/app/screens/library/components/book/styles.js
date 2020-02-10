import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  author: {
    fontSize: 15,
    lineHeight: 18,
    fontFamily: 'SF UI Text Bold',
    fontWeight: '300',
    letterSpacing: -0.24,
    marginRight: 26,
    textAlign: 'left'
  },
  bookContainer: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    height: 90,
    marginHorizontal: 20,
    marginBottom: 10
  },
  cover: {
    width: 40,
    height: 60,
    marginVertical: 15,
    marginLeft: 30,
    marginRight: 19
  },
  descriptionContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginTop: 15
  },
  title: {
    color: '#4A4A4A',
    fontSize: 17,
    fontFamily: 'SF UI Text Bold',
    fontWeight: 'bold',
    letterSpacing: -0.41,
    lineHeight: 20,
    marginRight: 26,
    marginBottom: 3,
    textAlign: 'left',
  }
});

export default styles;
