import PropTypes from 'prop-types';

const propTypes = {
  optionalArray: PropTypes.array,
  optionalBool: PropTypes.bool,
  optionalFunc: PropTypes.func,
  optionalNumber: PropTypes.number,
  optionalObject: PropTypes.object,
  optionalString: PropTypes.string,
  optionalSymbol: PropTypes.symbol,
  optionalBook: PropTypes.shape({
    author: PropTypes.string,
    genre: PropTypes.string,
    id: PropTypes.number,
    image_url: PropTypes.string,
    publisher: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.string
  }),
  optionalArrayOfBooks: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string,
      genre: PropTypes.string,
      id: PropTypes.number,
      image_url: PropTypes.string,
      publisher: PropTypes.string,
      title: PropTypes.string,
      year: PropTypes.string
    })
  )
};

export default propTypes;
