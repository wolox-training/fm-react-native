import React from 'react';

import Book from './layout';

function BookContainer({ book }) {
  return <Book title={book.title} author={book.author} image_url={book.image_url} />;
}

export default BookContainer;
