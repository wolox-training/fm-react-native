  import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Library from './library/components/bookList';
import BookDetail from './bookDetail';
import routes from './routes';

const Stack = createStackNavigator();

function Navigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={routes.library} component={Library} />
      <Stack.Screen name={routes.bookDetail} component={BookDetail} />
    </Stack.Navigator>
  );
}

export default Navigator;
