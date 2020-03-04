import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Library from '../library/components/bookList';
import BookDetail from '../bookDetail';
import { defaultNavOptions } from '../../../config/navigationOptions';

import routes from './routes';

const Stack = createStackNavigator();

function LibraryStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={routes.Library}
        component={Library}
        options={defaultNavOptions('Notifications', 'Search', 'LIBRARY')}
      />
      <Stack.Screen
        name={routes.BookDetail}
        component={BookDetail}
        options={defaultNavOptions('Back', null, 'BookDetail')}
      />
    </Stack.Navigator>
  );
}

export default LibraryStackNavigator;
