import { bool, number, string, array, bool, shape, arrayOf } from 'prop-types';

const propTypes = {

  optionalArray: array,
  optionalBool: bool,
  optionalNumber: number,
  optionalString: string,
  optionalSymbol: symbol,

  bookModel: shape({
    author: PropTypes.string,
    genre: PropTypes.string,
    id: PropTypes.number,
    image_url: PropTypes.string,
    publisher: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.string
  }),
  optionalArrayOfBooks: arrayOf(
    shape({
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
