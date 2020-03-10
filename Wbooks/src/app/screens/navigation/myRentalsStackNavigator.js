import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MyRentals from '../library/components/bookList';
import BookDetail from '../bookDetail';
import { defaultNavOptions } from '../../../config/navigationOptions';

import routes from './routes';

const Stack = createStackNavigator();

function MyRentalsStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={routes.MyRentals}
        component={MyRentals}
        options={defaultNavOptions('Notifications', null, 'MY RENTALS')}
      />
      <Stack.Screen
        name={routes.BookDetail}
        component={BookDetail}
        options={defaultNavOptions('Back', null, 'BookDetail')}
      />
    </Stack.Navigator>
  );
}

export default MyRentalsStackNavigator;
