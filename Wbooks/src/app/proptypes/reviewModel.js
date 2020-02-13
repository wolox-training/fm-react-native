import { string, number } from 'prop-types';

const reviewModel = {
  user: {
    name: string,
    surname: string,
    profilePhoto: string
  },
  comment: string
};

export default reviewModel;
