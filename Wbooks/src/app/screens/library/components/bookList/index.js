import React from 'react';

import BookList from './layout';

function BookListContainer({ props }) {
  return <BookList bookList={props.bookList} />;
}

export default BookListContainer;
