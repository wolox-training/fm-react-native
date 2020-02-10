import React from 'react';
import { View } from 'react-native';

import Book from './layout';

function BookContainer({ book }) {
  return (
    <View>
      <Book title={book.title} author={book.author} image_url={book.image_url} />
    </View>
  );
}

export default BookContainer;
