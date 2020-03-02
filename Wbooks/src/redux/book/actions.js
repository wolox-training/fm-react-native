export const actionTypes = {
  ADD_TO_WISHLIST: 'ADD_BOOK_TO_WISHLIST',
  RENT_BOOK: 'RENT_BOOK'
};

const actionCreator = {
  addToFavourites: book => ({
    type: actionTypes.ADD_TO_WISHLIST,
    payload: book
  }),
  rentBook: book => ({
    type: actionTypes.RENT_BOOK,
    paylaod: book
  })
};

export default actionCreator;
